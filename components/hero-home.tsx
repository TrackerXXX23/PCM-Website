import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
              Premium Financial Services for
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                {' '}High Net Worth Individuals, Farmers, and Business Owners
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-400 mb-8">
                With decades of experience, PCM is committed to delivering results and exceeding expectations in Saskatchewan and Alberta.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <Link
                  href="/contact"
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="btn text-blue-600 bg-gray-100 hover:bg-gray-200 w-full sm:w-auto sm:ml-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
