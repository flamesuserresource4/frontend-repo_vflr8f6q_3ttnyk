import { useState } from 'react';
import { motion } from 'framer-motion';

const defaultArtists = [
  {
    name: 'Post Malone',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Post_Malone_Roskilde_Festival_2019.jpg',
  },
  {
    name: 'Future',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Future_-_Openair_Frauenfeld_2019_02.jpg',
  },
  {
    name: 'Travis Scott',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Travis_Scott_Roskilde_Festival_2019.jpg',
  },
  {
    name: 'SZA',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/SZA_2017.png',
  },
];

export default function Artists() {
  const [artists, setArtists] = useState(defaultArtists);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [error, setError] = useState('');

  const addArtist = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim() || !img.trim()) {
      setError('Please add both a name and an image link.');
      return;
    }
    try {
      // Basic URL validation
      const u = new URL(img);
      if (!/^https?:/.test(u.protocol)) throw new Error('Invalid protocol');
    } catch (_) {
      setError('Please provide a valid http(s) image URL.');
      return;
    }
    setArtists((prev) => [{ name: name.trim(), img: img.trim() }, ...prev]);
    setName('');
    setImg('');
  };

  return (
    <section className="w-full bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.25rem, 2.4vw, 2rem)', fontWeight: 600 }}>
            Favorite Artists
          </h2>
          <span className="text-sm text-neutral-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
            curated picks
          </span>
        </div>

        <form onSubmit={addArtist} className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_2fr_auto] items-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Artist name (e.g., Your Favorite)"
            className="w-full rounded-lg bg-neutral-900/80 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Artist name"
          />
          <input
            type="url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Image link (https://...)"
            className="w-full rounded-lg bg-neutral-900/80 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Artist image link"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 transition"
          >
            Add
          </button>
          {error && (
            <p className="sm:col-span-3 text-xs text-red-400" role="alert">{error}</p>
          )}
        </form>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {artists.map((a) => (
            <motion.figure
              key={`${a.name}-${a.img}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] lg:w-[399px] lg:h-[420px] object-cover rounded-[80px] ring-1 ring-white/5 shadow-2xl transition duration-300 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6)] group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[80px] bg-gradient-to-t from-black/40 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <figcaption className="mt-4 text-center text-neutral-200" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                {a.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
