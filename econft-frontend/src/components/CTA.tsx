import { Upload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
     <section className="relative py-16 px-20">
    <div className="absolute inset-0 bg-gradient-to-br from-green-950 to-emerald-900/80 w-full" />
    <div className="relative max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 mb-6">
        Ready to Make a Difference?
      </h2>
      <p className="text-xl text-gray-300 dark:text-gray-300 mb-8">
        Join thousands of others who are already contributing to a greener future.
      </p>

    <Link href={"/login"}>
        <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105">
        {/* <Upload className="h-5 w-5 mr-2" /> */}
        Start Your Journey
        </button>
    </Link>
      
    </div>
  </section>
  )
}

export default CTA