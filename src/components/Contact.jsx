import React, { useState } from "react";
import { Instagram } from "lucide-react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setMsg("Dziękujemy! Skontaktujemy się z Tobą wkrótce.");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section container">
      <h2 className="contact-title">Kontakt</h2>

      <div className="contact-grid">

        {/* LEFT SIDE INFO */}
        <aside className="contact-info">
          <p>
            <strong>Telefon:</strong>{" "}
            <a href="tel:+48577861595">+48 577 861 595</a>
          </p>

          <p>
            <strong>Adres:</strong><br/>
            Wojska Polskiego 148/1<br/>
            Słubice, 69-100
          </p>

          <p className="social">
            <strong>Instagram:</strong>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
            >
              <Instagram size={20}/>
              <span>Odwiedź nas</span>
            </a>
          </p>
        </aside>

        {/* CENTER FORM */}
        <form className="contact-form" onSubmit={submit}>
          <label>
            Imię
            <input name="name" required />
          </label>

          <label>
            Telefon
            <input name="phone" required />
          </label>

          <label>
            Wiadomość
            <textarea name="message" />
          </label>

          <button className="btn" type="submit">Wyślij</button>

          <p className="form-result">{msg}</p>
        </form>

        {/* RIGHT SIDE MAP */}
        <div className="map-wrapper">
          <iframe
            title="map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.1430353793254!2d14.5538353!3d52.3480093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e3c72b9f9c3%3A0xc3ab4ecf4fdfb8ff!2sWojska%20Polskiego%20148%2C%2069-100%20S%C5%82ubice!5e0!3m2!1spl!2spl!4v1700000000000"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
