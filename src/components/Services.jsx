import React, { useEffect, useRef } from 'react';

export default function Services() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  const items = [
    { title: 'Symulacja projektu', desc: 'Projektowanie CAD/CAM, modelowanie cyfrowe.' },
    { title: 'Konstrukcje tymczasowe', desc: 'Niezawodne rozwiązania tymczasowe.' },
    { title: 'Korony bezmetalowe', desc: 'Dwutlenek cyrkonu, dwukrzemian litu.' },
    { title: 'Konstrukcje stałe', desc: 'Wysoka jakość renowacji i gwarancja.' },
    { title: 'Rozwiązania implantologiczne', desc: 'Protokoły All-in-4 i inne.' },
    { title: 'Renowacje', desc: 'Licówki i ceramika na masie ogniotrwałej.' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="container">
        {/* Заголовок секції */}
        <div className="section-header">
          <span className="section-subtitle">Co oferujemy</span>
          <h2 className="section-title">Usługi</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Kompleksowe rozwiązania w nowoczesnym laboratorium stomatologicznym
          </p>
        </div>

        {/* Картки послуг */}
        <div className="services-grid">
          {items.map((item, index) => (
            <div
              className="service-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="card-icon">
                <span className="card-number">0{index + 1}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.desc}</p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}