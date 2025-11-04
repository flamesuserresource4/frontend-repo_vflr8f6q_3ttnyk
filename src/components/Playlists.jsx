import { motion } from 'framer-motion';

const playlists = [
  {
    title: 'Midnight Cruise',
    cover: 'https://picsum.photos/id/1011/600/600',
    caption: 'late-night 808s & neon city lights',
  },
  {
    title: 'Sunday Reset',
    cover: 'https://picsum.photos/id/1003/600/600',
    caption: 'smooth soul, calm rap, mellow feels',
  },
  {
    title: 'Sprint Mode',
    cover: 'https://picsum.photos/id/1025/600/600',
    caption: 'high energy bangers for focus',
  },
  {
    title: 'Afterglow',
    cover: 'https://picsum.photos/id/1039/600/600',
    caption: 'warm textures, hazy sunsets',
  },
];

export default function Playlists() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.25rem, 2.4vw, 2rem)', fontWeight: 600 }}>
            Playlists
          </h2>
          <span className="text-sm text-neutral-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
            updated often
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {playlists.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="aspect-square w-full object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="mt-3">
                <h3 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {p.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
