import React, { useEffect, useRef, useState } from 'react';

export default function Header() {
  const headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const el = headerRef.current;
    const onScroll = () => {
      if (window.scrollY > 40) el.classList.add('scrolled');
      else el.classList.remove('scrolled');
    };
    
    onScroll();
    window.addEventListener('scroll', onScroll);
    
    // Закривати меню при кліку поза ним
    const handleClickOutside = (e) => {
      if (!e.target.closest('.main-nav') && !e.target.closest('.burger-btn')) {
        closeMenu();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-inner">
        {/* Текстовий логотип */}
        <a className="logo-text" href="#" onClick={closeMenu}>
          <span className="logo-part">D&M</span>
          <span className="logo-part-sub">Laboratorium</span>
        </a>

        {/* Бургер-кнопка */}
        <button 
          className={`burger-btn ${isMenuOpen ? 'active' : ''}`}
          aria-label="Відкрити меню"
          onClick={toggleMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        {/* Основне меню */}
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Головне меню">
          <a href="#services" onClick={closeMenu}>Usługi</a>
          <a href="#about" onClick={closeMenu}>O nas</a>
          <a href="#gallery" onClick={closeMenu}>Galeria</a>
          <a href="#contact" onClick={closeMenu}>Łączność</a>
          
          {/* Телефон в мобільному меню */}
          <a className="phone mobile-phone" href="tel:+48577861595" onClick={closeMenu}>
            +48 577 861 595
          </a>
        </nav>

        {/* Телефон для десктопу */}
        <a className="phone desktop-phone" href="tel:+48577861595">
          +48 577 861 595
        </a>
      </div>
      
      {/* Оверлей для мобільного меню */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
}