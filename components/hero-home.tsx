import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-left md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
                Tailored Financial Strategies for
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                  {' '}Saskatchewan and Alberta
                </span>
              </h1>
              <div className="max-w-3xl">
                <p className="text-xl text-gray-600 mb-8">
                  PCM Financial Services: Premium solutions for high net worth individuals, farmers, and business owners. We get everything done and deliver when it counts.
                </p>
                <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-8 py-3 rounded-full font-bold transition duration-300"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="btn text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 w-full sm:w-auto px-8 py-3 rounded-full font-bold transition duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <Image src="/images/badge.svg" alt="Certified Financial Planner" width={60} height={60} />
                <p className="text-sm text-gray-600">Certified Financial Planners with 15+ years of experience</p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <Image
                src="/images/saskatchewan-alberta-landscape.jpg"
                alt="Saskatchewan and Alberta Landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
