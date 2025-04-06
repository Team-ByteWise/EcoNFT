import React, { useEffect, useRef } from 'react';
import { Trees as Tree, Upload, Map, Coins, ChevronDown, Globe, Users, Leaf } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import HowItWorks from './HowItWorks';
import Stats from './stats';
import Link from 'next/link';
import CTA from './CTA';
import FooterComp from './footer';
import Navbar from '@/components/navbar';

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

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
      <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background elements - keeping as requested */}
        <div className="absolute inset-0 bg-gradient-radial from-green-100/50 to-transparent dark:from-green-900/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] bg-cover bg-center opacity-20 dark:opacity-20" />
        
        {/* Digital grid overlay - adds futuristic element */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-green-400 to-transparent"
              style={{ top: `${10 * (i + 1)}%` }}
            ></div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent"
              style={{ left: `${10 * (i + 1)}%` }}
            ></div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-green-400/70"
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <div className='w-full m-10 absolute bg-transparent top-0'>
          <Navbar/>
        </div>
        <motion.div 
          className="relative text-center px-4 max-w-4xl mx-auto"
          style={{ opacity, scale, y }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-100/10 backdrop-blur-md border border-green-500/30 text-green-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Globe className="h-4 w-4 mr-2" />
            Join 5,000+ eco-warriors worldwide
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Turn Your Trees into</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {' '}Digital Assets
            </span>
          </motion.h1>
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-green-900/60 backdrop-blur-md"></div>
                <div className="relative z-10 p-6">
                  <p className="text-xl text-white">
                    <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200">Join the green revolution.</span><br/>
                    <span className="text-gray-100">Plant trees, capture their growth, and earn unique NFTs while contributing to a sustainable future.</span>
                  </p>
                </div>
                

                <div className="absolute inset-0 border border-green-400/30 rounded-xl"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href={"/login"}>
              <button className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:shadow-lg hover:shadow-green-600/40 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-green-400/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <Upload className="h-5 w-5 mr-2" />
                Start Planting
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.button 
          onClick={() => statsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-green-400" />
        </motion.button>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <HowItWorks statsRef={statsRef}/>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Stats/>
      </motion.div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-green-900/20 to-black/80"></div>
          {[...Array(20)].map((_, i) => (
            <div 
              key={`h-${i}`}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
              style={{ top: `${5 * (i + 1)}%`, transform: 'translateZ(0)' }}
            ></div>
          ))}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`v-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-green-500/30 to-transparent"
              style={{ left: `${5 * (i + 1)}%`, transform: 'translateZ(0)' }}
            ></div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
   
            <CTA/>
            

            {[...Array(15)].map((_, i) => (
              <motion.div 
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-green-400"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 mix-blend-overlay"
              animate={{
                opacity: [0, 0.05, 0],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="relative h-px w-full overflow-hidden ">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 50
          }}
        >

          <FooterComp/>
        </motion.div>
      </div>
    </div>
  );
}