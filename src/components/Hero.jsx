import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // Load Poppins font dynamically without touching index.html
  useEffect(() => {
    const id = 'poppins-font-link';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay to enhance text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center px-6"
        >
          <h1 className="text-white font-semibold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
            Music Addctd
          </h1>
          <p className="mt-4 text-neutral-200/90" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)' }}>
            A minimalist space for sounds I can\'t live without — curated vibes on repeat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
