import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeminiAdvisor } from '../services/gemini';
import { ChatMessage } from '../types';

const AIAdvisor = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to the Strategic Consultation Engine. I am your specialized consultant for outside-the-box real estate solutions. Describe your situation\u2014equity concerns, legal complexities, or property distress\u2014and I will architect an ethical path forward." }
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
        <span className="text-emerald-800 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Confidential Analysis</span>
        <h2 className="text-6xl font-medium text-stone-900 mb-6 tracking-tight">Proprietary Strategy Engine</h2>
        <p className="text-stone-500 text-2xl font-light max-w-2xl mx-auto leading-relaxed">Sophisticated modeling for homeowners facing non-traditional challenges.</p>
      </motion.div>

      <div className="relative">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full -z-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[4rem] overflow-hidden flex flex-col h-[750px] soft-shadow border border-white/60 relative z-10"
        >
          <div className="px-10 py-8 border-b border-stone-100/50 flex items-center justify-between bg-white/40 backdrop-blur-md">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-stone-900 flex items-center justify-center text-emerald-100 shadow-2xl transition-transform hover:rotate-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-lg tracking-tight">OTB Consultation Core</h4>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-700 font-bold">Encrypted Solution Mapping</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex space-x-2">
              <div className="px-4 py-2 bg-white/50 rounded-full border border-stone-100 text-[10px] font-bold uppercase tracking-widest text-stone-400">V.4.2</div>
              <div className="px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 text-[10px] font-bold uppercase tracking-widest text-emerald-700">Priority Link</div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-12 space-y-12 custom-scrollbar bg-stone-50/20">
            <AnimatePresence initial={false}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[75%] p-8 rounded-[3rem] shadow-sm transition-all relative ${
                    msg.role === 'user'
                      ? 'bg-stone-900 text-white rounded-br-none shadow-2xl'
                      : 'bg-white text-stone-800 rounded-bl-none border border-stone-100 shadow-md'
                  }`}>
                    <p className="text-lg leading-relaxed whitespace-pre-wrap font-light">
                      {msg.text}
                    </p>
                    <div className={`absolute bottom-2 ${msg.role === 'user' ? 'right-6' : 'left-6'} opacity-20 text-[9px] font-bold uppercase tracking-widest`}>
                      {msg.role === 'user' ? 'Verification Pending' : 'Strategic Insight'}
                    </div>
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
                <div className="bg-emerald-50 px-10 py-6 rounded-full flex items-center space-x-3 shadow-sm border border-emerald-100">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" />
                  <span className="text-xs text-emerald-800 font-bold uppercase tracking-widest ml-4">Analyzing Data Points...</span>
                </div>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-10 bg-white border-t border-stone-100">
            <div className="relative flex items-center max-w-5xl mx-auto">
              <input
                aria-label="Ask the Strategic Engine"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="E.g., I'm facing an auction date next month with $200k in equity..."
                className="w-full py-6 px-12 pr-24 rounded-full bg-stone-50 border border-stone-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-900/30 transition-all text-xl font-light shadow-inner placeholder:text-stone-300"
              />
              <button
                aria-label="Send query"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-3 p-5 bg-stone-900 text-white rounded-full hover:bg-emerald-900 disabled:opacity-30 transition-all shadow-xl active:scale-90"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-stone-400 mt-6 text-center uppercase tracking-[0.4em] font-bold">Encrypted Consultation Architecture &bull; No Data Sales Policy</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAdvisor;
