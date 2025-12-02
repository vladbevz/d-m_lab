import React from 'react';
export default function About(){
  return (
    <section id="about" className="section about container">
      <h2>Про нас</h2>
      <div className="about-inner">
        <div>
          <h3>Dasha Saiko — założycielka</h3>
          <p>Technik dentystyczny, założyciel laboratorium. Doświadczenie i oryginalne podejście.</p>
        </div>
        <div className="stats">
          <div><strong>2</strong><div>panów</div></div>
          <div><strong>6</strong><div>kraje</div></div>
          <div><strong>100</strong><div>prac</div></div>
        </div>
      </div>
    </section>
  );
}