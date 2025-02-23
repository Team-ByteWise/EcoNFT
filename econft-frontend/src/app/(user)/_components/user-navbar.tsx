'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, TreePine, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: TreePine },
    { path: '/leaderboard', label: 'Leaderboard' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/create', label: 'Create NFT' },
  ];

  return (
    <nav
      className={`w-full h-16 bg-gradient-to-r from-green-900 to-green-800 fixed top-0 left-0 z-50 
                 shadow-lg backdrop-blur-sm bg-opacity-95 transition-all duration-500 
                 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="h-full px-6 mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-white hover:text-emerald-300 
                   transition-all duration-300 transform hover:scale-105"
        >
          <Image src="/2.png" width="150" height="150" alt='' />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link animate-[slideInRight_0.5s_ease-out] ${
                  pathname === link.path ? 'active' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white 
                   hover:text-emerald-300 transition-colors duration-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="absolute inset-0 bg-white/10 rounded-lg transition-transform duration-200 
                        transform hover:scale-110" />
          {isMenuOpen ? <X className="w-6 h-6 relative" /> : <Menu className="w-6 h-6 relative" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 backdrop-blur-sm
                   ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-16 h-[calc(100vh-4rem)] w-72 bg-gradient-to-b from-green-900 to-green-800 
                     transform transition-transform duration-300 ease-out shadow-2xl
                     ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={`mobile-nav-link px-6 py-4 text-lg text-white flex items-center space-x-2
                   transition-all duration-300 animate-[fadeIn_0.3s_ease-out_forwards]
                   ${pathname === link.path ? 'bg-green-800 text-emerald-300' : 'hover:bg-green-800/50'}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 
                                       ${isMenuOpen ? 'translate-x-0' : '-translate-x-4'}`} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;