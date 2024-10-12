import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="bg-gradient-to-r from-teal-400 to-teal-600 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L50 100 L100 0 Z" fill="#ffffff"/>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Ready to Secure Your Financial Future?</h2>
        <p className="text-xl md:text-2xl mb-10 animate-fade-in-up animation-delay-200">
          Let's work together to create a personalized financial strategy that meets your unique needs and goals.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  )
}

export default Cta
