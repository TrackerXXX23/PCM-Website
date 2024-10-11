import React from 'react';

export const metadata = {
  title: 'About Us - PCM Financial',
  description: 'Learn about PCM Financial and our commitment to delivering premium financial services in Saskatchewan and Alberta.',
};

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-6">About PCM Financial</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            PCM Financial is dedicated to providing premium financial services to high net worth individuals, farmers, and business owners in Saskatchewan and Alberta. With decades of experience, our team is committed to delivering results and exceeding expectations.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We offer tailored solutions in insurance, wealth management, and succession planning, ensuring that our clients' financial goals are met with precision and care.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Integrity in all our dealings</li>
            <li>Client-focused approach</li>
            <li>Expertise and continuous learning</li>
            <li>Tailored solutions for unique needs</li>
            <li>Long-term partnerships</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our team of experienced professionals brings a wealth of knowledge and expertise to every client interaction. We're committed to staying at the forefront of financial strategies and technologies to provide you with the best possible service.
        </p>
        {/* You can add team member profiles here in the future */}
      </div>
    </div>
  );
};

export default AboutPage;
