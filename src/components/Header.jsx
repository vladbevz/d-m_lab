import React, {useEffect, useRef} from 'react';
import logo from '../assets/images/logo-2.png';

export default function Header(){
  const headerRef = useRef();

  useEffect(()=>{
    const el = headerRef.current;
    const onScroll = ()=>{
      if(window.scrollY > 40) el.classList.add('scrolled');
      else el.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-inner">

        <a className="logo" href="#">
          <img src={logo} alt="Senergy Dental" />
        </a>

        <nav className="main-nav" aria-label="Головне меню">
          <a href="#services">Usługi</a>
          <a href="#about">O nas</a>
          <a href="#gallery">Galeria</a>
          <a href="#contact">Łączność</a>
        </nav>

        <a className="phone" href="tel:+48577861595">
          +48 577 861 595
        </a>
      </div>
    </header>
  );
}
