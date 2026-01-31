import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundOrbs = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -800]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -1200]);
  const y4 = useTransform(scrollY, [0, 5000], [0, -300]);
  const y5 = useTransform(scrollY, [0, 5000], [0, -900]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Large blue orb - top right */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-20 -right-40 w-[40rem] h-[40rem] rounded-full animate-morph-slow opacity-20 will-change-transform"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-blue-soft/60 to-brand-sky/30 blur-[100px]" />
      </motion.div>

      {/* Green orb - left middle */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40vh] -left-32 w-[35rem] h-[35rem] rounded-full animate-morph opacity-15 will-change-transform"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-mint/60 to-brand-sage/30 blur-[120px]" />
      </motion.div>

      {/* Coral orb - center */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[100vh] left-1/2 -translate-x-1/2 w-[25rem] h-[25rem] rounded-full animate-float-slow opacity-10 will-change-transform"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-coral-soft/50 to-brand-coral-whisper/30 blur-[100px]" />
      </motion.div>

      {/* Navy orb - bottom right */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[180vh] -right-20 w-[30rem] h-[30rem] rounded-full animate-morph-slow opacity-10 will-change-transform"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-blue-warm/40 to-brand-navy/20 blur-[120px]" />
      </motion.div>

      {/* Sage orb - bottom left */}
      <motion.div
        style={{ y: y5 }}
        className="absolute top-[260vh] -left-20 w-[20rem] h-[20rem] rounded-full animate-float-slower opacity-15 will-change-transform"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-sage/40 to-brand-green-whisper/50 blur-[80px]" />
      </motion.div>
    </div>
  );
};

export default BackgroundOrbs;
