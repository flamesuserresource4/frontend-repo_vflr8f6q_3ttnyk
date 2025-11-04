import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Playlists from './components/Playlists';
import Footer from './components/Footer';

export default function App() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-black"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <Hero />
      <Artists />
      <Playlists />
      <Footer />
    </motion.main>
  );
}
