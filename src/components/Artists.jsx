import { useState } from 'react';
import { motion } from 'framer-motion';
import ArtistModal from './ArtistModal';

const artistsSeed = [
  {
    name: 'The Weeknd',
    image: 'https://i.imgur.com/IBQRLoQ.jpeg',
    modal: {
      realName: 'Abel Makkonen Tesfaye',
      birth: 'February 16, 1990 – Toronto, Canada',
      genre: 'Alternative R&B, Pop, Electronic',
      description:
        'The Weeknd crafts nocturnal, cinematic pop that blends R&B, synthwave, and electronic moods. His work explores intimacy, fame, and the surreal edges of modern life, delivered with sleek, immersive production and a distinctive falsetto.',
      latestAlbum: 'Dawn FM (2022)',
    },
  },
];

export default function Artists() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative w-full bg-black text-white py-16 sm:py-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          Featured Artists
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-10 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
        >
          {artistsSeed.map((artist) => (
            <button
              key={artist.name}
              onClick={() => setSelected(artist)}
              className="group outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-[80px]"
            >
              <div
                className="relative w-[399px] h-[420px] overflow-hidden rounded-[80px] bg-neutral-900 border border-white/10 shadow-xl"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  width={399}
                  height={420}
                  className="w-[399px] h-[420px] object-cover rounded-[80px] transition-transform duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute left-6 bottom-6">
                  <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                    <p className="text-white font-semibold">{artist.name}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      <ArtistModal open={!!selected} onClose={() => setSelected(null)} artist={selected} />
    </section>
  );
}
