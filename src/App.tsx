import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import AIAdvisor from './components/AIAdvisor';
import ScenariosSection from './components/ScenariosSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BackgroundOrbs from './components/BackgroundOrbs';
import { FloatingShapes } from './components/DecorativeElements';
import SectionTransition from './components/SectionTransition';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <LoadingScreen isLoading={isLoading} />

      <div className="min-h-screen selection:bg-brand-blue-soft selection:text-brand-navy">
        {/* Background layers */}
        <BackgroundOrbs />
        <FloatingShapes />

        {/* Content */}
        <div className="relative" style={{ zIndex: 2 }}>
          <Navbar activeSection={activeSection} />

          <main>
            <section id="home">
              <Hero />
            </section>

            <SectionTransition from="#faf7f2" to="#f0ebe2" />

            <section id="philosophy" className="py-32 lg:py-40 bg-brand-cream-deep/40">
              <Philosophy />
            </section>

            <SectionTransition from="#f0ebe2" to="#faf7f2" flip />

            <section id="strategy" className="py-32 lg:py-40">
              <AIAdvisor />
            </section>

            <SectionTransition from="#faf7f2" to="#f0ebe2" />

            <section id="scenarios" className="py-32 lg:py-40 bg-brand-cream-deep/40">
              <ScenariosSection />
            </section>

            <SectionTransition from="#f0ebe2" to="#faf7f2" flip />

            <section id="contact" className="py-32 lg:py-40">
              <ContactSection />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
