"use client"; // ✅ Convert to Client Component

import { Award, Leaf, Trees } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const trees = [
    {
      id: 1,
      name: "Oak Tree",
      location: "Central Park, NY",
      date: "2025-02-15",
      status: "Minted",
      image:
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 2,
      name: "Maple Tree",
      location: "Golden Gate Park, SF",
      date: "2025-02-14",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 3,
      name: "Maple Tree",
      location: "Golden Gate Park, SF",
      date: "2025-02-14",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 4,
      name: "Maple Tree",
      location: "Golden Gate Park, SF",
      date: "2025-02-14",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&q=80&w=300",
    },
    
  ];
  return (
    <div className="min-w-full h-screen bg-green-950/30 py-8">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-8 mx-4">
          <h1 className="text-2xl font-bold  text-green-500 ">
            {/*user goes here*/}
            Welcome back, USER!
          </h1>{" "}
          <p className="text-gray-600">Here's your tree planting journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mx-4">
          <div className="card bg-green-100 p-6 rounded-xl ">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-transparent rounded-lg">
                <Trees className="w-6 h-6 text-green-600 " />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Trees Planted</div>
              </div>
            </div>
          </div>
          <div className="card bg-green-100 p-6 rounded-xl ">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-transparent rounded-lg">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">NFTs Minted</div>
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
            <button className="bg-green-100 p-3 rounded-xl hover:bg-green-200 text-green-500">
              Plant a Tree
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          {trees.map((tree) => (
            <div key={tree.id} className="card">
              <img
                src={tree.image}
                alt={tree.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-green-500">{tree.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{tree.location}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{tree.date}</span>
                <span
                  className={`text-sm font-medium ${
                    tree.status === "Minted"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {tree.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
