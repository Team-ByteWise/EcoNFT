"use client";
import React, { FormEvent, FormEventHandler } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password confirmation failed");
      return;
    }
  };

  return (
    <div className="flex h-screen bg-cover justify-center items-center w-screen">
      <div
        className="hidden md:flex md:w-1/2 md:bg-cover md:bg-center md:bg-no-repeat h-screen opacity-50"
        style={{
          backgroundImage: "url('/assets/lol.jpg')",
        }}
      ></div>
      <div className="md:w-1/2 md:flex md:items-center md:justify-center ">
        <div className=" p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col gap-4"
          >
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-black "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded-full hover:bg-green-800 transition mt-10"
            >
              Login
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-green-700">
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
