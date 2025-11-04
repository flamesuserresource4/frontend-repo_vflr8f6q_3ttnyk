import { motion } from 'framer-motion';

const playlists = [
  {
    title: 'Playlist 1',
    href: 'https://open.spotify.com/playlist/6cjIp7QTUiqTxLTAtzFOAt?si=361aafbc851a4719',
  },
  {
    title: 'Playlist 2',
    href: 'https://open.spotify.com/playlist/5yAHm3bkWvAG2TcN9sqgLl?si=8590303f5fbc4fa2',
  },
];

export default function Playlists() {
  return (
    <section className="w-full bg-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight">Playlists</h2>
          <span className="text-sm text-neutral-400">curated vibes</span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {playlists.map((p) => (
            <motion.a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group block rounded-3xl border border-white/10 bg-neutral-950 p-6 hover:bg-neutral-900/60 transition-colors"
            >
              <div className="flex items-center gap-4">
                <SpotifyIcon className="w-10 h-10 text-green-500" />
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-neutral-400 text-sm">Open in Spotify</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotifyIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm5.487 17.327a.75.75 0 0 1-1.032.246c-2.828-1.73-6.39-2.123-10.585-1.166a.75.75 0 1 1-.33-1.462c4.54-1.025 8.46-.574 11.533 1.327a.75.75 0 0 1 .414 1.055Zm1.473-3.177a.938.938 0 0 1-1.29.308c-3.238-1.985-8.173-2.56-11.997-1.403a.938.938 0 1 1-.546-1.8c4.323-1.31 9.724-.67 13.42 1.553a.938.938 0 0 1 .413 1.342Zm.157-3.27a1.125 1.125 0 0 1-1.547.369c-3.705-2.255-9.357-2.764-13.339-1.514a1.125 1.125 0 0 1-.675-2.152c4.61-1.447 10.9-.88 15.12 1.674.53.322.7 1.014.34 1.623Z" />
    </svg>
  );
}
