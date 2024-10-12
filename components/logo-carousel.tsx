'use client';

import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/images/Black with logo on left - no backround.svg', alt: 'PCM Logo' },
  { src: '/images/images.png', alt: 'Client Logo 1' },
  { src: '/images/industrial-alliance-logo-png_seeklogo-530643.png', alt: 'Industrial Alliance' },
  { src: '/images/logo_269x113.png', alt: 'Client Logo 2' },
  { src: '/images/png-transparent-bmo-bank-of-montreal-financial-services-finance-bank-text-trademark-logo.png', alt: 'BMO Bank of Montreal' },
  { src: '/images/scotiabank-logo-2.png', alt: 'Scotiabank' },
];

const testimonials = [
  {
    quote: "PCM's expertise has been invaluable in optimizing our financial strategy.",
    author: "John Doe, CEO of Industrial Alliance"
  },
  {
    quote: "Their personalized approach sets them apart in the industry.",
    author: "Jane Smith, CFO of BMO Bank of Montreal"
  },
  {
    quote: "PCM's innovative solutions have significantly improved our risk management.",
    author: "Mike Johnson, Director at Scotiabank"
  }
];

const LogoCarousel = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        <div className="relative overflow-hidden mb-12">
          <div className="flex space-x-20 animate-infinite-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center w-40 h-20">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={120} 
                  height={60} 
                  className="object-contain w-auto h-auto max-w-[120px] max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
