function SpotifyIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12C24 5.372 18.628 0 12 0Zm5.47 17.36a.9.9 0 0 1-1.242.29c-3.406-2.08-7.699-2.55-12.753-1.405a.9.9 0 1 1-.39-1.76c5.46-1.21 10.132-.68 13.854 1.537a.9.9 0 0 1 .53 1.338Zm1.75-3.58a1.13 1.13 0 0 1-1.558.364c-3.897-2.39-9.836-3.087-14.454-1.703a1.13 1.13 0 0 1-.647-2.168c5.29-1.58 11.82-.8 16.22 1.876.53.326.698 1.02.44 1.63Zm.15-3.79c-4.41-2.62-11.7-2.86-15.9-1.73a1.36 1.36 0 1 1-.701-2.626c4.9-1.307 13.04-1.03 18.11 1.94a1.36 1.36 0 1 1-1.51 2.42Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between">
        <p className="text-neutral-500 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          © {new Date().getFullYear()} Music Addctd
        </p>
        <a
          href="https://open.spotify.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-neutral-300 hover:text-green-400 transition-colors"
          aria-label="Open Spotify profile"
        >
          <SpotifyIcon className="w-5 h-5" />
          <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Spotify</span>
        </a>
      </div>
    </footer>
  );
}
