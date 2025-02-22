"use client";
import React from "react";
import { useState } from "react";
import { Wallet, Leaf, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PaymentStatus =
  | "initial"
  | "connecting"
  | "connected"
  | "processing"
  | "success";
const page = () => {
  const [treeCount, setTreeCount] = useState(1);
  const [status, setStatus] = useState<PaymentStatus>("initial");
  const [isNFTClaimed, setIsNFTClaimed] = useState(false); // New state to track NFT claim
  const ethPrice = 0.01;
  const totalCost = (ethPrice * treeCount).toFixed(3);

  const handleConnectWallet = async () => {
    setStatus("connecting");
    // Simulate wallet connection
    setTimeout(() => {
      setStatus("connected");
    }, 1500);
  };

  const handleDonate = async () => {
    setStatus("processing");
    // Simulate donation process
    setTimeout(() => {
      setStatus("success");
    }, 2000);

    // Handle NFT claim and reset to initial state
  };
    const handleClaimNFT = () => {
      // Mark NFT as claimed
      setIsNFTClaimed(true);

      // Simulate NFT claiming process and reset to initial state after delay
      setTimeout(() => {
        setStatus("initial");
        setTreeCount(1); // Reset tree count
        setIsNFTClaimed(false); // Reset NFT claimed status
        console.log("NFT claimed successfully, page reset to initial state");
      }, 2000); // 2-second delay before resetting
    };

  return (
    <div className="w-full h-screen ">
      <div className="max-w-2xl mx-auto mt-6">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-green-500">
            Donate & Redeem Your Tree NFT
          </h1>
          <p className="text-gray-600 mt-2">
            Donate to TreeNation and get an NFT of your planted tree as a
            reward!
          </p>
        </div>

        <div className="card mb-8 mx-4">
          <div className="space-y-6">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-900 mb-2 rounded-xl">
                {totalCost} ETH
              </div>
              <div className="text-green-600">
                = {treeCount} Tree{treeCount > 1 ? "s" : ""}
              </div>
            </div>

            <div>
              <label className="label">Select Number of Trees</label>
              <div className="grid grid-cols-3 gap-4">
                {[1, 5, 10].map((count) => (
                  <button
                    key={count}
                    onClick={() => setTreeCount(count)}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-colors ",
                      treeCount === count
                        ? "border-green-600 bg-green-50 text-green-600 hover:bg-green-100"
                        : "border-green-200 hover:green-gray-300 text-gray-600 hover:bg-green-50"
                    )}
                  >
                    {count} Tree{count > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
            </div>

            {status === "initial" && (
              <Button
                onClick={handleConnectWallet}
                className="w-full bg-green-50 hover:bg-green-100 text-green-500 rounded-xl"
              >
                <Wallet className="w-5 h-5 mr-2 " />
                Connect Wallet
              </Button>
            )}

            {status === "connecting" && (
              <Button disabled className="w-full">
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Connecting Wallet...
              </Button>
            )}

            {status === "connected" && (
              <Button
                onClick={handleDonate}
                className="w-full bg-green-50 hover:bg-green-100 text-green-500 rounded-xl"
              >
                <Leaf className="w-5 h-5 mr-2 text-green-500" />
                Donate Now
              </Button>
            )}

            {status === "processing" && (
              <div className="space-y-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 animate-pulse rounded-full" />
                </div>
                <Button disabled className="w-full">
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing Donation...
                </Button>
              </div>
            )}

            {/* Success State: Show Claim NFT or NFT Claimed */}
            {status === "success" && (
              <div className="space-y-4">
                <div className="text-center text-green-600">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">
                    Thank you! Your tree is being planted by TreeNation
                  </p>
                </div>
                {isNFTClaimed ? (
                  <div className="text-center text-green-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 inline-block mr-2" />
                    NFT Claimed
                  </div>
                ) : (
                  <Button
                    onClick={handleClaimNFT}
                    className="w-full bg-green-50 hover:bg-green-100 text-green-600 rounded-xl"
                  >
                    Claim NFT
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://tree-nation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <img
              src="https://tree-nation.com/images/logo.png"
              alt="TreeNation"
              className="h-6"
            />
            Powered by TreeNation
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
