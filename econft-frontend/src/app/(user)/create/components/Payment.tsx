"use client";
import { useState } from "react";
import { ethers } from "ethers";
import { BASE_URL } from "@/lib/constant";
import { useUser } from "@/app/context/AuthContext";

const CONTRACT_ADDRESS = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

export default function Payment({ tree, onSuccess }: { tree: any; onSuccess: () => void }) {
  const { authToken } = useUser();
  const [txHash, setTxHash] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  async function payForTree() {
    if (!window.ethereum) return alert("MetaMask not installed!");

    try {
      setIsLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, [
        "function buyTree(string memory treeId) public payable",
      ], signer);

      const tx = await contract.buyTree(tree.id, { value: ethers.parseEther((tree.price / 1e5).toString()) });
      await tx.wait();
      setTxHash(tx.hash);
      fetch(BASE_URL + "/order", {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          treeId: tree.id,
          quantity: 1,
          txHash: tx.hash
        })
      }).then(async (res: any) => {
        const data = await res.json();
        
        if (data.success !== undefined && !data.success) {
          alert(data.error);
        } else {
          alert("Payment Successful! The NFT has been minted for your account!");
        }

        setIsLoading(false);
        onSuccess();
      })
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert("Transaction Failed!");
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg z-60 text-black">
        <h2 className="text-xl font-bold mb-4">Confirm Payment</h2>
        <p>Buying: {tree.name}</p>
        <p>Price: {tree.price / 1e5} ETH</p>
        {!isLoading && <button onClick={payForTree} className="mt-4 bg-green-500 text-white p-2 rounded">
          Pay with MetaMask
        </button>}

        {isLoading && <div className="mt-4 text-emerald-600">Transaction Ongoing...</div>}
        {txHash && <p className="mt-2 text-green-600">Tx Hash: {txHash}</p>}
      </div>
    </div>
  );
}
