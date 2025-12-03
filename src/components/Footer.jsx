import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Основна частина футера */}
        <div className="footer-content">
          {/* Логотип */}
          <div className="footer-logo">
            <span className="logo-main">D&M</span>
            <span className="logo-sub">Laboratorium</span>
          </div>

          {/* Копірайт та права */}
          <div className="footer-copyright">
            <p className="copyright-text">
              © {currentYear} D&M Laboratorium — Wszelkie prawa zastrzeżone
            </p>
            <p className="footer-note">
              Stworzone z <Heart size={14} className="heart-icon" /> dla perfekcyjnych uśmiechów
            </p>
          </div>

          {/* Проста навігація */}
          <div className="footer-links">
            <a href="#contact" className="footer-link">Kontakt</a>
            <span className="footer-separator">•</span>
            <a href="#gallery" className="footer-link">Galeria</a>
            <span className="footer-separator">•</span>
            <a href="#services" className="footer-link">Usługi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}