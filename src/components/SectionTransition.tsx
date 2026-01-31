import { motion } from 'framer-motion';

interface SectionTransitionProps {
  from?: string;
  to?: string;
  flip?: boolean;
  accent?: 'blue' | 'coral' | 'green';
}

const accentColors = {
  blue: '#2563a8',
  coral: '#e07455',
  green: '#2d7a4f',
};

const SectionTransition = ({
  from = '#faf7f2',
  to = '#f0ebe2',
  flip = false,
  accent = 'blue',
}: SectionTransitionProps) => (
  <div className={`relative w-full h-32 -my-1 ${flip ? 'rotate-180' : ''}`} aria-hidden>
    <svg
      viewBox="0 0 1440 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0 128L48 117.3C96 106.7 192 85.3 288 74.7C384 64 480 64 576 74.7C672 85.3 768 106.7 864 101.3C960 96 1056 64 1152 48C1248 32 1344 32 1392 32L1440 32V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V128Z"
        fill={from}
      />
      <path
        d="M0 128L48 117.3C96 106.7 192 85.3 288 74.7C384 64 480 64 576 74.7C672 85.3 768 106.7 864 101.3C960 96 1056 64 1152 48C1248 32 1344 32 1392 32L1440 32V128H1392C1344 128 1248 128 1152 128C1056 128 960 128 864 128C768 128 672 128 576 128C480 128 384 128 288 128C192 128 96 128 48 128H0V128Z"
        fill={to}
      />
    </svg>
    {/* Accent gradient line along the wave */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="absolute bottom-0 left-0 right-0 h-[1px]"
      style={{
        background: `linear-gradient(90deg, transparent 10%, ${accentColors[accent]}15 30%, ${accentColors[accent]}25 50%, ${accentColors[accent]}15 70%, transparent 90%)`,
      }}
    />
  </div>
);

export default SectionTransition;
