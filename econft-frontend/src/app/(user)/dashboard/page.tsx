"use client";

import { useUser } from "@/app/context/AuthContext";
import { BASE_URL } from "@/lib/constant";
import { Award, Trees } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { username, authToken } = useUser();
  const [trees, setTrees] = useState<any[]>([]);

  useEffect(() => {
    const getTrees = async () => {
      const res = await fetch(`${BASE_URL}/nft/my-nfts`, {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      });
      const data = await res.json();
      if (data.success) {
        const { nfts } = data;
        const arrayOfNfts = [];
        for (const nft of nfts) {
            const nftObject = {
              name: nft[0],
              scientificName: nft[1],
              imageUrl: nft[2],
              uuid: nft[3],
              latitude: parseFloat(nft[4]) / 1e6,
              longitude: parseFloat(nft[5]) / 1e6
            }

            arrayOfNfts.push(nftObject);
        }

        setTrees(arrayOfNfts);
      }
    };
    getTrees();
  }, [authToken]);

  return (
    <div className="min-w-full min-h-screen py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 mx-4">
          <h1 className="text-2xl font-bold  text-green-500 ">
            {/*user goes here*/}
            Welcome back, {username}!
          </h1>{" "}
          <p className="text-gray-600">Here's your tree planting journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mx-4">
          <div className="card bg-green-100 p-6 rounded-xl ">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-transparent rounded-lg">
                <Trees className="w-6 h-6 text-green-600 " />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{trees.length}</div>
                <div className="text-sm text-gray-600">Trees Planted</div>
              </div>
            </div>
          </div>
          <div className="card bg-green-100 p-6 rounded-xl ">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-transparent rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">#42</div>
                <div className="text-sm text-gray-600">Leaderboard Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 mx-4">
          <h2 className="text-xl font-semibold text-green-500">Your Trees</h2>
          <Link href="/create">
            <button className="bg-green-100 p-3 rounded-xl hover:bg-green-200 text-green-900">
              Plant a Tree
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          {trees.map((tree) => (
            <div key={tree.uuid} className="card">
              <img
                src={tree.imageUrl}
                alt={tree.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-green-500">{tree.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{tree.latitude}, {tree.longitude}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{tree.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
