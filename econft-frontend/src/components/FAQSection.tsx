"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqsData = [
  {
    question: "What is EcoNFT?",
    answer:
      "EcoNFT is a Web3 platform combining NFTs with real-world environmental impact. Every NFT supports verified sustainability initiatives like tree planting.",
  },
  {
    question: "How does buying an EcoNFT help the environment?",
    answer:
      "Each purchase directly funds eco-projects. Blockchain transparency ensures your impact is traceable and verifiable.",
  },
  {
    question: "How do I buy an EcoNFT?",
    answer:
      "Connect your crypto wallet, choose an NFT, and complete the secure blockchain transaction.",
  },
  {
    question: "What blockchain does EcoNFT use?",
    answer:
      "EcoNFT uses Ethereum or Polygon for secure, low-fee and transparent transactions.",
  },
  {
    question: "Can I track my impact?",
    answer:
      "Yes. Every NFT links to impact data showing trees planted and environmental contribution.",
  },
  {
    question: "Is my contribution secure?",
    answer:
      "All transactions are secured and recorded on blockchain for maximum transparency.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // auto open first
  const [search, setSearch] = useState("");

  const filteredFaqs = faqsData.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
  id="faqs"
  className="scroll-mt-32 relative min-h-screen py-24 px-6 overflow-hidden bg-black text-white"
>
      
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-3xl top-10 left-[-100px]"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-teal-500/30 rounded-full blur-3xl bottom-0 right-[-100px]"
        animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto z-10">
        
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
        </div>

        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
            >
              {/* Glowing Border */}
              <div className="rounded-2xl bg-black/80 backdrop-blur-xl p-6 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-gray-300"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;