interface SectionTransitionProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

const SectionTransition = ({
  from = '#faf7f2',
  to = '#f0ebe2',
  flip = false,
}: SectionTransitionProps) => (
  <div className={`relative w-full h-24 -my-1 ${flip ? 'rotate-180' : ''}`} aria-hidden>
    <svg
      viewBox="0 0 1440 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0 96L60 85.3C120 74.7 240 53.3 360 48C480 42.7 600 53.3 720 58.7C840 64 960 64 1080 56C1200 48 1320 32 1380 24L1440 16V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z"
        fill={from}
      />
      <path
        d="M0 96L60 85.3C120 74.7 240 53.3 360 48C480 42.7 600 53.3 720 58.7C840 64 960 64 1080 56C1200 48 1320 32 1380 24L1440 16V96H1380C1320 96 1200 96 1080 96C960 96 840 96 720 96C600 96 480 96 360 96C240 96 120 96 60 96H0V96Z"
        fill={to}
      />
    </svg>
  </div>
);

export default SectionTransition;
