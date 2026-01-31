import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-100/30 rounded-full blur-[100px] -mr-40 -mt-20 opacity-60"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-amber-100/30 rounded-full blur-[100px] -ml-40 -mb-20 opacity-60"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center space-x-2 py-2 px-6 mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900 bg-white/50 backdrop-blur-md rounded-full border border-emerald-900/10 shadow-sm">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
              <span>The Ethics of Modern Equity</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[9.5rem] font-medium text-stone-900 mb-10 leading-[0.85] tracking-tight"
          >
            Win-Win <br />
            <span className="gradient-text italic font-light">By Design.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-stone-500 text-xl md:text-2xl mb-16 leading-relaxed font-light"
          >
            We've redefined the investment landscape. No more predatory offers. Just creative, honest, and high-impact solutions for homeowners who value their future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-5 bg-stone-900 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10">Start a Strategy Session</span>
              <div className="absolute inset-0 bg-emerald-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>

            <button
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 border border-stone-200 text-stone-800 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-sm"
            >
              Explore Our Values
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-300"
      >
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="11" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
