"use client";

import { useUser } from "@/app/context/AuthContext";
import { BASE_URL } from "@/lib/constant";
import { Award, Trees } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { username, authToken } = useUser();
  const [trees, setTrees] = useState<any[]>([]);
  const [selectedTree, setSelectedTree] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getTrees = async () => {
      const res = await fetch(`${BASE_URL}/nft/my-nfts`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
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
            longitude: parseFloat(nft[5]) / 1e6,
          };

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
          <p className="text-gray-600 dark:text-gray-400">
            Here&apos;s your tree planting journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mx-4">
          <div className="card bg-green-100 dark:bg-green-900/40 p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-transparent rounded-lg">
                <Trees className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {trees.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Trees Planted
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-green-100 dark:bg-green-900/40 p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-transparent rounded-lg">
                <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  #1
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Leaderboard Rank
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 mx-4">
          <h2 className="text-xl font-semibold text-green-500">Your Trees</h2>
          <Link href="/create">
            <button className="bg-green-100 dark:bg-green-900/40 p-3 rounded-xl hover:bg-green-200 dark:hover:bg-green-800/50 text-green-900 dark:text-green-300">
              Plant a Tree
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          {trees.map((tree) => (
            <div
              key={tree.uuid}
              onClick={() => {
                setSelectedTree(tree);
                setIsModalOpen(true);
              }}
              className="cursor-pointer card bg-white dark:bg-green-900/30 dark:border dark:border-green-800/50 rounded-xl p-4"
            >
              <img
                src={tree.imageUrl}
                alt={tree.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-green-500">{tree.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {tree.latitude}, {tree.longitude}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {tree.date}
                </span>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && selectedTree && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white dark:bg-green-900/40 rounded-xl p-6 max-w-md w-full relative">
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                ✕
              </button>

              {/* NFT Image */}
              <img
                src={selectedTree.imageUrl}
                alt={selectedTree.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              {/* NFT Info */}
              <h2 className="text-xl font-bold text-green-500 mb-2">
                {selectedTree.name}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Location: {selectedTree.latitude}, {selectedTree.longitude}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Scientific Name: {selectedTree.scientificName}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
