"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LogIn, Leaf, Info, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 🔥 Scroll handler
  const handleScroll = (id) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "how-it-works", label: "How", icon: Info },
    { path: "stats", label: "Impact", icon: Leaf },
    { path: "faqs", label: "FAQs", icon: Info },
    { path: "/contact", label: "Contact", icon: Info },
    { path: "/login", label: "Login", icon: LogIn },
  ];

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    >
      <div className="relative flex items-center gap-2 px-6 py-3 rounded-2xl
      bg-white/80 dark:bg-white/[0.06] backdrop-blur-xl border border-gray-200 dark:border-white/[0.12]
      shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-green-500/5 to-emerald-500/10 pointer-events-none" />

        {/* Logo */}
        <Link href="/" className="relative flex items-center mr-4">
          <Image
            src="/2.png"
            alt="logo"
            height={32}
            width={80}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-9 h-9 rounded-xl
          text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white
          hover:bg-gray-200/50 dark:hover:bg-white/10 transition"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>

        <div className="w-px h-8 bg-gray-300 dark:bg-white/10 mx-2" />

        {navLinks.map((link) => {
          const Icon = link.icon;
          const isLogin = link.path === "/login";
          const isRoute = link.path.startsWith("/");

          if (!isRoute) {
            return (
              <button
                key={link.label}
                onClick={() => handleScroll(link.path)}
                className="flex flex-col items-center px-4 py-2 rounded-xl
                text-gray-600 dark:text-white/50
                hover:text-emerald-500 dark:hover:text-emerald-300
                hover:bg-emerald-50 dark:hover:bg-emerald-500/10
                transition group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition" />
                <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                  {link.label}
                </span>
              </button>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.path}
              className={`flex flex-col items-center px-4 py-2 rounded-xl transition group
              ${isLogin
                ? "text-emerald-600 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-400/20"
                : "text-gray-600 dark:text-white/50 hover:text-emerald-500 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-500/10"}`}
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition" />
              <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;