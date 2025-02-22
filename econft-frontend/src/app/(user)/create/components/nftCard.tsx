import React from 'react'

import { NFT } from '../page';



export default function NFTCard({ nft, onBuy }: { nft: NFT; onBuy: (nft: NFT) => void }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:translate-y-[-4px]">
        <img
            src={nft.image}
            alt={nft.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">{nft.title}</h3>
            <p className="text-gray-600">{nft.description}</p>
            <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-emerald-600">{nft.price}</span>
            <button
                onClick={() => onBuy(nft)}
                className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-xl
                hover:bg-emerald-700 transform transition-all hover:scale-105
                active:scale-95"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }