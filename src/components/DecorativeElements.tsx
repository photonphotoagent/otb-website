import { motion } from 'framer-motion';

/**
 * Floating geometric shapes as background decoration
 */
export const FloatingShapes = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
    {/* Rotating ring - top left */}
    <motion.div
      className="absolute top-[15vh] left-[5vw] w-32 h-32 border border-brand-blue-soft/20 rounded-full animate-spin-slow"
      aria-hidden
    />

    {/* Small filled circle */}
    <motion.div
      className="absolute top-[45vh] right-[8vw] w-4 h-4 bg-brand-coral/20 rounded-full animate-float"
      aria-hidden
    />

    {/* Rotating ring - mid right */}
    <motion.div
      className="absolute top-[70vh] right-[15vw] w-20 h-20 border border-brand-sage/15 rounded-full animate-spin-slower"
      aria-hidden
    />

    {/* Diamond shape */}
    <motion.div
      className="absolute top-[55vh] left-[12vw] w-6 h-6 bg-brand-blue-warm/10 rotate-45 animate-float-slow"
      aria-hidden
    />

    {/* Large subtle ring */}
    <motion.div
      className="absolute top-[130vh] left-[50vw] w-48 h-48 border border-brand-mint/10 rounded-full animate-spin-slower"
      aria-hidden
    />

    {/* Small coral dot */}
    <motion.div
      className="absolute top-[90vh] left-[80vw] w-3 h-3 bg-brand-coral-soft/25 rounded-full animate-pulse-soft"
      aria-hidden
    />

    {/* Blue dot */}
    <motion.div
      className="absolute top-[200vh] left-[20vw] w-5 h-5 bg-brand-sky/15 rounded-full animate-float-slower"
      aria-hidden
    />
  </div>
);

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
