import React from 'react';
export default function Services(){
  const items = [
    {title:'Symulacja projektu', desc:'Projektowanie CAD/CAM, modelowanie cyfrowe.'},
    {title:'Konstrukcje tymczasowe', desc:'Niezawodne rozwiązania tymczasowe.'},
    {title:'Korony bezmetalowe', desc:'Dwutlenek cyrkonu, dwukrzemian litu.'},
    {title:'Konstrukcje stałe', desc:'Wysoka jakość renowacji i gwarancja.'},
    {title:'Rozwiązania implantologiczne', desc:'Protokoły All-in-4 i inne.'},
    {title:'Renowacje', desc:'Вініри та кераміка на вогнетривкій масі.'}
  ];
  return (
    <section id="services" className="section services container">
      <h2>Usługi</h2>
      <div className="grid">
        {items.map((it,i)=>(
          <article className="card" key={i}>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}