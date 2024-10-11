import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Services - PCM Financial',
  description: 'Explore our premium financial services for high net worth individuals, farmers, and business owners.',
};

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-6">Our Services</h1>
      <p className="text-xl text-gray-600 mb-8">
        PCM Financial offers a comprehensive range of premium financial services tailored to high net worth individuals, farmers, and business owners in Saskatchewan and Alberta.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Insurance Solutions</h2>
          <p className="mb-4">We provide tailored insurance strategies to protect your assets and secure your financial future.</p>
          <Link href="/services/insurance" className="text-blue-600 hover:underline">Learn more about our insurance solutions</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Wealth Management</h2>
          <p className="mb-4">Our wealth management services are designed to grow and preserve your wealth through strategic investment planning.</p>
          <Link href="/services/wealth-management" className="text-blue-600 hover:underline">Explore our wealth management services</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Succession Planning</h2>
          <p className="mb-4">We help you plan for the future of your business or farm with comprehensive succession planning strategies.</p>
          <Link href="/services/succession-planning" className="text-blue-600 hover:underline">Discover our succession planning approach</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Tax Efficiency</h2>
          <p className="mb-4">Optimize your tax strategy with our expert advice to minimize liabilities and maximize your financial potential.</p>
          <Link href="/services/tax-efficiency" className="text-blue-600 hover:underline">Learn about our tax efficiency services</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
