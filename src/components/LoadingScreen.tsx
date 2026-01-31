import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-brand-navy flex flex-col items-center justify-center"
        >
          {/* Logo letters */}
          <div className="flex items-center space-x-1 mb-8">
            {['O', 'T', 'B'].map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 + i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-6xl md:text-8xl font-display text-white tracking-tight"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Expanding line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-[2px] bg-gradient-to-r from-brand-coral via-brand-sage to-brand-sky origin-center mb-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="font-label text-brand-blue-soft/60 text-xs uppercase tracking-[0.5em]"
          >
            Win-Win By Design
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
