export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Music Addctd</p>
        <a
          href="https://open.spotify.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-3 hover:opacity-90"
          aria-label="Spotify profile"
        >
          <SpotifyIcon className="w-6 h-6" />
          <span className="text-white/80 text-sm">Spotify</span>
        </a>
      </div>
    </footer>
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
