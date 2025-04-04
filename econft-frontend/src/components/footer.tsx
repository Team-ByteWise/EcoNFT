import { Leaf } from 'lucide-react'
import React from 'react'

const FooterComp = () => {
  return (
    <>
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-green-400 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-emerald-300 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-2 rounded-full bg-green-800/40">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">econft</span>
              </div>
              <p className="mt-4 text-gray-300">
                Turning environmental action into digital assets
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-800/50 text-center text-gray-300 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
            <p>&copy; 2025 econft. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </>
  )
}

export default FooterComp