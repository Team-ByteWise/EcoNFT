import React from 'react'
import { Trees as Tree, Upload, Map, Coins, ChevronDown, Globe, Users, Leaf } from 'lucide-react';
import StepCard from './StepCard';


interface Props {
    statsRef: React.RefObject<HTMLDivElement | null>;
    }
const HowItWorks = ({statsRef}: Props) => {
  return (
    <div className=' bg-green-950/50 py-20 px-10'>
        <section ref={statsRef} className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 dark:text-green-50 mb-4">
            How It Works
          </h2>
          <p className="text-gray-100 dark:text-gray-300 max-w-2xl mx-auto">
            Join our mission to create a greener planet in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <StepCard
            number="01"
            icon={<Tree />}
            title="Plant a Tree"
            description="Choose and plant a tree in your local area"
          />
          <StepCard
            number="02"
            icon={<Upload />}
            title="Upload Picture"
            description="Take and upload a photo of your planted tree"
          />
          <StepCard
            number="03"
            icon={<Map />}
            title="Mark Location"
            description="Pin the exact location on our interactive map"
          />
          <StepCard
            number="04"
            icon={<Coins />}
            title="Get NFT"
            description="Receive a unique NFT for your contribution"
          />
        </div>
      </section>
    </div>
  )
}

export default HowItWorks