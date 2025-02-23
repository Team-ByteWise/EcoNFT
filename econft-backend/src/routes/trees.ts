import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/projects", async (req: Request, res: Response) => {
  const projects = await prisma.project.findMany({});
  res.json(projects);
})

router.get("/projects/:id/trees", async (req: Request, res: Response) => {
  const { id } = req.params;
  const trees = await prisma.tree.findMany({ where: { projectId: id } });
  res.json(trees);
});

router.get("/trees/:treeId", async (req: Request, res: Response) => {
  const { treeId } = req.params;
  const tree = await prisma.tree.findUnique({ where: { id: treeId } });
  res.json(tree);
});

router.get("/trees", async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  
  const offset = (page - 1) * limit;
  const trees = await prisma.tree.findMany({select: {
    id: true,
    name: true,
    price: true,
    details: true,
    project: true
  }});
  res.json(trees.slice(offset, offset + limit));
})

export default router;