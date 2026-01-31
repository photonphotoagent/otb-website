import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMagneticCursor } from '../hooks/useAnimations';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const MagneticButton = ({
  children,
  className = '',
  onClick,
  strength = 0.3,
  disabled = false,
  type = 'button',
}: MagneticButtonProps) => {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagneticCursor(strength);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={className}
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

export default MagneticButton;
