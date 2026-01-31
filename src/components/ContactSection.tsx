import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            className="max-w-4xl mx-auto py-32 text-center"
          >
            <div className="glass p-20 rounded-[5rem] shadow-2xl">
              <div className="text-8xl mb-10">{"\uD83C\uDF3F"}</div>
              <h2 className="text-6xl font-medium text-stone-900 mb-6 tracking-tight">Speak with you soon.</h2>
              <p className="text-stone-500 text-2xl font-light leading-relaxed mb-12">
                Your request has been prioritized. A strategy principal will reach out within 24 hours to schedule a confidential dialogue.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-emerald-900 font-bold uppercase tracking-widest hover:underline underline-offset-8 transition-all"
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
            className="max-w-7xl mx-auto glass rounded-[5rem] overflow-hidden flex flex-col md:flex-row soft-shadow border border-white/60 shadow-2xl"
          >
            <div className="w-full md:w-5/12 bg-stone-950 p-16 md:p-24 text-stone-50 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 blur-[100px] rounded-full -mr-40 -mt-40" />
              </div>

              <div className="relative z-10">
                <span className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Confidential Inquiries</span>
                <h2 className="text-6xl font-medium mb-10 leading-[1.1] tracking-tight italic">Initiate <br /><span className="not-italic text-emerald-500">The Shift.</span></h2>
                <p className="text-stone-400 text-xl leading-relaxed font-light mb-16">
                  We are highly selective with our partnerships to ensure every homeowner receives white-glove attention and maximum value extraction.
                </p>

                <div className="space-y-10">
                  <div className="flex items-center space-x-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center transition-all group-hover:border-emerald-500 group-hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <span className="text-lg font-light tracking-wide hover:text-emerald-500 transition-colors">concierge@otb.capital</span>
                  </div>
                  <div className="flex items-center space-x-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center transition-all group-hover:border-emerald-500 group-hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <span className="text-lg font-light tracking-wide hover:text-emerald-500 transition-colors">The Community Hub, Austin TX</span>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-stone-900 text-stone-600 text-[10px] font-black uppercase tracking-[0.5em] relative z-10">
                Ethical Investing Collective &bull; 2024
              </div>
            </div>

            <div className="w-full md:w-7/12 p-16 md:p-24 bg-white">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">Full Name</label>
                    <input required type="text" className="w-full bg-stone-50 border-b-2 border-stone-100 py-4 focus:outline-none focus:border-emerald-900 transition-all text-xl font-light placeholder:text-stone-300" placeholder="Alexander Hamilton" />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">Email Identity</label>
                    <input required type="email" className="w-full bg-stone-50 border-b-2 border-stone-100 py-4 focus:outline-none focus:border-emerald-900 transition-all text-xl font-light placeholder:text-stone-300" placeholder="alex@domain.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">Property Vector (Optional)</label>
                  <input type="text" className="w-full bg-stone-50 border-b-2 border-stone-100 py-4 focus:outline-none focus:border-emerald-900 transition-all text-xl font-light placeholder:text-stone-300" placeholder="Address, City, State" />
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">Situation Briefing</label>
                  <textarea rows={4} className="w-full bg-stone-50 border-b-2 border-stone-100 py-4 focus:outline-none focus:border-emerald-900 transition-all text-xl font-light resize-none placeholder:text-stone-300" placeholder="How can our creative team help you architect a better exit?"></textarea>
                </div>

                <button type="submit" className="w-full py-6 bg-stone-900 text-white rounded-full font-black text-xs uppercase tracking-[0.5em] hover:bg-emerald-900 transition-all hover:shadow-[0_40px_80px_-10px_rgba(6,78,59,0.3)] hover:-translate-y-2 active:scale-95 shadow-2xl">
                  Submit Strategy Request
                </button>
                <div className="flex items-center justify-center space-x-3 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-600"><circle cx="6" cy="6" r="6" fill="currentColor" fillOpacity="0.2"/><circle cx="6" cy="6" r="2" fill="currentColor"/></svg>
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
