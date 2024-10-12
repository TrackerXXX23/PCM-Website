'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  solutions: string[];
  clientType: 'individual' | 'business' | 'both';
}

const services: Service[] = [
  {
    id: 'tax-exempt-life-insurance',
    title: 'Tax-Exempt Life Insurance Investment',
    description: 'A strategy that combines life insurance protection with tax-advantaged investment growth.',
    icon: '/images/icons/tax-exempt.svg',
    solutions: [
      'Tax-free accumulation of wealth within policy limits',
      'Tax-efficient wealth transfer to beneficiaries',
      'Potential for tax-free policy loans'
    ],
    clientType: 'both'
  },
  {
    id: 'corporate-owned-life-insurance',
    title: 'Corporate-Owned Life Insurance',
    description: 'Tax-efficient strategy for corporations to invest excess capital and protect business interests.',
    icon: '/images/icons/corporate.svg',
    solutions: [
      'Tax-free death benefit to the corporation',
      'Facilitates business succession planning',
      'Provides funds for buy-sell agreements'
    ],
    clientType: 'business'
  },
  // Add more services here...
];

const InsuranceSolutionsFunnel: React.FC = () => {
  const [clientType, setClientType] = useState<'individual' | 'business' | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  const filteredServices = clientType
    ? services.filter(service => service.clientType === clientType || service.clientType === 'both')
    : services;

  const resetFunnel = () => {
    setClientType(null);
    setSelectedService(null);
    setStep(0);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      resetFunnel();
    }
  };

  useEffect(() => {
    if (clientType) {
      nextStep();
    }
  }, [clientType]);

  useEffect(() => {
    if (selectedService) {
      nextStep();
    }
  }, [selectedService]);

  const renderProgressBar = () => (
    <div className="bg-gray-100 p-4 rounded-lg mt-8">
      <div className="flex justify-between mb-2">
        <span className={`text-sm font-medium ${step >= 0 ? 'text-blue-600' : 'text-gray-500'}`}>Client Type</span>
        <span className={`text-sm font-medium ${step >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>Service Selection</span>
        <span className={`text-sm font-medium ${step >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>Service Details</span>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div style={{ width: `${(step / 2) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
      </div>
    </div>
  );

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white pointer-events-none" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">Insurance Solutions</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Explore our comprehensive insurance solutions tailored to your needs.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {renderProgressBar()}

            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
              {step === 0 && (
                <div className="text-center">
                  <h2 className="h3 mb-6">What type of client are you?</h2>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setClientType('individual')}
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-40"
                    >
                      Individual
                    </button>
                    <button
                      onClick={() => setClientType('business')}
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-40"
                    >
                      Business
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="h3 mb-6">Select a Service</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredServices.map((service) => (
                      <div
                        key={service.id}
                        className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition duration-300 flex flex-col"
                        onClick={() => setSelectedService(service.id)}
                      >
                        <Image src={service.icon} alt={service.title} width={40} height={40} className="mb-4" />
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 flex-grow">{service.description}</p>
                        <button className="btn-sm text-white bg-blue-600 hover:bg-blue-700 mt-4 self-end">Learn More</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && selectedService && (
                <div>
                  {services.filter(service => service.id === selectedService).map((service) => (
                    <div key={service.id}>
                      <h2 className="h3 mb-4">{service.title}</h2>
                      <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                      <h3 className="h4 mb-4">Key Benefits:</h3>
                      <ul className="list-disc list-inside mb-8">
                        {service.solutions.map((solution, index) => (
                          <li key={index} className="mb-2">{solution}</li>
                        ))}
                      </ul>
                      <div className="mt-8 flex justify-between items-center">
                        <button onClick={prevStep} className="btn-sm text-white bg-gray-900 hover:bg-gray-800">
                          ← Back to Services
                        </button>
                        <a className="btn text-white bg-blue-600 hover:bg-blue-700" href="#0">Request Consultation</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {step > 0 && (
              <div className="mt-8 text-center">
                <button
                  onClick={resetFunnel}
                  className="btn-sm text-gray-600 bg-gray-100 hover:bg-gray-200"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSolutionsFunnel;
