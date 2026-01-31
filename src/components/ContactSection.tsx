import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-4xl mx-auto py-20 md:py-32 text-center"
          >
            <div className="glass p-12 md:p-20 rounded-[3rem] md:rounded-[5rem] shadow-2xl">
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-10 bg-brand-green-whisper rounded-full flex items-center justify-center"
              >
                <motion.svg
                  width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.path
                    d="M20 6L9 17L4 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                  />
                </motion.svg>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-medium text-warm-dark mb-6 tracking-tight font-display">Speak with you soon.</h2>
              <p className="text-warm-gray text-xl md:text-2xl font-light leading-relaxed mb-12">
                Your request has been prioritized. A strategy principal will reach out within 24 hours to schedule a confidential dialogue.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-brand-blue-warm font-bold uppercase tracking-widest hover:underline underline-offset-8 transition-all font-label text-sm"
              >
                Send another inquiry
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto glass rounded-[3rem] md:rounded-[5rem] overflow-hidden flex flex-col md:flex-row soft-shadow border border-brand-blue-soft/15 shadow-[0_40px_100px_-20px_rgba(15,42,74,0.1)]"
          >
            {/* Dark Sidebar */}
            <div className="w-full md:w-5/12 bg-brand-navy p-12 md:p-16 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-warm blur-[100px] rounded-full -mr-40 -mt-40" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-forest blur-[80px] rounded-full -ml-20 -mb-20" />
              </div>

              <div className="relative z-10">
                <span className="text-brand-sage font-black uppercase tracking-[0.5em] text-[10px] mb-8 block font-label">Confidential Inquiries</span>
                <AnimatedText
                  text="Initiate"
                  as="h2"
                  className="text-5xl md:text-6xl font-medium mb-2 leading-[1.1] tracking-tight italic font-display text-white"
                />
                <span className="block text-5xl md:text-6xl font-display not-italic text-brand-sage leading-[1.1] tracking-tight font-medium mb-10">The Shift.</span>
                <p className="text-brand-blue-soft/60 text-lg md:text-xl leading-relaxed font-light mb-12 md:mb-16">
                  We are highly selective with our partnerships to ensure every homeowner receives white-glove attention and maximum value extraction.
                </p>

                <div className="space-y-8 md:space-y-10">
                  <div className="flex items-center space-x-5 md:space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-brand-coral group-hover:scale-110">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <span className="text-base md:text-lg font-light tracking-wide hover:text-brand-coral transition-colors">concierge@otb.capital</span>
                  </div>
                  <div className="flex items-center space-x-5 md:space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-brand-coral group-hover:scale-110">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <span className="text-base md:text-lg font-light tracking-wide hover:text-brand-coral transition-colors">The Community Hub, Austin TX</span>
                  </div>
                </div>
              </div>

              <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/10 text-brand-blue-soft/30 text-[10px] font-black uppercase tracking-[0.5em] relative z-10 font-label">
                Ethical Investing Collective &bull; 2024
              </div>
            </div>

            {/* Form Area */}
            <div className="w-full md:w-7/12 p-12 md:p-16 lg:p-24 bg-white">
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-warm-light uppercase tracking-[0.4em] font-label">Full Name</label>
                    <input required type="text" className="w-full bg-brand-cream border-b-2 border-brand-cream-deep py-4 focus:outline-none focus:border-brand-blue-warm transition-all text-lg md:text-xl font-light placeholder:text-warm-light/60" placeholder="Alexander Hamilton" />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-warm-light uppercase tracking-[0.4em] font-label">Email Identity</label>
                    <input required type="email" className="w-full bg-brand-cream border-b-2 border-brand-cream-deep py-4 focus:outline-none focus:border-brand-blue-warm transition-all text-lg md:text-xl font-light placeholder:text-warm-light/60" placeholder="alex@domain.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-warm-light uppercase tracking-[0.4em] font-label">Property Vector (Optional)</label>
                  <input type="text" className="w-full bg-brand-cream border-b-2 border-brand-cream-deep py-4 focus:outline-none focus:border-brand-blue-warm transition-all text-lg md:text-xl font-light placeholder:text-warm-light/60" placeholder="Address, City, State" />
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-warm-light uppercase tracking-[0.4em] font-label">Situation Briefing</label>
                  <textarea rows={4} className="w-full bg-brand-cream border-b-2 border-brand-cream-deep py-4 focus:outline-none focus:border-brand-blue-warm transition-all text-lg md:text-xl font-light resize-none placeholder:text-warm-light/60" placeholder="How can our creative team help you architect a better exit?"></textarea>
                </div>

                <MagneticButton
                  type="submit"
                  className="w-full py-6 text-white rounded-full font-black text-xs uppercase tracking-[0.5em] transition-all hover:shadow-[0_40px_80px_-10px_rgba(15,42,74,0.3)] hover:-translate-y-1 shadow-2xl card-shine overflow-hidden font-label"
                  strength={0.15}
                >
                  <span className="relative z-10 block w-full py-6 rounded-full" style={{ background: 'linear-gradient(135deg, #0f2a4a, #1a5632)' }}>
                    Submit Strategy Request
                  </span>
                </MagneticButton>
                <div className="flex items-center justify-center space-x-3 text-[10px] text-warm-light font-bold uppercase tracking-widest font-label">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-brand-sage"><circle cx="6" cy="6" r="6" fill="currentColor" fillOpacity="0.2"/><circle cx="6" cy="6" r="2" fill="currentColor"/></svg>
                  <span>Avg. Response Time: 4.2 Hours</span>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactSection;
