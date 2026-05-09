import React from 'react'
import {
  Hero,
  Services,
  Process,
  Plans,
  Metrics,
  About,
  FAQ,
  CTA,
  Contact,
  Footer,
  TechBar,
  ImageBanner,
} from './sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechBar />
      <Services />
      <ImageBanner />
      <Process />
      <Metrics />
      <Plans />
      <About />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
