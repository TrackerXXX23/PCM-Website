import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'insurance-solutions',
    title: 'Insurance Solutions',
    description: 'Comprehensive insurance solutions tailored to your needs.',
    link: '/services/insurance-solutions',
    icon: (
      <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    description: 'Expert wealth management services to grow and protect your assets.',
    link: '/services/wealth-management',
    icon: (
      <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    description: 'Secure your future with our retirement planning services.',
    link: '/services/retirement-planning',
    icon: (
      <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    description: 'Ensure your legacy with our estate planning expertise.',
    link: '/services/estate-planning',
    icon: (
      <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    )
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white pointer-events-none" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">Our Services</h1>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Explore our range of financial services tailored to meet your needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="relative bg-white rounded shadow-xl transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                <div className="flex flex-col h-full p-6">
                  <div className="flex-grow">
                    <div className="text-gray-600 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="h3 mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div>
                    <Link href={service.link} className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
