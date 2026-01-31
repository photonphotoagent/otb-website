import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import AnimatedText from './AnimatedText';
import SmoothCounter from './SmoothCounter';
import { GlowOrb } from './DecorativeElements';

const data = [
  { name: 'Traditional Sell', equity: 42000, color: '#d4d0cb' },
  { name: 'Predatory Offer', equity: 18000, color: '#e07455' },
  { name: 'OTB Solution', equity: 138000, color: '#1a5632' },
];

const ScenariosSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2"
        >
          <span className="text-brand-blue-warm font-black uppercase tracking-[0.4em] text-[10px] mb-6 block font-label">Comparative Analysis</span>
          <AnimatedText
            text="The Real Value of Creative Exit."
            as="h2"
            className="text-5xl md:text-6xl font-medium text-warm-dark mb-10 leading-[1.1] tracking-tight font-display"
          />
          <p className="text-warm-gray mb-12 text-xl md:text-2xl leading-relaxed font-light">
            When you partner with us, we look for the <span className="text-warm-dark font-medium">hidden upside</span>. Most investors want a discount; we want to build value together.
          </p>

          <div className="space-y-6 md:space-y-8">
            <motion.div
              whileHover={{ x: 15 }}
              className="group flex items-center p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] soft-shadow border border-brand-cream-deep/80 transition-all hover:border-brand-blue-warm/20"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-blue-whisper rounded-2xl flex items-center justify-center mr-6 md:mr-8 transition-transform group-hover:rotate-12 group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-warm-dark text-lg md:text-xl tracking-tight">Equity Sourcing</h4>
                <p className="text-warm-gray text-base md:text-lg font-light">We fund the gaps between distress and market-ready beauty.</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 15 }}
              className="group flex items-center p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] soft-shadow border border-brand-cream-deep/80 transition-all hover:border-brand-coral/20"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-coral-whisper rounded-2xl flex items-center justify-center mr-6 md:mr-8 transition-transform group-hover:rotate-12 group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e07455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" /><polyline points="17,6 23,6 23,12" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-warm-dark text-lg md:text-xl tracking-tight">Institutional Precision</h4>
                <p className="text-warm-gray text-base md:text-lg font-light">Our projects average 240% more equity return for the owner.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 glass p-10 md:p-16 rounded-[3rem] md:rounded-[5rem] min-h-[500px] md:min-h-[600px] border border-brand-blue-soft/20 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,42,74,0.1)]"
        >
          <GlowOrb color="green" size="lg" className="absolute -top-40 -right-40 opacity-30" />

          <h3 className="text-sm font-black text-warm-dark mb-8 text-center uppercase tracking-[0.5em] relative z-10 font-label">Net Homeowner Takeaway</h3>

          {/* Counter row */}
          <div className="flex justify-around mb-8 relative z-10">
            {data.map((item) => (
              <div key={item.name} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-warm-dark font-display">
                  <SmoothCounter value={item.equity} prefix="$" duration={2500} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-warm-light font-label mt-1">{item.name}</div>
              </div>
            ))}
          </div>

          <div className="h-[300px] md:h-[350px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0ebe2" opacity={0.5} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b6560', fontSize: 12, fontWeight: 700 }}
                  dy={20}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: '#faf7f2', radius: 30 }}
                  contentStyle={{
                    borderRadius: '24px',
                    border: 'none',
                    boxShadow: '0 40px 60px -15px rgba(15,42,74,0.15)',
                    backgroundColor: '#fff',
                    padding: '20px',
                  }}
                  itemStyle={{ fontWeight: 800, color: '#0f2a4a', fontSize: '1.1rem' }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Your Net Result']}
                />
                <Bar dataKey="equity" radius={[24, 24, 0, 0]} barSize={80} animationDuration={2000}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{ filter: index === 2 ? 'drop-shadow(0px 8px 20px rgba(26,86,50,0.3))' : 'drop-shadow(0px 4px 10px rgba(0,0,0,0.05))' }}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mt-10 md:mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center space-x-4 text-white px-8 md:px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-2xl cursor-default card-shine overflow-hidden font-label"
              style={{ background: 'linear-gradient(135deg, #0f2a4a, #1a5632)' }}
            >
              <span className="text-xl">{"\u2728"}</span>
              <span>OTB Unlocks 3.2x More Value</span>
            </motion.div>
          </div>
          <p className="text-center text-[9px] text-warm-light mt-8 md:mt-10 uppercase tracking-[0.4em] font-bold font-label">Local Market Data Analysis &bull; Q3 2024</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScenariosSection;
