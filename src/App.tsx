import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import AIAdvisor from './components/AIAdvisor';
import ScenariosSection from './components/ScenariosSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'philosophy', 'strategy', 'scenarios', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-stone-200 selection:text-stone-800">
      <Navbar activeSection={activeSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="philosophy" className="py-24 bg-stone-50">
          <Philosophy />
        </section>

        <section id="strategy" className="py-24">
          <AIAdvisor />
        </section>

        <section id="scenarios" className="py-24 bg-stone-50">
          <ScenariosSection />
        </section>

        <section id="contact" className="py-24">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
