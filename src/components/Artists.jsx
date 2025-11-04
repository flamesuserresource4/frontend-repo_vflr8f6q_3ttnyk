import { useState } from 'react';
import { motion } from 'framer-motion';
import ArtistModal from './ArtistModal';

const artistsSeed = [
  {
    name: 'The Weeknd',
    image: 'https://images.unsplash.com/photo-1663994768434-3efcc72f4290?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBXZWVrbmR8ZW58MHwwfHx8MTc2MjIyNTQ2MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    modal: {
      realName: 'Abel Makkonen Tesfaye',
      birth: 'February 16, 1990 – Toronto, Canada',
      genre: 'Alternative R&B, Pop, Electronic',
      description:
        'The Weeknd crafts nocturnal, cinematic pop that blends R&B, synthwave, and electronic moods. His work explores intimacy, fame, and the surreal edges of modern life, delivered with sleek, immersive production and a distinctive falsetto.',
      latestAlbum: 'Dawn FM (2022)',
    },
  },
  {
    name: 'Playboi Carti',
    image: 'https://i.imgur.com/IBQRLoQ.jpeg',
    modal: {
      realName: 'Jordan Terrell Carter',
      birth: 'September 13, 1996, Atlanta, Georgia, USA',
      genre: 'Trap, Experimental Hip-Hop',
      description:
        'Playboi Carti is known for his energetic performances, avant-garde beats, and signature “baby voice.” He influenced both the sound and fashion of modern rap.',
      latestAlbum: 'Music (2025) — his third studio album, darker and experimental; debuted at No.1 on the Billboard 200.',
    },
  },
  {
    name: 'Post Malone',
    image: 'https://i.imgur.com/XdPPaTG.jpeg',
    modal: {
      realName: 'Austin Richard Post',
      birth: 'July 4, 1995, Syracuse, New York, USA',
      genre: 'Pop, Hip-Hop, Rock',
      description:
        'Post Malone blends genres with melodic hooks and emotional lyrics. From “White Iverson” to hits like “Rockstar,” “Circles,” and “Sunflower,” he became one of the biggest names in modern pop-rap.',
      latestAlbum: 'Latest highlights include Austin (2023); frequent hit singles across years.',
    },
  },
  {
    name: 'Future',
    image: 'https://i.imgur.com/dWnmR1L.jpeg',
    modal: {
      realName: 'Nayvadius DeMun Cash',
      birth: 'November 20, 1983, Atlanta, Georgia, USA',
      genre: 'Trap, Hip-Hop',
      description:
        'Future pioneered modern trap with moody, reflective lyrics and heavy Auto-Tune. Notable anthems include “Mask Off,” “Life Is Good,” and “March Madness.”',
      latestAlbum: 'We Don’t Trust You (2024) with Metro Boomin; prolific collaborative projects.',
    },
  },
  {
    name: 'Travis Scott',
    image: 'https://i.imgur.com/SiAexaL.jpeg',
    modal: {
      realName: 'Jacques Bermon Webster II',
      birth: 'April 30, 1991, Houston, Texas, USA',
      genre: 'Hip-Hop, Psychedelic Trap',
      description:
        'Travis Scott is known for high-energy performances and immersive, cinematic production. Albums like Astroworld and Utopia showcase his genre-bending sound.',
      latestAlbum: 'Utopia (2023)',
    },
  },
  {
    name: 'SZA',
    image: 'https://i.imgur.com/BxOq25I.jpeg',
    modal: {
      realName: 'Solána Imani Rowe',
      birth: 'November 8, 1989, St. Louis, Missouri, USA',
      genre: 'R&B, Alternative R&B, Pop',
      description:
        'SZA is celebrated for introspective lyrics and genre-blending textures. Ctrl (2017) and SOS (2022) garnered critical acclaim and cemented her as a leading voice in modern R&B.',
      latestAlbum: 'SOS (2022)',
    },
  },
  {
    name: 'Metro Boomin',
    image: 'https://i.imgur.com/3XiLdPP.jpeg',
    modal: {
      realName: 'Leland Tyler Wayne',
      birth: 'September 16, 1993, St. Louis, Missouri, USA',
      genre: 'Hip-Hop, Trap (Producer)',
      description:
        'One of the most influential producers in modern rap, shaping the 2010s–2020s trap sound. Known for dark, cinematic production and major hits with Future, The Weeknd, and 21 Savage.',
      latestAlbum: 'We Still Don’t Trust You (2024) with Future; Heroes & Villains (2022).',
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
