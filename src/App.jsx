import Hero from './components/Hero';
import Artists from './components/Artists';
import Playlists from './components/Playlists';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main>
        <Artists />
        <Playlists />
      </main>
      <Footer />
    </div>
  );
}

export default App;
