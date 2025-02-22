import React from 'react'

export default function StepCard({ number, icon, title, description }: {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    return (
      <div className="group relative p-6 dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg fade-up bg-green-100 ">
        <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-sm font-medium text-green-900 dark:text-green-100">
          {number}
        </div>
        <div className="h-12 w-12 text-green-600 dark:text-green-400 mb-4 transform group-hover:scale-110 transition-transform">
          {React.isValidElement(icon) ? React.cloneElement(icon) : icon}
        </div>
        <h3 className="text-xl font-semibold text-green-900 dark:text-green-50 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    );
  }