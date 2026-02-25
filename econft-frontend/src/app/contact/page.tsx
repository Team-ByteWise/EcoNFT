"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#052e16] via-[#064e3b] to-[#022c22] text-white flex items-center justify-center px-6 py-16 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-10"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
          Contact EcoNFT
        </h1>

        <p className="text-gray-300 mb-10 text-lg">
          Turning environmental action into digital assets.  
          Connect with us for partnerships, support, or collaboration.
        </p>

        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>&larr;</span> Back to Home
          </a>
        </div>

        {/* Project Info Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-emerald-400">
            Project Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Smart Contracts:</span> EcoNFT.sol, TreePayment.sol</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Frontend:</span> Next.js, TailwindCSS</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Backend:</span> Node.js, Prisma, Express</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Blockchain:</span> Ethereum-compatible</p>
            </div>
            {/* Additional project data */}
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Features:</span> NFT minting, tree planting rewards, leaderboard, secure authentication, payment integration</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Impact:</span> Every NFT represents a real-world environmental action, tracked transparently on blockchain</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Roadmap:</span> Expansion to more environmental assets, mobile app, community rewards, multi-chain support</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
              <p><span className="text-green-400 font-medium">Partners:</span> NGOs, environmental organizations, blockchain communities</p>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="https://github.com/econft"
              target="_blank"
              className="inline-flex items-center gap-2 text-green-300 hover:text-white transition duration-300 hover:scale-105"
            >
              <Github size={18} /> github.com/econft
            </a>
            {/* More project resources */}
            <div className="mt-4 text-sm text-gray-400">
              <p><span className="text-green-400 font-medium">Whitepaper:</span> <a href="https://econft.com/whitepaper.pdf" target="_blank" className="underline text-green-300">Download PDF</a></p>
              <p><span className="text-green-400 font-medium">Demo:</span> <a href="https://demo.econft.com" target="_blank" className="underline text-green-300">Live Demo</a></p>
            </div>
          </div>
        </div>

        {/* Contact Links Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-emerald-400">
            Connect With Us
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">

            {/* Email */}
            <a
              href="mailto:info@econft.com"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105"
            >
              <Mail size={20} />
              <span>Email Us</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/econft"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-sky-500/20 hover:bg-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/40 hover:scale-105"
            >
              <Twitter size={20} />
              <span>Twitter</span>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/econft"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-indigo-500/20 hover:bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Join Discord</span>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-white/10 pt-6 text-gray-400 text-sm">
          <p>
            We are committed to environmental impact and digital innovation.  
            Let's build a greener blockchain future together 🌱
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;