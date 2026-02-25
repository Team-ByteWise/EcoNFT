'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, LogIn, Leaf, Info, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '#how-it-works', label: 'How', icon: Info },
    { path: '#stats', label: 'Impact', icon: Leaf },
    { path: '/login', label: 'Login', icon: LogIn },
  ];

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out
                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      {/* Glassy container */}
      <div className="relative flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-2xl
                      bg-white/80 dark:bg-white/[0.06] backdrop-blur-xl border border-gray-200 dark:border-white/[0.12]
                      shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">

        {/* Subtle glow behind the navbar */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-green-500/5 to-emerald-500/10 pointer-events-none" />

        {/* Logo */}
        <Link href="/" className="relative flex items-center mr-2 sm:mr-4">
          <Image src="/2.png" alt="logo" height={32} width={80} className="opacity-90 hover:opacity-100 transition-opacity" />
        </Link>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white/90 hover:bg-gray-200/50 dark:hover:bg-white/10"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-300 dark:bg-white/10 mr-1 sm:mr-2" />

        {navLinks.map((link) => {
          const Icon = link.icon;
          const isLogin = link.path === '/login';

          return (
            <Link
              key={link.path}
              href={link.path}
              className={`relative flex flex-col items-center gap-0.5 px-3 sm:px-5 py-2 rounded-xl
                         transition-all duration-300 group min-w-[56px] sm:min-w-[68px]
                         ${isLogin
                           ? 'text-emerald-600 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:bg-emerald-500/25 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-0.5'
                           : 'text-gray-600 dark:text-white/50 hover:text-emerald-500 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:-translate-y-0.5'}`}
            >
              <Icon className={`relative z-10 w-5 h-5 transition-all duration-300
                              group-hover:scale-110 group-hover:-translate-y-0.5
                              ${isLogin ? 'text-emerald-600 dark:text-emerald-300' : ''}`} />

              <span className={`relative z-10 text-[10px] sm:text-xs font-medium tracking-wide transition-all duration-300
                              ${isLogin ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
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
