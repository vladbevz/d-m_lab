import React, { useEffect, useRef } from 'react';
import heroImg from '../assets/images/hero-placeholder.webp';

export default function Hero() {
  const heroRef = useRef();
  const contentRef = useRef();

  // Функція для плавного скролу
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const el = contentRef.current;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.2 });
    
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}>
        {/* Градієнтний оверлей для кращої читабельності */}
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-inner" ref={contentRef}>
          <h1>Nowoczesne cyfrowe laboratorium stomatologiczne</h1>
          <p>Profesjonalne podejście, praca w ustalonych terminach, maksymalna dokładność.</p>
          <a className="btn" href="#contact" onClick={scrollToContact}>
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
}