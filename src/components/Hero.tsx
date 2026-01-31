import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';
import { GlowOrb } from './DecorativeElements';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 80]);
  const ringRotate = useTransform(scrollY, [0, 2000], [0, 360]);

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Morphing glow orbs */}
      <motion.div style={{ y: y1 }} className="absolute -top-20 -right-40" aria-hidden>
        <GlowOrb color="blue" size="lg" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 -left-40" aria-hidden>
        <GlowOrb color="green" size="lg" />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-20 right-1/4" aria-hidden>
        <GlowOrb color="coral" size="md" className="opacity-60" />
      </motion.div>

      {/* Decorative rotating rings */}
      <motion.div
        style={{ rotate: ringRotate }}
        className="absolute top-1/4 right-[10%] w-64 h-64 border border-brand-blue-soft/10 rounded-full pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ rotate: ringRotate }}
        className="absolute bottom-1/4 left-[5%] w-40 h-40 border border-brand-sage/10 rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center space-x-2 py-2 px-6 mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue-warm bg-white/60 backdrop-blur-md rounded-full border border-brand-blue-warm/15 shadow-sm font-label">
              <span className="w-1.5 h-1.5 bg-brand-coral rounded-full animate-pulse" />
              <span>The Ethics of Modern Equity</span>
            </span>
          </motion.div>

          {/* Headline with animated text reveal */}
          <div className="mb-10">
            <AnimatedText
              text="Win-Win"
              as="h1"
              className="text-7xl md:text-[9.5rem] font-medium text-warm-dark leading-[0.85] tracking-tight"
              delay={0.3}
              staggerDelay={0.08}
            />
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-7xl md:text-[9.5rem] leading-[0.85] tracking-tight"
            >
              <span className="gradient-text italic font-light font-display">By Design.</span>
            </motion.span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-warm-gray text-xl md:text-2xl mb-16 leading-relaxed font-light"
          >
            We've redefined the investment landscape. No more predatory offers. Just creative, honest, and high-impact solutions for homeowners who value their future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton
              onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-5 bg-brand-navy text-white rounded-full font-bold text-lg overflow-hidden transition-all shadow-[0_20px_60px_-10px_rgba(15,42,74,0.4)] card-shine"
            >
              <span className="relative z-10">Start a Strategy Session</span>
              <div className="absolute inset-0 bg-brand-forest translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </MagneticButton>

            <MagneticButton
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 border border-brand-blue-warm/20 text-warm-dark rounded-full font-bold text-lg hover:bg-brand-blue-whisper transition-all duration-300 shadow-sm"
            >
              Explore Our Values
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-warm-light"
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
