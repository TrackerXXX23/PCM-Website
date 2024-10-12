'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: "What services does PCM Financial offer?",
    answer: "PCM Financial offers a wide range of services including wealth management, insurance solutions, succession planning, and tailored financial strategies for high net worth individuals, farmers, and business owners."
  },
  {
    question: "How does PCM Financial cater to the unique needs of farmers?",
    answer: "We offer specialized services for farmers including farm succession planning, agricultural risk management, farm equipment financing, and crop insurance and revenue protection strategies."
  },
  {
    question: "What areas does PCM Financial serve?",
    answer: "PCM Financial primarily serves clients in Saskatchewan and Alberta, with a focus on providing personalized financial services to meet the unique needs of these regions."
  },
  {
    question: "How can I get started with PCM Financial?",
    answer: "Getting started is easy! Simply contact us to schedule a consultation. We'll discuss your financial goals and create a personalized strategy tailored to your needs."
  },
  {
    question: "What makes PCM Financial different from other financial services providers?",
    answer: "PCM Financial stands out due to our deep understanding of local markets, personalized approach, and specialized expertise in serving high net worth individuals, farmers, and business owners in Saskatchewan and Alberta."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
