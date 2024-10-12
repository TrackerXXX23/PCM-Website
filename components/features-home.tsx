'use client';

import React from 'react'
import dynamic from 'next/dynamic'

const FaChartLine = dynamic(() => import('react-icons/fa').then((mod) => mod.FaChartLine))
const FaShieldAlt = dynamic(() => import('react-icons/fa').then((mod) => mod.FaShieldAlt))
const FaHandshake = dynamic(() => import('react-icons/fa').then((mod) => mod.FaHandshake))
const FaLightbulb = dynamic(() => import('react-icons/fa').then((mod) => mod.FaLightbulb))

const features = [
  {
    icon: FaChartLine,
    title: 'Investment Strategies',
    description: 'Tailored investment solutions to maximize your wealth and achieve your financial goals.'
  },
  {
    icon: FaShieldAlt,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies to protect your assets.'
  },
  {
    icon: FaHandshake,
    title: 'Personalized Service',
    description: 'Dedicated advisors providing one-on-one attention to your unique financial needs.'
  },
  {
    icon: FaLightbulb,
    title: 'Innovative Solutions',
    description: 'Cutting-edge financial tools and strategies to keep you ahead in a changing market.'
  }
]

const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <Icon className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
