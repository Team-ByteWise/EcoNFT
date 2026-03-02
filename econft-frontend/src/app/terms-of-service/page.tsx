"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By using econfT, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please discontinue use immediately.",
    },
    {
      title: "2. Use of the Platform",
      list: [
        "You must be at least 18 years old or have guardian consent.",
        "You agree not to use the platform for unlawful activities.",
        "Digital assets (EcoNFTs) are subject to blockchain risks such as volatility and regulatory changes.",
      ],
    },
    {
      title: "3. Intellectual Property",
      content:
        "All platform content including software, branding, graphics, and databases belong to econfT or its licensors. Unauthorized reproduction or redistribution is prohibited.",
    },
    {
      title: "4. User Conduct",
      list: [
        "No unauthorized system access attempts.",
        "No harassment, abuse, or harmful behavior.",
        "No malicious software uploads or distribution.",
      ],
    },
    {
      title: "5. Limitation of Liability",
      content:
        "econfT shall not be liable for any direct or indirect damages resulting from the use of the platform. All transactions are conducted at your own risk.",
    },
    {
      title: "6. Changes to Terms",
      content:
        "We reserve the right to update these terms at any time. Continued usage after updates implies acceptance.",
    },
    {
      title: "7. Contact",
      content:
        "For any questions regarding these Terms, please contact us through the links provided in the footer.",
    },
  ];

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
            Terms of Service
          </h1>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Welcome to <span className="text-emerald-300 font-semibold">econfT</span>.
            By accessing or using our platform, you agree to comply with and be
            bound by the following terms. Please read them carefully before
            proceeding.
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

                {section.content && (
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="mt-3 list-disc ml-6 space-y-2 text-gray-400">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="hover:text-emerald-300 transition-colors duration-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-500 text-center">
            © 2025 <span className="text-emerald-400">econfT</span>. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;