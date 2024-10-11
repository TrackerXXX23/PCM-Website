import React from 'react';

export const metadata = {
  title: 'Contact Us - PCM Financial',
  description: 'Get in touch with PCM Financial for premium financial services in Saskatchewan and Alberta.',
};

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            We're here to help you with your financial needs. Get in touch with us today to schedule a consultation or learn more about our services.
          </p>
          <div className="space-y-4">
            <p><strong>Email:</strong> <a href="mailto:info@pcmfinancial.ca" className="text-blue-600 hover:underline">info@pcmfinancial.ca</a></p>
            <p><strong>Phone:</strong> <a href="tel:306-861-4995" className="text-blue-600 hover:underline">306-861-4995</a></p>
            <p><strong>Location:</strong> Weyburn, SK</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday - Sunday: Closed</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required></textarea>
            </div>
            <div>
              <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
