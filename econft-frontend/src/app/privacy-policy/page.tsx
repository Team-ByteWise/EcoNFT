
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect information you provide directly to us, such as your name, email address, and any other information you choose to share.",
  },
  {
    title: "How We Use Information",
    content:
      "We use your information to provide, maintain, and improve our services, and to communicate with you about updates or offers.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us through our website.",
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-emerald-950 to-black text-gray-200 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-10 px-6 py-2 rounded-full border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-md hover:shadow-emerald-500/40"
        >
          ← Back to Home
        </Link>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          {/* Title */}
          <h1 className="text-4xl font-bold text-emerald-400 mb-6 tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how econft collects, uses, and protects your information when you use our services.
          </p>
          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={sectionVariant}
                className="group p-6 rounded-2xl border border-white/10 hover:border-emerald-500 transition-all duration-300 bg-white/5 hover:bg-emerald-500/5"
              >
                <h2 className="text-xl font-semibold text-emerald-300 group-hover:text-emerald-400 transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-500 text-center">
            © 2025 <span className="text-emerald-400">econft</span>. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
