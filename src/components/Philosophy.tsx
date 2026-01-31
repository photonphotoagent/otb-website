import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { AnimatedDivider } from './DecorativeElements';
import { useCardTilt } from '../hooks/useAnimations';

const accentColors = [
  { border: 'border-l-brand-blue-warm', bar: 'bg-brand-blue-warm', iconBg: 'bg-brand-blue-whisper', iconColor: 'text-brand-blue-warm' },
  { border: 'border-l-brand-coral', bar: 'bg-brand-coral', iconBg: 'bg-brand-coral-whisper', iconColor: 'text-brand-coral' },
  { border: 'border-l-brand-forest', bar: 'bg-brand-forest', iconBg: 'bg-brand-green-whisper', iconColor: 'text-brand-forest' },
  { border: 'border-l-brand-navy', bar: 'bg-brand-navy', iconBg: 'bg-brand-blue-whisper', iconColor: 'text-brand-navy' },
];

const pillars = [
  {
    title: "Equity First",
    description: "Traditional buyers take your equity. We help you hold it, grow it, and realize it through strategic partnerships.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Creative Paths",
    description: "Subject-To, Seller Carry Back, or Renovation Splits. We use sophisticated financial models to create exits that work.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Community Growth",
    description: "We invest in the stability of neighborhoods, ensuring families aren't displaced by predatory practices.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    title: "Absolute Clarity",
    description: "No hidden agendas. Our contracts are plain English, and our fees are transparent. Integrity is our highest budget.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
];

const TiltCard = ({ pillar, index }: { pillar: typeof pillars[0]; index: number }) => {
  const { ref, springRotateX, springRotateY, handleMouseMove, handleMouseLeave } = useCardTilt(8);
  const accent = accentColors[index];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
      }}
      className={`group relative bg-white p-12 md:p-14 rounded-[2.5rem] soft-shadow border border-brand-cream-deep/80 border-l-4 ${accent.border} overflow-hidden card-shine will-change-transform`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cream-deep/30 rounded-bl-[5rem] -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-brand-blue-whisper/50" />
      <div className={`w-16 h-16 ${accent.iconBg} rounded-2xl flex items-center justify-center mb-10 relative z-10 transition-transform duration-500 group-hover:scale-110 ${accent.iconColor}`}>
        {pillar.icon}
      </div>
      <h3 className="text-2xl font-bold mb-6 text-warm-dark relative z-10 tracking-tight font-display">{pillar.title}</h3>
      <p className="text-warm-gray leading-relaxed text-lg font-light relative z-10">
        {pillar.description}
      </p>
      <div
        className={`absolute bottom-0 left-0 h-1 ${accent.bar} transition-all duration-700 ease-out`}
        style={{ width: '0%' }}
      />
      <style>{`
        .group:hover > div:last-child { width: 100% !important; }
      `}</style>
    </motion.article>
  );
};

const Philosophy = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-32"
      >
        <AnimatedText
          text="A Purpose"
          as="h2"
          className="text-5xl md:text-6xl font-medium text-warm-dark leading-tight font-display"
        />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="block text-5xl md:text-6xl font-display leading-tight"
        >
          <span className="gradient-text-warm italic font-light">Larger Than Real Estate</span>
        </motion.span>
        <AnimatedDivider className="w-24 mx-auto my-8" />
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-warm-gray max-w-2xl mx-auto text-2xl font-light leading-relaxed"
        >
          Most firms focus on the building. We focus on the <span className="text-warm-dark font-medium">legacy</span> you leave behind when you move.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {pillars.map((pillar, index) => (
          <TiltCard key={index} pillar={pillar} index={index} />
        ))}
      </div>

      {/* Founder section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-32 lg:mt-40 glass p-6 md:p-8 rounded-[3rem] md:rounded-[5rem] flex flex-col md:flex-row items-center gap-12 md:gap-20 overflow-hidden"
      >
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-brand-navy/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"
            alt="Beautiful architectural detail representing quality"
            className="rounded-[3rem] md:rounded-[4rem] object-cover w-full h-[28rem] md:h-[38rem] shadow-2xl transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-32 md:h-32 bg-brand-navy rounded-full flex items-center justify-center text-white border-8 border-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-tighter font-label">EST. 2024</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left p-4 md:p-6 md:pr-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatedText
              text={`"We choose to walk beside you, not ahead of you."`}
              as="h3"
              className="text-4xl md:text-5xl font-medium text-warm-dark mb-10 italic leading-[1.15] tracking-tight font-display"
              staggerDelay={0.03}
            />
            <p className="text-warm-gray mb-12 text-xl leading-relaxed font-light">
              We specialize in the complex—probate, liens, or properties requiring significant structural intervention. Where others see risk, we see a path to restoration. Our approach ensures the homeowner's dignity remains intact while their capital is protected.
            </p>
            <div className="flex items-center space-x-6 p-4 rounded-3xl bg-white/50 border border-brand-cream-deep">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-brand-blue-whisper">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=200&h=200&q=80" alt="Julian Rivers, Founder" />
              </div>
              <div>
                <p className="font-bold text-2xl text-warm-dark tracking-tight">Julian Rivers</p>
                <p className="text-brand-leaf font-bold text-sm uppercase tracking-[0.2em] font-label">Principal & Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Philosophy;
