"use client"
import React, { useState } from 'react';
import { Trees, X } from 'lucide-react';
import NFTCard from './components/nftCard';
import PurchaseModal from './components/Popup';
import Navbar from '../_components/user-navbar';

export type NFT = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
};

const nfts: NFT[] = [
  {
    id: '1',
    title: 'Oak Guardian #001',
    description: 'A majestic oak NFT with unique traits, limited edition',
    price: '0.05 ETH',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    id: '2',
    title: 'Pine Spirit #002',
    description: 'Ancient pine tree spirit captured in digital form',
    price: '0.08 ETH',
    image: 'https://images.unsplash.com/photo-1503785640985-f62e3aeee448?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    id: '3',
    title: 'Maple King #003',
    description: 'Rare maple tree NFT with golden autumn leaves',
    price: '0.12 ETH',
    image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&q=80&w=400&h=400',
  },
];





function Page() {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  const handleBuy = (nft: NFT) => {
    setSelectedNFT(nft);
  };

  const handleConfirmPurchase = () => {
    // Here you would handle the actual purchase logic
    alert(`Purchase confirmed for ${selectedNFT?.title}!`);
    setSelectedNFT(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} onBuy={handleBuy} />
          ))}
        </div>
      </main>
      
      {/* Purchase Modal */}
      {selectedNFT && (
        <PurchaseModal
          nft={selectedNFT}
          onClose={() => setSelectedNFT(null)}
          onConfirm={handleConfirmPurchase}
        />
      )}
    </div>
  );
}

export default Page;
