import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 2,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div ref={logoRef} className="relative w-64 h-32">
        <img
          src="/images/logo.webp" // Aquí se integra tu logo en formato .webp
          alt="Logo Animado"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
