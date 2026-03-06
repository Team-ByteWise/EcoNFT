"use client";

import { useUser } from "@/app/context/AuthContext";
import { BASE_URL } from "@/lib/constant";
import { Award, Trees } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { username, authToken } = useUser();
  const [trees, setTrees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrees = async () => {
      try {
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
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse card bg-white dark:bg-green-900/30 rounded-xl p-4"
                >
                  <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ))
            : trees.map((tree) => (
                <div
                  key={tree.uuid}
                  className="card bg-white dark:bg-green-900/30 dark:border dark:border-green-800/50 rounded-xl p-4"
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
      </div>
    </div>
  );
}
