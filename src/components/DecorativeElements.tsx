import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Floating geometric shapes as background decoration — more depth layers
 */
export const FloatingShapes = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -600]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Rotating ring with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[15vh] left-[5vw] w-40 h-40 border border-brand-blue-soft/[0.08] rounded-full animate-spin-slow"
        aria-hidden
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[15vh] left-[5vw] w-28 h-28 border border-brand-sage/[0.06] rounded-full animate-spin-slower"
        aria-hidden
      />

      {/* Coral accent dot cluster */}
      <motion.div style={{ y: y2 }} className="absolute top-[40vh] right-[6vw]" aria-hidden>
        <div className="w-3 h-3 bg-brand-coral/15 rounded-full animate-float" />
        <div className="w-2 h-2 bg-brand-coral/10 rounded-full animate-float-slow ml-4 -mt-1" />
        <div className="w-1.5 h-1.5 bg-brand-coral-soft/15 rounded-full animate-float-slower ml-1 mt-2" />
      </motion.div>

      {/* Mid-right rings */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[75vh] right-[12vw] w-24 h-24 border border-brand-sage/[0.07] rounded-full animate-spin-slower"
        aria-hidden
      />

      {/* Diamond shapes */}
      <motion.div style={{ y: y2 }} className="absolute top-[55vh] left-[10vw]" aria-hidden>
        <div className="w-5 h-5 bg-brand-blue-warm/[0.06] rotate-45 animate-float-slow" />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute top-[85vh] right-[25vw]" aria-hidden>
        <div className="w-4 h-4 bg-brand-forest/[0.05] rotate-45 animate-float" />
      </motion.div>

      {/* Large subtle ring cluster at page mid */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[130vh] left-[45vw]"
        aria-hidden
      >
        <div className="w-56 h-56 border border-brand-mint/[0.05] rounded-full animate-spin-slower" />
        <div className="absolute inset-4 border border-brand-blue-soft/[0.04] rounded-full animate-spin-slow" />
      </motion.div>

      {/* Blue dot cluster */}
      <motion.div style={{ y: y2 }} className="absolute top-[100vh] left-[80vw]" aria-hidden>
        <div className="w-3 h-3 bg-brand-sky/[0.12] rounded-full animate-pulse-soft" />
        <div className="w-2 h-2 bg-brand-blue-warm/[0.08] rounded-full animate-pulse-soft ml-3 mt-2 [animation-delay:1s]" />
      </motion.div>

      {/* Cross shape */}
      <motion.div style={{ y: y1 }} className="absolute top-[160vh] left-[15vw] opacity-[0.04]" aria-hidden>
        <div className="w-8 h-[2px] bg-brand-navy absolute top-1/2 -translate-y-1/2" />
        <div className="h-8 w-[2px] bg-brand-navy absolute left-1/2 -translate-x-1/2" />
      </motion.div>

      {/* Sage dot */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[200vh] left-[20vw] w-5 h-5 bg-brand-sage/[0.1] rounded-full animate-float-slower"
        aria-hidden
      />

      {/* Bottom area rings */}
      <motion.div style={{ y: y2 }} className="absolute top-[250vh] right-[10vw]" aria-hidden>
        <div className="w-20 h-20 border border-brand-coral/[0.06] rounded-full animate-spin-slow" />
      </motion.div>
    </div>
  );
};

/**
 * Animated line divider that draws on scroll
 */
export const AnimatedDivider = ({ className = '' }: { className?: string }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className={`h-[2px] bg-gradient-to-r from-transparent via-brand-blue-warm/30 to-transparent origin-left ${className}`}
  />
);

/**
 * Glow orb for placing behind specific elements
 */
export const GlowOrb = ({
  color = 'blue',
  size = 'md',
  className = '',
}: {
  color?: 'blue' | 'green' | 'coral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  const colorMap = {
    blue: 'from-brand-blue-soft/30 to-brand-sky/10',
    green: 'from-brand-mint/30 to-brand-sage/10',
    coral: 'from-brand-coral-soft/20 to-brand-coral-whisper/10',
  };
  const sizeMap = {
    sm: 'w-48 h-48 blur-[60px]',
    md: 'w-80 h-80 blur-[100px]',
    lg: 'w-[30rem] h-[30rem] blur-[120px]',
  };

  return (
    <div
      className={`absolute rounded-full bg-gradient-to-br ${colorMap[color]} ${sizeMap[size]} animate-morph pointer-events-none ${className}`}
      aria-hidden
    />
  );
};

/**
 * Parallax image wrapper with reveal animation
 */
export const ParallaxReveal = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
