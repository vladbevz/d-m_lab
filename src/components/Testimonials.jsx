import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'Profesjonalne podejście, praca w ustalonych terminach, maksymalna dokładność. Polecam każdemu!',
    author: 'Daniel S.',
    role: 'Lekarz stomatolog',
    rating: 5
  },
  {
    text: 'Najważniejsza jest jakość pracy technika. Laboratorium D&M to gwarancja precyzji i terminowości.',
    author: 'Robert H.',
    role: 'Specjalista protetyk',
    rating: 5
  },
  {
    text: 'Dziękuję! Jestem bardzo wdzięczny, że Cię poznałem i znalazłem Twoje fantastyczne laboratorium dentystyczne.',
    author: 'E. Bramley',
    role: 'Klient',
    rating: 5
  },
  {
    text: 'Współpraca od 3 lat. Zawsze profesjonalnie, zawsze na czas. Polecam!',
    author: 'Marta K.',
    role: 'Właścicielka kliniki',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const next = (prev + 1) % testimonials.length;
      return next;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + testimonials.length) % testimonials.length;
      return prevIndex;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Автоматичний слайдер
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    const stopAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoSlide();

    // Зупиняємо при наведенні
    const handleMouseEnter = () => stopAutoSlide();
    const handleMouseLeave = () => startAutoSlide();

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('mouseenter', handleMouseEnter);
      wrapperRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      stopAutoSlide();
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('mouseenter', handleMouseEnter);
        wrapperRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Оновлюємо позицію слайдера
  useEffect(() => {
    if (sliderRef.current) {
      const translateX = -currentIndex * 100;
      sliderRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="section testimonials">
      <div className="container">
        {/* Заголовок секції */}
        <div className="section-header">
          <span className="section-subtitle">Opinie klientów</span>
          <h2 className="section-title">Recenzje</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Zobacz, co mówią o nas lekarze stomatolodzy i pacjenci
          </p>
        </div>

        {/* Обгортка слайдера */}
        <div 
          className="testimonials-slider-wrapper" 
          ref={wrapperRef}
        >
          <div 
            className="testimonials-slider" 
            ref={sliderRef}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                className="testimonial-slide" 
                key={index}
              >
                <div className="testimonial-card">
                  {/* Іконка цитати */}
                  <div className="quote-icon">
                    <Quote size={36} />
                  </div>
                  
                  {/* Рейтинг */}
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  
                  {/* Текст відгуку */}
                  <p className="testimonial-text">{testimonial.text}</p>
                  
                  {/* Автор */}
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.author}</h4>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Навігація */}
        <div className="slider-controls">
          <button 
            className="slider-btn prev-btn" 
            onClick={prevSlide}
            aria-label="Poprzedni odcinek"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Пагінація */}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="slider-btn next-btn" 
            onClick={nextSlide}
            aria-label="Następny odcinek"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}