import Hero from 'components/hero-home'
import Features from 'components/features-home'
import LogoCarousel from 'components/logo-carousel'
import TestimonialsCarousel from 'components/testimonials-carousel'
import FAQ from 'components/faq'
import Stats from 'components/stats'
import Cta from 'components/cta'

export const metadata = {
  title: "PCM Financial Services - Premium Financial Solutions in Saskatchewan and Alberta",
  description: "Expert financial services for high net worth individuals, farmers, and business owners in Saskatchewan and Alberta. Specializing in wealth management, succession planning, and tailored financial strategies.",
  keywords: "financial services, Saskatchewan, Alberta, wealth management, farm succession planning, business financial planning, high net worth individuals",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <LogoCarousel />
      <div className="bg-gray-100 py-16">
        <TestimonialsCarousel />
      </div>
      <FAQ />
      <Cta />
    </main>
  );
}
