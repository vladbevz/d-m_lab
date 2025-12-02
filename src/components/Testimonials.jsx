import React, {useEffect, useRef, useState} from 'react';
const items = [
  {text:'Profesjonalne podejście, praca w ustalonych terminach, maksymalna dokładność.', author:'Danilevsky S.'},
  {text:'Najważniejsza jest jakość pracy technika. Dziękujemy laboratorium!', author:'Hrynik R.'},
  {text:'Dziękuję! Jestem bardzo wdzięczny, że Cię poznałem i znalazłem Twoje fantastyczne laboratorium dentystyczne.', author:'E. Bramley'}
];
export default function Testimonials(){
  const [i,setI]=useState(0);
  const slider = useRef();
  useEffect(()=>{
    const id=setInterval(()=> setI(s=> (s+1)%items.length),4000);
    return ()=>clearInterval(id);
  },[]);
  useEffect(()=>{
    if(slider.current) slider.current.style.transform = `translateX(-${i*100}%)`;
  },[i]);
  return (
    <section className="section container testimonials">
      <h2>Recenzje</h2>
      <div style={{overflow:'hidden'}}>
        <div className="slider" ref={slider}>
          {items.map((it,idx)=>(
            <div className="slide" key={idx}>
              <p style={{margin:0,fontSize:18}}>{it.text}</p>
              <cite style={{display:'block',marginTop:10,color:'#666'}}>- {it.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}