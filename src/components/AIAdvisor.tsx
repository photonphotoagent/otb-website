import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeminiAdvisor } from '../services/gemini';
import { ChatMessage } from '../types';
import AnimatedText from './AnimatedText';

const AIAdvisor = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to your personal strategy session. I'm here to help you explore creative, ethical real estate solutions. Tell me about your situation\u2014equity concerns, timeline pressures, or property challenges\u2014and together we'll find a path forward." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiAdvisor(newHistory);
    setTimeout(() => {
      setMessages([...newHistory, { role: 'model', text: response }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-20"
      >
        <span className="text-brand-blue-warm font-black uppercase tracking-[0.4em] text-[10px] mb-4 block font-label">Your Personal Advisor</span>
        <AnimatedText
          text="AI-Powered Strategy Session"
          as="h2"
          className="text-5xl md:text-6xl font-medium text-warm-dark mb-6 tracking-tight font-display"
        />
        <p className="text-warm-gray text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">Thoughtful guidance for homeowners navigating complex real estate decisions.</p>
      </motion.div>

      <div className="relative">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-blue-soft/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-coral-whisper/30 blur-[120px] rounded-full -z-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col h-[700px] md:h-[750px] shadow-[0_40px_100px_-20px_rgba(15,42,74,0.1)] border border-brand-blue-soft/20 relative z-10"
        >
          {/* Header */}
          <div className="px-6 md:px-10 py-6 md:py-8 border-b border-brand-cream-deep/50 flex items-center justify-between bg-white/40 backdrop-blur-md">
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-navy/20 transition-transform hover:rotate-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-warm-dark text-base md:text-lg tracking-tight">OTB Strategy Engine</h4>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sage opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-leaf"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-leaf font-bold font-label">Ready to Help</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex space-x-2">
              <div className="px-4 py-2 bg-white/50 rounded-full border border-brand-cream-deep text-[10px] font-bold uppercase tracking-widest text-warm-light font-label">V.4.2</div>
              <div className="px-4 py-2 bg-brand-green-whisper rounded-full border border-brand-mint text-[10px] font-bold uppercase tracking-widest text-brand-leaf font-label">Secure</div>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-8 md:space-y-12 bg-brand-cream/20">
            <AnimatePresence initial={false}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] md:max-w-[75%] p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-sm transition-all relative ${
                    msg.role === 'user'
                      ? 'bg-brand-navy text-white rounded-br-lg shadow-lg shadow-brand-navy/10'
                      : 'bg-white text-warm-dark rounded-bl-lg border-l-4 border-brand-blue-warm/30 shadow-md'
                  }`}>
                    <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap font-light">
                      {msg.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-start"
              >
                <div className="bg-brand-blue-whisper px-8 md:px-10 py-5 md:py-6 rounded-full flex items-center space-x-3 shadow-sm border border-brand-blue-soft/30">
                  <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 bg-brand-blue-warm/40 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.15 }} className="w-2 h-2 bg-brand-blue-warm/60 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.3 }} className="w-2 h-2 bg-brand-blue-warm rounded-full" />
                  <span className="text-xs text-brand-blue-warm font-bold uppercase tracking-widest ml-3 font-label">Thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 md:p-10 bg-white border-t border-brand-cream-deep/50">
            <div className="relative flex items-center max-w-5xl mx-auto">
              <input
                aria-label="Ask the Strategy Engine"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="E.g., I'm facing an auction date next month with $200k in equity..."
                className="w-full py-5 md:py-6 px-8 md:px-12 pr-20 md:pr-24 rounded-full bg-brand-cream border border-brand-cream-deep focus:outline-none focus:ring-4 focus:ring-brand-blue-warm/10 focus:border-brand-blue-warm/30 transition-all text-lg font-light shadow-inner placeholder:text-warm-light"
              />
              <button
                aria-label="Send query"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-3 p-4 md:p-5 bg-brand-navy text-white rounded-full hover:bg-brand-forest disabled:opacity-30 transition-all shadow-lg shadow-brand-navy/20 active:scale-90"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-warm-light mt-4 md:mt-6 text-center uppercase tracking-[0.4em] font-bold font-label">Private & Secure Consultation &bull; No Data Sales Policy</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAdvisor;
