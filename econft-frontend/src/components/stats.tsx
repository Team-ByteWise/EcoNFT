"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
  { icon: "🌳", label: "Trees Planted", value: 10000 },
  { icon: "👥", label: "Active Users", value: 5000 },
  { icon: "🌿", label: "NFTs Minted", value: 5000 },
];

export default function ImpactStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const imgUrl =
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          Math.min(
            count + Math.floor(stats[index].value / 200),
            stats[index].value
          )
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-16 text-white"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensures full coverage
        backgroundColor: "rgba(0, 0, 10, 0.5)", // Overlay color
        backgroundBlendMode: "overlay", // Ensures the overlay effect works
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Impact So Far
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {counts[index].toLocaleString()}
              </motion.div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}