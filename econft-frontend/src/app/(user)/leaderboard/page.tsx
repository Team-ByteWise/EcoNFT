"use client";

import { useEffect, useState } from "react";
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
import { BASE_URL } from "@/lib/constant";

type User = {
  wallet: string;
  username: string;
  _count: {
    transactions: number;
  }
};

export default function Leaderboard() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(BASE_URL + "/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          alert("Failed to fetch leaderboard");
          return;
        }
        setUsers(data.leaderboard);
      });
  }, []);

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
        <Table className="w-full table-fixed">
          <TableHeader className="text-green-900">
            <TableRow>
              <TableHead className="w-1/3 text-center">Rank</TableHead>
              <TableHead className="w-1/3 text-center">Username</TableHead>
              {/* <TableHead>Tree Variant</TableHead>
              <TableHead>Price of NFT</TableHead> */}
              <TableHead className="w-1/3 text-center">Total Trees Planted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={index}
                className={index <= 2 ? "bg-green-50 text-green-500 text-center " : "text-green-500 text-center "}
              >
                <TableCell className="font-medium  text-center flex items-center justify-center">
                  <div className="flex items-center gap-2 ">
                    {getRankIcon(index + 1)}
                    {index + 1}
                  </div>
                </TableCell>
                <TableCell>
                  <button
                    // onClick={() => setSelectedUser(user)}
                    className="text-green-600 hover:text-green-800 font-medium text-center"
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
                    {user._count.transactions}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* {selectedUser && (
        <UserProfile
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )} */}
    </div>
  );
}
