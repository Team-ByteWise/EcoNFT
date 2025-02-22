"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Leaf, TreesIcon as Tree, Sprout } from "lucide-react";
import UserProfile from "./UserProfile";

const users = [
  {
    rank: 1,
    username: "EcoWarrior",
    treeVariant: "Mighty Oak",
    price: 0.5,
    totalTrees: 1000,
  },
  {
    rank: 2,
    username: "GreenThumb",
    treeVariant: "Tall Pine",
    price: 0.4,
    totalTrees: 850,
  },
  {
    rank: 3,
    username: "NatureLover",
    treeVariant: "Young Sapling",
    price: 0.3,
    totalTrees: 700,
  },
  {
    rank: 4,
    username: "ForestFriend",
    treeVariant: "Redwood",
    price: 0.35,
    totalTrees: 600,
  },
  {
    rank: 5,
    username: "TreeHugger",
    treeVariant: "Maple",
    price: 0.25,
    totalTrees: 500,
  },
];
type User = {
  rank: number;
  username: string;
  treeVariant: string;
  price: number;
  totalTrees: number;
};

export default function Leaderboard() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Tree className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Leaf className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Sprout className="h-6 w-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950/40 to-green-950/30 p-8">
      <div className="w-11/12 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 p-6 text-white">
          <h1 className="text-3xl font-bold text-center">
            Tree Planting Leaderboard
          </h1>
        </div>
        <Table className="">
          <TableHeader className="text-green-900">
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Username</TableHead>
              {/* <TableHead>Tree Variant</TableHead>
              <TableHead>Price of NFT</TableHead> */}
              <TableHead>Total Trees Planted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.rank}
                className={user.rank <= 3 ? "bg-green-50 text-green-500" : "text-green-500"}
              >
                <TableCell className="font-medium ">
                  <div className="flex items-center gap-2 ">
                    {getRankIcon(user.rank)}
                    {user.rank}
                  </div>
                </TableCell>
                <TableCell>
                  <button
                    // onClick={() => setSelectedUser(user)}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    {user.username}
                  </button>
                </TableCell>
                {/* <TableCell
                className="text-green-500">{user.treeVariant}</TableCell> */}
                {/* <TableCell
                className="text-green-500">{user.price} ETH</TableCell> */}
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    {user.totalTrees}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedUser && (
        <UserProfile
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
