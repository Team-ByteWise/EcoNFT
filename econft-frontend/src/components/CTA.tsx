import { Upload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
     <section className="relative py-16 px-20">
    <div className="absolute inset-0 bg-gradient-to-br bg-green-950/50 dark:from-green-900/50 dark:to-emerald-900/30 w-full" />
    <div className="relative max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-green-500 dark:text-green-50 mb-6">
        Ready to Make a Difference?
      </h2>
      <p className="text-xl text-gray-300 dark:text-gray-300 mb-8">
        Join thousands of others who are already contributing to a greener future.
      </p>

    <Link href={"/create"}>
        <button className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
        {/* <Upload className="h-5 w-5 mr-2" /> */}
        Start Your Journey
        </button>
    </Link>
      
    </div>
  </section>
  )
}

export default CTA