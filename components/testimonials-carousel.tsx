'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "PCM Financial Services has been instrumental in helping me secure my financial future. Their personalized approach and expert advice have given me peace of mind.",
    author: "John Doe",
    title: "Business Owner",
    image: "/images/testimonial-01.jpg"
  },
  {
    quote: "As a farmer, I appreciate PCM's deep understanding of the agricultural sector. Their tailored financial strategies have helped my farm thrive.",
    author: "Jane Smith",
    title: "Farmer",
    image: "/images/testimonial-02.jpg"
  },
  {
    quote: "The team at PCM goes above and beyond. Their innovative solutions and attention to detail have significantly improved my investment portfolio.",
    author: "Robert Johnson",
    title: "High Net Worth Individual",
    image: "/images/testimonial-03.jpg"
  },
  {
    quote: "PCM's expertise in risk management has been crucial for our company's growth. They've helped us navigate complex financial landscapes with confidence.",
    author: "Emily Chen",
    title: "CFO of Tech Startup",
    image: "/images/testimonial-04.jpg"
  },
  {
    quote: "As a retiree, I value PCM's commitment to long-term financial security. Their retirement planning services have exceeded my expectations.",
    author: "Michael Brown",
    title: "Retired Professional",
    image: "/images/testimonial-05.jpg"
  }
]

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
            >
              <blockquote className="text-center">
                <p className="text-xl italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="flex items-center justify-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <cite className="font-bold">{testimonial.author}</cite>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
