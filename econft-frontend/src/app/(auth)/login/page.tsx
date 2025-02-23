"use client";
import { useAccount, useSignMessage } from "wagmi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BASE_URL } from "@/lib/constant";

export default function LoginPage() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isConnected && address) {
      handleLogin();
    }
  }, [isConnected, address]);

  async function handleLogin() {
    try {
      setError("");

      // Request nonce from backend
      const res = await fetch(BASE_URL + "/auth/request-nonce", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });

      const { nonce } = await res.json();

      // Sign the nonce
      const signature = await signMessageAsync({ message: nonce });

      // Verify signature with backend
      const authRes = await fetch(BASE_URL + "/auth/verify-signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, signature }),
      });

      const { token } = await authRes.json();
      localStorage.setItem("authToken", token);

      setTimeout(() => {
        // Redirect to dashboard or homepage
        router.push("/dashboard");
      }, 1500);

    } catch (err) {
      console.error(err);
      setError("Authentication failed. Please try again.");
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="p-8 rounded-2xl shadow-xl w-96 backdrop-blur-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login with Wallet</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex justify-center">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
