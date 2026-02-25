'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Trophy, LayoutDashboard, PlusCircle } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/leaderboard', label: 'Board', icon: Trophy },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/create', label: 'Create', icon: PlusCircle },
  ];

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out
                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      {/* Glassy container */}
      <div className="relative flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-2xl
                      bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]
                      shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">

        {/* Subtle glow behind the navbar */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-green-500/5 to-emerald-500/10 pointer-events-none" />

        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          const Icon = link.icon;

          return (
            <Link
              key={link.path}
              href={link.path}
              className={`relative flex flex-col items-center gap-0.5 px-3 sm:px-5 py-2 rounded-xl
                         transition-all duration-300 group min-w-[60px] sm:min-w-[72px]
                         ${isActive
                           ? 'text-emerald-300'
                           : 'text-white/50 hover:text-white/90'}`}
            >
              {/* Active indicator background */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-emerald-500/15 border border-emerald-400/20
                              shadow-[0_0_20px_rgba(16,185,129,0.15)]
                              animate-[fadeIn_0.3s_ease-out]" />
              )}

              {/* Active top dot */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
                              bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              )}

              <Icon className={`relative z-10 w-5 h-5 transition-all duration-300
                              ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:-translate-y-0.5'}`} />

              <span className={`relative z-10 text-[10px] sm:text-xs font-medium tracking-wide transition-all duration-300
                              ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
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
