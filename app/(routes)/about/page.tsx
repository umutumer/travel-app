import AboutSection from '@/components/home/AboutSection'
import CompanyLogos from '@/components/about/CompanyLogos'
import PagesHero from '@/components/PagesHero'
import TravelStats from '@/components/about/TravelStats'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <PagesHero />
      <AboutSection />
      <TravelStats />
      <CompanyLogos />
    </div>
  )
}

export default AboutPage