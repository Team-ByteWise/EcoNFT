import React from 'react'

import { NFT } from '../page';
import { X } from 'lucide-react';
export default function PurchaseModal({
    nft,
    onClose,
    onConfirm,
  }: {
    nft: NFT;
    onClose: () => void;
    onConfirm: () => void;
  }) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full space-y-6 animate-fade-in relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Confirm Purchase</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={nft.image}
                alt={nft.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{nft.title}</h3>
                <p className="text-emerald-600 font-bold">{nft.price}</p>
              </div>
            </div>
            <p className="text-gray-600">
              Are you sure you want to purchase this NFT?
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl
                hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl
                hover:bg-emerald-700 transition-colors"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }