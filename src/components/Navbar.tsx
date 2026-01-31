import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
        glass px-12 py-4 rounded-full flex items-center space-x-14 soft-shadow transition-all duration-700 ease-[0.22, 1, 0.36, 1]
        ${scrolled ? 'scale-90 py-3 shadow-[0_40px_120px_-20px_rgba(6,78,59,0.15)] border-white/60 backdrop-blur-3xl' : 'scale-100'}
      `}>
        <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="w-12 h-12 bg-stone-900 rounded-[1rem] flex items-center justify-center transition-all duration-500 group-hover:rotate-[15deg] group-hover:bg-emerald-900">
            <span className="text-white text-xs font-black tracking-tighter">OTB</span>
          </div>
          <span className="text-stone-900 font-black tracking-[0.1em] whitespace-nowrap hidden lg:block text-xs uppercase">
            Outside <span className="text-emerald-900">The Box</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 relative group
                ${activeSection === link.id ? 'text-emerald-900' : 'text-stone-400 hover:text-stone-900'}
              `}
            >
              {link.label}
              <motion.div
                animate={{ scaleX: activeSection === link.id ? 1 : 0 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-900 origin-left rounded-full"
              />
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-stone-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="bg-stone-900 text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-900 hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-500 shadow-xl"
        >
          Partner
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
