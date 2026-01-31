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
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-brand-navy flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background orbs in loading screen */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] rounded-full bg-brand-blue-warm/10 blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-1/4 -left-20 w-[25rem] h-[25rem] rounded-full bg-brand-forest/10 blur-[100px]"
            />
          </div>

          {/* Logo letters */}
          <div className="flex items-center space-x-2 mb-10 relative z-10">
            {['O', 'T', 'B'].map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ y: 60, opacity: 0, rotateX: -30 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: 0.2 + i * 0.15,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-7xl md:text-9xl font-display text-white tracking-tight"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Expanding line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-40 h-[2px] bg-gradient-to-r from-brand-coral via-brand-sage to-brand-sky origin-center mb-10 relative z-10"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-label text-brand-blue-soft/50 text-[10px] md:text-xs uppercase tracking-[0.6em] relative z-10"
          >
            Win-Win By Design
          </motion.p>

          {/* Loading progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] bg-gradient-to-r from-transparent via-brand-blue-soft/30 to-transparent mt-8 relative z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
