import React, { useEffect, useRef } from 'react';
import { Trees as Tree, Upload, Map, Coins, ChevronDown, Globe, Users, Leaf } from 'lucide-react';
import HowItWorks from './HowItWorks';
import Stats from './stats';
import Link from 'next/link';
import CTA from './CTA';
import FooterComp from './footer';
import Navbar from '@/components/navbar';

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-100/50 to-transparent dark:from-green-900/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] bg-cover bg-center opacity-20 dark:opacity-20" />
        <div className=' w-full m-10 absolute bg-transparent top-0'>
        <Navbar/>
        </div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 mb-8 fade-up">
            <Globe className="h-4 w-4 mr-2" />
            Join 5,000+ eco-warriors worldwide
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-green-700 dark:text-green-50 mb-6 leading-tight fade-up">
            Turn Your Trees into
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              {' '}Digital Assets
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto mb-12 fade-up">
            Join the green revolution. Plant trees, capture their growth, and earn unique NFTs while contributing to a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up">
            <Link href={"/create"}>
            <button className="group relative inline-flex items-center px-8 py-3 bg-green-700 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
              <Upload className="h-5 w-5 mr-2" />
              Start Planting
              <span className="absolute inset-0 rounded-full border-2 border-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
            </Link>
            <Link href={"/"}>
            <button className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 text-green-900 dark:text-green-50 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm">
              Learn More
            </button>
            </Link>
            
          </div>
        </div>

        <button 
          onClick={() => statsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-green-600 dark:text-green-400" />
        </button>
      </section>

      {/* How It Works */}

      <HowItWorks statsRef={statsRef}/>
      
      {/* Stats Section */}
      <Stats/>
      
      {/* CTA Section */}
      <CTA/>

      <FooterComp/>
    

    </div>
  );
}




