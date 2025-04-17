import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import FeaturedProperties from '../components/FeaturedProperties';
import AIFeatures from '../components/AIFeatures';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedProperties />
        <AIFeatures />
        <Testimonials />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
