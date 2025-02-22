import axios from "axios";
import { Project as ProjectType, Tree as TreeType, TreeDetails as TreeDetailsType, PrismaClient } from "@prisma/client";

const BASE_URL = "https://tree-nation.com";

interface Project {
  description: string;
  id: number;
  lat: number;
  location: string;
  long: number;
  name: string;
  slug: string;
  species_price_from: number;
  status: string;
  url: string;
}

interface ProjectDetails {
  description: string;
  id: number;
  image: string;
  lat: number;
  long: number;
  location: string;
  name: string;
  slug: string;
  species_price_from: number;
  status: string;
  url: string;
}

interface ProjectSite {
  address: string;
  created_at: string;
  description: string;
  id: number;
  image: string;
  name: string;
  polygon_data: string;
  project_id: number;
  slug: string;
}

interface Tree {
  id: number;
  life_time_CO2: number;
  name: string;
  price: number;
  project_id: number;
  stock: number;
}

interface TreeDetails {
  average_natural_life_span: number;
  category: {
    id: number;
    name: string;
  };
  co2_offset: number;
  co2_offset_period: string;
  common_names: string;
  family: string;
  foliage: {
    deprecated: string;
    id: number;
    name: string;
  };
  foliage_type: {
    id: number;
    name: string;
  };
  height: string;
  id: number;
  image: string;
  life_time_CO2: number;
  name: string;
  origin_type: {
    id: number;
    name: string;
  };
  particularities: string;
  planter_likes: string;
  price: number;
  project_id: number;
  stock: number;
}

async function fetchProjects() {
  try {
    const response = await axios.get(`${BASE_URL}/api/projects?status=active`);
    return response.data as Project[];
  } catch (error) {
    console.log(error);
  }
}

async function fetchProjectDetails(projectId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/api/projects/${projectId}`);
    return response.data as ProjectDetails;
  } catch (error) {
    console.log(error);
  }
}

async function fetchProjectSites(projectId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/api/projects/${projectId}/planting-sites`);
    return response.data as ProjectSite[];
  } catch (error) {
    console.log(error);
  }
}

async function fetchTrees(projectId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/api/projects/${projectId}/species`);
    return response.data as Tree[];
  } catch (error) {
    console.log(error);
  }
}

async function fetchTreeDetails(treeId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/api/species/${treeId}`);
    return response.data as TreeDetails;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProjectsAll() {
  const projects = await fetchProjects();
  if (!projects) return;

  const actualProjects: ProjectType[] = [];

  for (const project of projects) {
    actualProjects.push({
      id: "",
      apiProjectId: project.id,
      name: project.name,
      description: project.description,
      latitude: project.lat,
      longitude: project.long,
      minPrice: project.species_price_from,
    });
  }

  return actualProjects;
}

export async function* fetchTreesAll(projects: ProjectType[]) {
  let i = 0;

  for (const project of projects) {
    const trees = await fetchTrees(project.apiProjectId);
    if (!trees) continue;

    let actualTrees: {
      tree: TreeType;
      details: TreeDetailsType;
      category: string;
    }[] = [];

    for (const tree of trees) {
      const treeDetails = await fetchTreeDetails(tree.id);
      if (!treeDetails) continue;

      actualTrees.push({
        tree: {
          id: "",
          apiTreeId: tree.id,
          projectId: project.id,
          name: treeDetails.name,
          price: tree.price,
          stock: tree.stock,
        },
        details: {
          id: "",
          treeId: tree.id + "",
          commonNames: treeDetails.common_names,
          family: treeDetails.family,
          particularities: treeDetails.particularities,
          planterLikes: treeDetails.planter_likes,
          categoryId: "",
          foliageType: treeDetails.foliage.name,
          height: treeDetails.height,
          imageUrl: treeDetails.image,
          lifeSpan: treeDetails.average_natural_life_span,
          lifetimeCo2: treeDetails.life_time_CO2,
          co2Offset: treeDetails.co2_offset,
          co2OffsetPeriod: treeDetails.co2_offset_period,
        },
        category: treeDetails.category.name,
      });
    }

    console.log(`Pushed project: ${++i}`);

    yield {
      project,
      trees: actualTrees,
    };
  }
}

const prisma = new PrismaClient();

export async function saveToDB(projectWithTrees: {
  project: ProjectType;
  trees: {
    tree: TreeType;
    details: TreeDetailsType;
    category: string;
  }[];
}) {
  try {
    const { project, trees } = projectWithTrees;
    const { id, ...rest } = project;
    const createdProject = await prisma.project.create({
      data: {
        ...rest
      }
    });

    for (const { tree, details, category } of trees) {
      const createdCategory = await prisma.category.upsert({
        where: {
          name: category
        },
        update: {},
        create: {
          name: category
        }
      });

      const { id: treeId, ...treeRest } = tree;
      const createdTree = await prisma.tree.create({
        data: {
          ...treeRest,
          projectId: createdProject.id
        }
      });

      const { id: detailsId, categoryId, ...detailsRest } = details;
      await prisma.treeDetails.create({
        data: {
          ...detailsRest,
          treeId: createdTree.id,
          categoryId: createdCategory.id
        }
      });
    }

    return true;

  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function main() {
  const projects = await fetchProjectsAll();
  if (!projects) return;

  for await (const projectWithTrees of fetchTreesAll(projects)) {
    await saveToDB(projectWithTrees);
  }
}

main();