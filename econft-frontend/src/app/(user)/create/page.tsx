"use client";

import React, { useEffect, useState } from "react";
import NFTCard from "./components/nftCard";
import PurchaseModal from "./components/Popup";
import { BASE_URL } from "@/lib/constant";
import Payment from "./components/Payment"; // Import the Payment component

export type Tree = {
  id: string;
  name: string;
  price: number;
  details: {
    commonNames: string;
    family: string;
    particularities: string;
    imageUrl: string;
    planterLikes: string;
  };
};

function Page() {
  const [selectedNFT, setSelectedNFT] = useState<Tree | null>(null);
  const [trees, setTrees] = useState<Tree[]>([]);
  const [startPayment, setStartPayment] = useState(false);

  useEffect(() => {
    fetch(BASE_URL + "/data/trees")
      .then((response) => response.json())
      .then((data) => {
        setTrees(data);
      });
  }, []);

  const handleBuy = (nft: Tree) => {
    setSelectedNFT(nft);
    setStartPayment(false); // Reset payment state
  };

  const handleConfirmPurchase = () => {
    setStartPayment(true); // Trigger Payment Component
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trees.map((nft) => (
            <NFTCard key={nft.id} nft={nft} onBuy={handleBuy} />
          ))}
        </div>
      </main>

      {/* Payment Component (Only when startPayment is true) */}
      {startPayment && selectedNFT && (
        <Payment tree={selectedNFT} onSuccess={() => setStartPayment(false)} />
      )}

      {selectedNFT && (
        <PurchaseModal
          tree={selectedNFT}
          onClose={() => setSelectedNFT(null)}
          onConfirm={handleConfirmPurchase}
        />
      )}
    </div>
  );
}

export default Page;
