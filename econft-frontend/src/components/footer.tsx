import { Leaf } from 'lucide-react'
import React from 'react'

const FooterComp = () => {
  return (
    <>
    <footer className="bg-green-950/50 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold text-green-400">econft</span>
              </div>
              <p className="mt-4 text-gray-400">
                Turning environmental action into digital assets
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 econft. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </>
  )
}

export default FooterComp