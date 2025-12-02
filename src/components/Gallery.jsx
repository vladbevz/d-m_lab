import React from 'react';
import g1 from '../assets/images/gallery-1.webp';
import g2 from '../assets/images/gallery-2.webp';
import g3 from '../assets/images/gallery-3.webp';
import g4 from '../assets/images/gallery-4.webp';
import g5 from '../assets/images/gallery-5.webp';
import g6 from '../assets/images/gallery-6.webp';
import g7 from '../assets/images/gallery-7.webp';
import g8 from '../assets/images/gallery-8.webp';
import g9 from '../assets/images/gallery-9.webp';
import g10 from '../assets/images/gallery-10.webp';
import g11 from '../assets/images/gallery-11.webp';
import g12 from '../assets/images/gallery-12.webp';
export default function Gallery(){
  const images=[g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12];
  const open=(src)=>{
    const overlay=document.createElement('div');
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999';
    overlay.innerHTML=`<img src="${src}" style="max-width:92%;max-height:92%;border-radius:10px"/>`;
    overlay.addEventListener('click',()=>overlay.remove());
    document.body.appendChild(overlay);
  };
  return (
    <section id="gallery" className="section gallery container">
      <h2>Galeria prac</h2>
      <div className="gallery-grid">
        {images.map((src,i)=>(<img key={i} src={src} alt={'gallery-'+i} onClick={()=>open(src)}/>))}
      </div>
    </section>
  );
}