"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf, Globe, ShieldCheck, Rocket, TrendingUp } from "lucide-react";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(target);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
      {isClient ? count : target}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 text-white overflow-hidden">
      <div className="pt-8 px-6">
        <a href="/" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow transition-all">
          <span className="text-lg">←</span> Back to Home
        </a>
      </div>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent"
        >
          EcoNFT Web3 Impact 🌍
        </motion.h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          EcoNFT is a next-generation platform combining blockchain and environmental action. Our mission is to empower users to make a measurable difference by minting NFTs that fund verified green projects. Every NFT is backed by real-world impact, tracked transparently on-chain.
        </p>
        <p className="mt-4 text-green-200 max-w-xl mx-auto text-md">
          Whether you are an individual, organization, or climate activist, EcoNFT provides tools to showcase your contributions, compete on leaderboards, and join a global movement for sustainability.
        </p>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 mb-24">
        {[{ icon: Leaf, value: 12500, suffix: "+", label: "Trees Planted", detail: "Each NFT minted funds the planting of a tree, verified by our partner organizations. Our community has contributed to reforestation efforts across multiple continents." },
          { icon: Globe, value: 48, suffix: "+", label: "Countries Reached", detail: "EcoNFT has a global reach, with users and projects spanning 48+ countries. We partner with local NGOs to ensure impact is meaningful and locally relevant." },
          { icon: TrendingUp, value: 3200, suffix: "+", label: "Active Users", detail: "Our active user base is growing rapidly, with contributors ranging from students to corporate sponsors. Join the movement and see your impact grow!" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-green-500/20 text-center shadow-lg hover:shadow-green-500/40 transition-all duration-300"
          >
            <stat.icon className="mx-auto mb-4 text-green-400" size={40} />
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-gray-300 font-semibold">{stat.label}</p>
            <p className="mt-2 text-green-200 text-sm">{stat.detail}</p>
          </motion.div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 mb-24">
        {[{
            icon: ShieldCheck,
            title: "Blockchain Transparency",
            desc: "Smart contracts guarantee verified environmental actions.",
            detail: "Every transaction is recorded on the Ethereum blockchain, ensuring that each NFT corresponds to a real-world ecological action. Our code is open source and audited for security and trust."
          },
          {
            icon: Leaf,
            title: "Eco Impact NFTs",
            desc: "Each NFT represents a measurable green contribution.",
            detail: "NFTs are not just digital collectibles—they are proof of your environmental impact. Each NFT is linked to a specific action, such as tree planting or carbon offsetting, and can be traded or showcased."
          },
          {
            icon: Globe,
            title: "Global Partnerships",
            desc: "Collaborations with NGOs and climate organizations.",
            detail: "We work with trusted partners worldwide to verify and execute ecological actions. Our partnerships ensure that your contributions are meaningful and effective."
          },
          {
            icon: Rocket,
            title: "Future Expansion",
            desc: "Carbon offset tracking & mobile Web3 integration.",
            detail: "Upcoming features include advanced carbon offset tracking, mobile app integration, and decentralized governance through a climate-focused DAO."
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group bg-gradient-to-br from-green-800/40 to-teal-800/30 p-8 rounded-3xl border border-green-500/20 backdrop-blur-xl transition-all duration-300 hover:border-green-400"
          >
            <feature.icon className="text-green-400 mb-4 group-hover:scale-110 transition-transform" size={36} />
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-green-300 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-300 font-medium">{feature.desc}</p>
            <p className="text-green-200 mt-2 text-sm">{feature.detail}</p>
          </motion.div>
        ))}
      </section>

      {/* ROADMAP TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
          Roadmap 🚀
        </h2>

        <div className="relative border-l border-green-500/30">
          {[
            { phase: "Launch EcoNFT Marketplace", detail: "Our marketplace is live, allowing users to mint, buy, and sell EcoNFTs. Each NFT is tied to a verified environmental action." },
            { phase: "Integrate Carbon Offset Tracking", detail: "We are developing tools to track and display carbon offsets for each NFT, providing users with real-time data on their impact." },
            { phase: "Mobile App Release", detail: "A dedicated mobile app will make it easier for users to participate, track their impact, and access EcoNFT features on the go." },
            { phase: "Global Climate DAO Governance", detail: "We plan to launch a decentralized autonomous organization (DAO) to empower the community in decision-making and project selection." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 w-6 h-6 bg-green-500 rounded-full border-4 border-emerald-900"></span>
              <h3 className="text-xl font-semibold text-green-300">
                Phase {index + 1}
              </h3>
              <p className="text-gray-300 font-medium">{item.phase}</p>
              <p className="text-green-200 mt-2 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-24 px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gradient-to-r from-green-500 to-emerald-400 px-12 py-6 rounded-3xl shadow-2xl cursor-pointer"
        >
          <h3 className="text-2xl font-bold text-black">
            Join the Green Web3 Movement 🌿
          </h3>
        </motion.div>
      </section>
    </main>
  );
}