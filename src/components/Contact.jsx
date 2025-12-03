import React, { useState } from "react";
import { Instagram, Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Конфігурація для EmailJS
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        message: formData.message,
        to_email: 'laboratorium@dm-lab.pl',
        reply_to: formData.email || 'laboratorium@dm-lab.pl'
      };

      // Відправка через EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Замінити на ваш Service ID
        'YOUR_TEMPLATE_ID', // Замінити на ваш Template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Замінити на ваш Public Key
      );

      // Успішна відправка
      setSubmitStatus({
        type: 'success',
        message: 'Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.'
      });

      // Очистити форму
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie lub skontaktować się telefonicznie.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Альтернативна функція без EmailJS
  const handleSubmitWithoutService = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Симуляція відправки
    setTimeout(() => {
      const subject = encodeURIComponent(`Nowa wiadomość od ${formData.name}`);
      const body = encodeURIComponent(
        `Imię: ${formData.name}\n` +
        `Telefon: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Wiadomość: ${formData.message}\n\n` +
        `---\nWiadomość wysłana ze strony D&M Laboratorium`
      );
      
      window.location.href = `mailto:laboratorium@dm-lab.pl?subject=${subject}&body=${body}`;
      
      setSubmitStatus({
        type: 'success',
        message: 'Dziękujemy! Otwiera się klient pocztowy. Proszę potwierdzić wysłanie wiadomości.'
      });
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        {/* Заголовок секції */}
        <div className="section-header">
          <span className="section-subtitle">Skontaktuj się z nami</span>
          <h2 className="section-title">Kontakt</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Masz pytania? Chętnie na nie odpowiemy i omówimy szczegóły współpracy
          </p>
        </div>

        <div className="contact-grid">
          {/* Лівий блок - контактна інформація */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="info-title">Dane kontaktowe</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Telefon</span>
                  <a href="tel:+48577861595" className="contact-value">
                    +48 577 861 595
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:laboratorium@dm-lab.pl" className="contact-value">
                    laboratorium@dm-lab.pl
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Adres</span>
                  <address className="contact-value">
                    Wojska Polskiego 148/1<br />
                    Słubice, 69-100<br />
                    Polska
                  </address>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Instagram size={20} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Instagram</span>
                  <a
                    href="https://www.instagram.com/d_m_labolatorium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value social-link"
                  >
                    @d_m_labolatorium
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="working-hours">
                <h4 className="hours-title">Godziny pracy</h4>
                <div className="hours-list">
                  <div className="hour-item">
                    <span className="day">Poniedziałek - Piątek</span>
                    <span className="time">8:00 - 18:00</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Sobota</span>
                    <span className="time">9:00 - 14:00</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Niedziela</span>
                    <span className="time">Zamknięte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Центральний блок - форма */}
          <div className="contact-form-wrapper">
            <div className="form-card">
              <h3 className="form-title">Wyślij wiadomość</h3>
              <p className="form-subtitle">Odpowiemy najszybciej jak to możliwe</p>

              <form onSubmit={handleSubmitWithoutService} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Imię i nazwisko *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Telefon *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+48 123 456 789"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Opisz swoją sprawę..."
                    rows="5"
                  />
                </div>

                <div className="form-footer">
                  <p className="form-note">
                    * Pola wymagane
                  </p>
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="btn-loading">Wysyłanie...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Wyślij wiadomość</span>
                      </>
                    )}
                  </button>
                </div>

                {submitStatus.message && (
                  <div className={`form-result ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Правий блок - мапа */}
          <div className="contact-map">
            <div className="map-card">
              <h3 className="map-title">Lokalizacja</h3>
              <div className="map-wrapper">
                <iframe
                  title="Lokalizacja D&M Laboratorium w Słubicach"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.1430353793254!2d14.5538353!3d52.3480093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e3c72b9f9c3%3A0xc3ab4ecf4fdfb8ff!2sWojska%20Polskiego%20148%2C%2069-100%20S%C5%82ubice!5e0!3m2!1spl!2spl!4v1700000000000"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="map-info">
                <p className="map-note">
                  Znajdujemy się w centrum Słubic, z łatwym dojazdem i parkingiem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}