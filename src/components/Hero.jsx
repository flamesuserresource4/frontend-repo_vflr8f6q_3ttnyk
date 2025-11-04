import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // Dynamically load Poppins for all typography
  useEffect(() => {
    const id = 'poppins-font-link';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-black overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient/overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Centered title/subtitle with smooth fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          Music Addctd
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg md:text-xl max-w-2xl">
          A dark, modern and cinematic personal music showcase.
        </p>
      </motion.div>
    </section>
  );
}
