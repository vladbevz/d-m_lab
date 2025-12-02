import React, {useEffect, useRef} from 'react';
import heroImg from '../assets/images/hero-placeholder.webp';

export default function Hero(){
  const ref = useRef();

  useEffect(()=>{
    const el = ref.current;
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, {threshold:0.2});
    if(el) io.observe(el);
    return ()=> io.disconnect();
  },[]);

  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}></div>

      <div className="container hero-inner" ref={ref}>
        <h1>Nowoczesne cyfrowe laboratorium stomatologiczne</h1>
        <p>Profesjonalne podejście, praca w ustalonych terminach, maksymalna dokładność.</p>
        <a className="btn" href="#contact">Skontaktuj się z nami</a>
      </div>
    </section>
  );
}
