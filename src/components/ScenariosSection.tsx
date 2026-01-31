import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Traditional Sell', equity: 42000, color: '#f5f5f4' },
  { name: 'Predatory Offer', equity: 18000, color: '#fee2e2' },
  { name: 'OTB Solution', equity: 138000, color: '#064e3b' },
];

const ScenariosSection = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2"
        >
          <span className="text-emerald-800 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Comparative Analysis</span>
          <h2 className="text-6xl font-medium text-stone-900 mb-10 leading-[1.1] tracking-tight">The <span className="italic">Real</span> Value <br />of Creative Exit.</h2>
          <p className="text-stone-500 mb-12 text-2xl leading-relaxed font-light">
            When you partner with us, we look for the <span className="text-stone-900 font-medium">hidden upside</span>. Most investors want a discount; we want to build value together.
          </p>

          <div className="space-y-8">
            <motion.div
              whileHover={{ x: 15 }}
              className="group flex items-center p-8 bg-white rounded-[2.5rem] soft-shadow border border-stone-100 transition-all hover:border-emerald-900/20"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mr-8 text-3xl transition-transform group-hover:rotate-12 group-hover:scale-110">{"\uD83D\uDCB5"}</div>
              <div>
                <h4 className="font-bold text-stone-900 text-xl tracking-tight">Equity Sourcing</h4>
                <p className="text-stone-500 text-lg font-light">We fund the gaps between distress and market-ready beauty.</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 15 }}
              className="group flex items-center p-8 bg-white rounded-[2.5rem] soft-shadow border border-stone-100 transition-all hover:border-emerald-900/20"
            >
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mr-8 text-3xl transition-transform group-hover:rotate-12 group-hover:scale-110">{"\uD83D\uDCC8"}</div>
              <div>
                <h4 className="font-bold text-stone-900 text-xl tracking-tight">Institutional Precision</h4>
                <p className="text-stone-500 text-lg font-light">Our projects average 240% more equity return for the owner.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 glass p-16 rounded-[5rem] min-h-[600px] border border-white/60 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-emerald-400/5 blur-[120px] rounded-full -mr-40 -mt-40" />

          <h3 className="text-sm font-black text-stone-800 mb-16 text-center uppercase tracking-[0.5em] relative z-10">Net Homeowner Takeaway</h3>
          <div className="h-[400px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" opacity={0.5} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{fill: '#444', fontSize: 13, fontWeight: 700}}
                  dy={20}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{fill: '#f8fafc', radius: 30}}
                  contentStyle={{
                    borderRadius: '32px',
                    border: 'none',
                    boxShadow: '0 40px 60px -15px rgba(0,0,0,0.15)',
                    backgroundColor: '#fff',
                    padding: '24px'
                  }}
                  itemStyle={{ fontWeight: 800, color: '#064e3b', fontSize: '1.2rem' }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Your Net Result']}
                />
                <Bar
                  dataKey="equity"
                  radius={[30, 30, 0, 0]}
                  barSize={100}
                  animationDuration={2000}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      className="transition-all duration-700 hover:brightness-95 hover:scale-[1.02] origin-bottom"
                      style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.05))' }}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-16">
            <div className="flex items-center space-x-4 bg-emerald-950 text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-2xl transition-transform hover:scale-105 active:scale-95 cursor-default">
              <span className="text-xl">{"\u2728"}</span>
              <span>OTB Unlocks 3.2x More Value</span>
            </div>
          </div>
          <p className="text-center text-[9px] text-stone-400 mt-10 uppercase tracking-[0.4em] font-bold">Local Market Data Analysis &bull; Q3 2024</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScenariosSection;
