export const metadata = {
  title: "PCM Financial Services - Home",
  description: "Premium Financial Services for High Net Worth Individuals, Farmers, and Business Owners in Saskatchewan and Alberta",
};

import Hero from '@/components/hero-home';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Commented out components that are not yet implemented
      <BusinessCategories />
      <LargeTestimonial />
      <FeaturesPlanet />
      <Features />
      <TestimonialsCarousel />
      <Cta />
      */}
    </>
  );
}
