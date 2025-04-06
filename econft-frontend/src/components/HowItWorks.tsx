import React from 'react'
import { Trees as Tree, Upload, Map, Coins, ChevronDown, Globe, Users, Leaf } from 'lucide-react';
import StepCard from './StepCard';


interface Props {
    statsRef: React.RefObject<HTMLDivElement | null>;
    }
const HowItWorks = ({statsRef}: Props) => {
  return (
    <div className='bg-gradient-to-r from-green-500 to-green-700 py-20 px-10'>
        <section ref={statsRef} className="py-16">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-50 mb-4">
            How It Works
          </h2>
          <p className="text-gray-100 dark:text-gray-300 max-w-2xl mx-auto">
  Join our mission to <span className="font-bold text-green-300">create a greener planet</span> in four simple steps
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <StepCard
  number="01"
  icon={<Tree className="text-green-300" />}
  title="Buy a Tree"
  description="Choose and buy a tree from our site"
      />
          <StepCard
            number="02"
            icon={<Upload />}
            title="Plant the tree"
            description="We ask Tree-Nation to plant the tree"
          />
          <StepCard
            number="03"
            icon={<Map />}
            title="Get the plant details"
            description="We get the plant details and make the NFT"
          />
          <StepCard
            number="04"
            icon={<Coins />}
            title="Get NFT"
            description="Receive a unique NFT for your contribution"
          />
          <div className="text-center mt-16">
  <h3 className="text-2xl font-bold text-green-500">What Our Users Say</h3>
  <p className="text-gray-100">"This initiative is amazing! I feel great contributing to the planet!" - User A</p>
</div>

<div className="text-center mt-8">
  <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
    Get Started
  </button>
</div>
        </div>
      </section>
    </div>

  )
}

export default HowItWorks