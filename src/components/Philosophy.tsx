import { motion } from 'framer-motion';

const Philosophy = () => {
  const pillars = [
    {
      title: "Equity First",
      description: "Traditional buyers take your equity. We help you hold it, grow it, and realize it through strategic partnerships.",
      icon: "\u269C\uFE0F",
      accent: "#064e3b"
    },
    {
      title: "Creative Paths",
      description: "Subject-To, Seller Carry Back, or Renovation Splits. We use sophisticated financial models to create exits that work.",
      icon: "\uD83E\uDDE9",
      accent: "#b68d40"
    },
    {
      title: "Community Growth",
      description: "We invest in the stability of neighborhoods, ensuring families aren't displaced by predatory practices.",
      icon: "\u26F2",
      accent: "#115e59"
    },
    {
      title: "Absolute Clarity",
      description: "No hidden agendas. Our contracts are plain English, and our fees are transparent. Integrity is our highest budget.",
      icon: "\uD83D\uDD6F\uFE0F",
      accent: "#1c1917"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-32"
      >
        <h2 className="text-6xl font-medium text-stone-900 mb-8 leading-tight">
          A Purpose <br /><span className="italic font-light text-emerald-900">Larger Than Real Estate</span>
        </h2>
        <div className="w-24 h-1 bg-emerald-900/10 mx-auto mb-8 rounded-full" />
        <p className="text-stone-500 max-w-2xl mx-auto text-2xl font-light leading-relaxed">
          Most firms focus on the building. We focus on the <span className="text-stone-900 font-medium">legacy</span> you leave behind when you move.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {pillars.map((pillar, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="group relative bg-white p-14 rounded-[3rem] soft-shadow border border-stone-100/50 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-[5rem] -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-emerald-50" />
            <div className="text-5xl mb-12 relative z-10 transition-transform duration-500 group-hover:scale-110 origin-left">{pillar.icon}</div>
            <h3 className="text-2xl font-bold mb-6 text-stone-900 relative z-10 tracking-tight">{pillar.title}</h3>
            <p className="text-stone-500 leading-relaxed text-lg font-light relative z-10">
              {pillar.description}
            </p>
            <div
              className="absolute bottom-0 left-0 h-1 bg-stone-100 transition-all duration-500 group-hover:w-full group-hover:bg-emerald-800"
              style={{ width: '0%' }}
            />
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-40 glass p-8 rounded-[5rem] flex flex-col md:flex-row items-center gap-20 overflow-hidden"
      >
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-emerald-900/10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"
            alt="Beautiful architectural detail representing quality"
            className="rounded-[4rem] object-cover w-full h-[38rem] shadow-2xl transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-900 rounded-full flex items-center justify-center text-white border-8 border-white shadow-xl">
             <span className="text-xs font-black uppercase tracking-tighter">EST. 2024</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left p-6 md:pr-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-medium text-stone-900 mb-10 italic leading-[1.15] tracking-tight">
              "We choose to walk <span className="text-emerald-900 not-italic font-bold">beside</span> you, not ahead of you."
            </h3>
            <p className="text-stone-500 mb-12 text-xl leading-relaxed font-light">
              We specialize in the complex—probate, liens, or properties requiring significant structural intervention. Where others see risk, we see a path to restoration. Our approach ensures the homeowner's dignity remains intact while their capital is protected.
            </p>
            <div className="flex items-center space-x-6 p-4 rounded-3xl bg-white/50 border border-stone-100">
               <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-50">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=200&h=200&q=80" alt="Julian Rivers, Founder" />
               </div>
               <div>
                  <p className="font-bold text-2xl text-stone-900 tracking-tight">Julian Rivers</p>
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-[0.2em]">Principal & Founder</p>
               </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Philosophy;
