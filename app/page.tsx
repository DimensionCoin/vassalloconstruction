import About from '@/components/page/About';
import Gallary from '@/components/page/Gallary';
import Header from '@/components/page/Header';
import Hero from '@/components/page/Hero';
import Services from '@/components/page/Services';
import Contact from '@/components/page/Contact';
import React from 'react'

const Home = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section id="Homepage" className="snap-start">
        <Header />
        <Hero />
      </section>
      <section id="Services" className="snap-start h-[100vh]">
        <Services />
      </section>
      <section id="Gallary" className="snap-start h-[100vh]">
        <Gallary />
      </section>
      <section id="About" className="snap-start h-[100vh]">
        <About />
      </section>
      <section id="Contact" className="snap-start min-h-screen overflow-hidden">
        <Contact />
      </section>
    </div>
  );
}

export default Home
