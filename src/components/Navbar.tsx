import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Perspective' },
    { id: 'philosophy', label: 'Ethics' },
    { id: 'strategy', label: 'Consultation' },
    { id: 'scenarios', label: 'Yields' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-10"
    >
      <div className={`
        glass px-8 md:px-12 py-4 rounded-full flex items-center space-x-8 md:space-x-14 transition-all duration-700 ease-[0.22,1,0.36,1]
        ${scrolled
          ? 'scale-90 py-3 shadow-[0_40px_120px_-20px_rgba(15,42,74,0.15)] border-white/60 backdrop-blur-3xl'
          : 'scale-100 soft-shadow'}
      `}>
        {/* Logo */}
        <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rounded-[1.2rem] group-hover:shadow-lg group-hover:shadow-brand-navy/20">
            <span className="text-white text-xs font-black tracking-tighter font-label">OTB</span>
          </div>
          <span className="text-warm-dark font-black tracking-[0.1em] whitespace-nowrap hidden lg:block text-xs uppercase font-label">
            Outside <span className="gradient-text">The Box</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 relative group font-label
                ${activeSection === link.id ? 'text-brand-blue-warm' : 'text-warm-light hover:text-warm-dark'}
              `}
            >
              {link.label}
              <motion.div
                animate={{ scaleX: activeSection === link.id ? 1 : 0 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-coral origin-left rounded-full"
              />
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-warm-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <MagneticButton
          onClick={() => scrollTo('contact')}
          className="relative bg-brand-navy text-white px-8 md:px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-forest hover:shadow-2xl hover:shadow-brand-navy/20 transition-all duration-500 shadow-xl card-shine font-label overflow-hidden"
        >
          Partner
        </MagneticButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;
