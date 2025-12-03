import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
   if (isLoading) {
    return <Preloader />;
  }
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        {/* <About /> */}
        <Gallery />
        {/* <Team /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}