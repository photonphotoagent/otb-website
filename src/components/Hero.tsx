import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -250]);
  const y3 = useTransform(scrollY, [0, 800], [0, 120]);
  const y4 = useTransform(scrollY, [0, 800], [0, -80]);
  const ringRotate1 = useTransform(scrollY, [0, 3000], [0, 360]);
  const ringRotate2 = useTransform(scrollY, [0, 3000], [0, -180]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);

  return (
    <motion.div
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Layered parallax gradient orbs */}
      <motion.div style={{ y: y1 }} className="absolute -top-40 -right-60 w-[50rem] h-[50rem] pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-blue-soft/40 to-brand-sky/15 blur-[120px] animate-morph" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute -bottom-20 -left-60 w-[45rem] h-[45rem] pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-mint/35 to-brand-sage/15 blur-[130px] animate-morph-slow" />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-coral-soft/20 to-brand-coral-whisper/10 blur-[100px] animate-float-slow" />
      </motion.div>
      <motion.div style={{ y: y4 }} className="absolute top-20 left-[20%] w-[20rem] h-[20rem] pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-blue-warm/10 to-transparent blur-[80px] animate-float" />
      </motion.div>

      {/* Decorative rotating rings at different depths */}
      <motion.div
        style={{ rotate: ringRotate1 }}
        className="absolute top-[15%] right-[8%] w-72 h-72 border border-brand-blue-soft/[0.07] rounded-full pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ rotate: ringRotate2 }}
        className="absolute top-[15%] right-[8%] w-56 h-56 border border-brand-sage/[0.06] rounded-full pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ rotate: ringRotate1 }}
        className="absolute bottom-[20%] left-[3%] w-48 h-48 border border-brand-coral-soft/[0.08] rounded-full pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ rotate: ringRotate2 }}
        className="absolute bottom-[20%] left-[3%] w-32 h-32 border border-brand-blue-warm/[0.06] rounded-full pointer-events-none"
        aria-hidden
      />

      {/* Animated grid dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden>
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #0f2a4a 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Horizontal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[30%] left-0 w-[30%] h-[1px] bg-gradient-to-r from-transparent via-brand-blue-soft/20 to-transparent origin-left pointer-events-none"
        aria-hidden
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[70%] right-0 w-[25%] h-[1px] bg-gradient-to-l from-transparent via-brand-coral-soft/15 to-transparent origin-right pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center space-x-3 py-2.5 px-7 mb-12 text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue-warm bg-white/70 backdrop-blur-xl rounded-full border border-brand-blue-warm/15 shadow-lg shadow-brand-navy/5 font-label">
              <span className="w-2 h-2 bg-brand-coral rounded-full animate-pulse" />
              <span>The Ethics of Modern Equity</span>
              <span className="w-2 h-2 bg-brand-sage rounded-full animate-pulse [animation-delay:0.5s]" />
            </span>
          </motion.div>

          {/* Headline with animated text reveal */}
          <div className="mb-12">
            <AnimatedText
              text="Win-Win"
              as="h1"
              className="text-7xl md:text-[10rem] font-medium text-warm-dark leading-[0.82] tracking-tight"
              delay={0.3}
              staggerDelay={0.08}
            />
            <motion.div
              initial={{ opacity: 0, y: 80, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.7, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="perspective-[1000px]"
            >
              <span className="block text-7xl md:text-[10rem] leading-[0.82] tracking-tight gradient-text italic font-light font-display">By Design.</span>
            </motion.div>
          </div>

          {/* Animated divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[2px] mx-auto mb-10 bg-gradient-to-r from-brand-coral via-brand-sage to-brand-blue-warm origin-center"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-warm-gray text-xl md:text-2xl mb-16 leading-relaxed font-light"
          >
            We've redefined the investment landscape. No more predatory offers. Just <span className="text-warm-dark font-medium">creative, honest, and high-impact</span> solutions for homeowners who value their future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton
              onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-14 py-6 bg-brand-navy text-white rounded-full font-bold text-lg overflow-hidden transition-all shadow-[0_20px_60px_-10px_rgba(15,42,74,0.5)] card-shine"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Strategy Session
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-forest to-brand-leaf translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </MagneticButton>

            <MagneticButton
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-14 py-6 border-2 border-brand-blue-warm/15 text-warm-dark rounded-full font-bold text-lg hover:bg-brand-blue-whisper hover:border-brand-blue-warm/30 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-brand-navy/5"
            >
              Explore Our Values
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex items-center justify-center gap-8 mt-16"
          >
            {['240% More Equity', 'Zero Hidden Fees', 'Community First'].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-warm-light font-label">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-brand-sage">
                  <circle cx="6" cy="6" r="6" fill="currentColor" fillOpacity="0.15"/>
                  <path d="M4 6L5.5 7.5L8 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-warm-light font-label">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-warm-light to-transparent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
