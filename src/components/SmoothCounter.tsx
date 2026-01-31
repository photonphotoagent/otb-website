import { useCountUp } from '../hooks/useAnimations';

interface SmoothCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const SmoothCounter = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}: SmoothCounterProps) => {
  const { count, ref } = useCountUp(value, duration);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default SmoothCounter;
