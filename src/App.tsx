import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import NECJourney from './components/NECJourney';
import Events from './components/Events';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('dark')) root.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-300 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <NECJourney />
        <Events />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
