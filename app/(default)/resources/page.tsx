import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Resources - PCM Financial',
  description: 'Access financial resources and insights from PCM Financial to help you make informed decisions about your wealth and business.',
};

const ResourcesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-6">Financial Resources</h1>
      <p className="text-xl text-gray-600 mb-8">
        Explore our collection of financial resources designed to help you make informed decisions about your wealth and business. Our expert insights cover a range of topics relevant to high net worth individuals, farmers, and business owners.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Financial Planning Guides</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Retirement Planning for Business Owners</li>
            <li>Estate Planning Essentials</li>
            <li>Tax Optimization Strategies</li>
          </ul>
          <Link href="/resources/financial-planning" className="text-blue-600 hover:underline">View Financial Planning Guides</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Investment Insights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Market Trends and Analysis</li>
            <li>Diversification Strategies</li>
            <li>Risk Management Techniques</li>
          </ul>
          <Link href="/resources/investment-insights" className="text-blue-600 hover:underline">Explore Investment Insights</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Business Owner Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Succession Planning for Family Businesses</li>
            <li>Business Valuation Methods</li>
            <li>Key Person Insurance Guide</li>
          </ul>
          <Link href="/resources/business-owners" className="text-blue-600 hover:underline">Access Business Owner Resources</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Farming and Agriculture</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Farm Succession Planning</li>
            <li>Risk Management for Agricultural Businesses</li>
            <li>Tax Considerations for Farmers</li>
          </ul>
          <Link href="/resources/farming" className="text-blue-600 hover:underline">View Farming Resources</Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-4">
          Can't find what you're looking for? Our team of experts is here to help.
        </p>
        <Link href="/contact" className="btn text-white bg-blue-600 hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ResourcesPage;
