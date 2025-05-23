import React from 'react';
import { Trees as Tree, Upload, Map, Coins, ChevronDown, Globe, Users, Leaf } from 'lucide-react';
import StepCard from './StepCard';

interface Props {
  statsRef: React.RefObject<HTMLDivElement | null>;
}

const HowItWorks = ({ statsRef }: Props) => {
  return (
    <div className="bg-gradient-to-b from-green-950 to-green-900 py-20 px-10 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-emerald-300 blur-3xl"></div>
      </div>

      <section ref={statsRef} className="relative z-10 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
            How It Works
          </h2>
          <p className="text-gray-100 dark:text-gray-300 max-w-2xl mx-auto">
            Join our mission to create a greener planet in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <StepCard
            number="01"
            icon={<Tree className="text-green-400" />}
            title="Buy a Tree"
            description="Choose and buy a tree from our site"
          />
          <StepCard
            number="02"
            icon={<Upload className="text-green-400" />}
            title="Plant the tree"
            description="We ask Tree-Nation to plant the tree"
          />
          <StepCard
            number="03"
            icon={<Map className="text-green-400" />}
            title="Get the plant details"
            description="We get the plant details and make the NFT"
          />
          <StepCard
            number="04"
            icon={<Coins className="text-green-400" />}
            title="Get NFT"
            description="Receive a unique NFT for your contribution"
          />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;