import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PopularCourses from '@/components/PopularCourses';
import OutstandingCategories from '@/components/OutstandingCategories';
import NewReleases from '@/components/NewReleases';
import WhatToExpect from '@/components/WhatToExpect';
import LatestNews from '@/components/LatestNews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PopularCourses />
        <OutstandingCategories />
        <NewReleases />
        <WhatToExpect />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
