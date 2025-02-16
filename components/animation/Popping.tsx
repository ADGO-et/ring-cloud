'use client'
import { motion } from "framer-motion";

interface PoppingWrapperProps {
  children: React.ReactNode;
  degree?: number; // degree from 1 to 10
  className?: string;
}

const PoppingWrapper: React.FC<PoppingWrapperProps> = ({ children, degree = 10, className }) => {
  const clampedDegree = Math.min(10, Math.max(1, degree));
  const maxScale = 1 + 0.02 * clampedDegree;

  return (
    <motion.div
      className={className}
      initial={{ scale: 1 }}
      animate={{ scale: [1, maxScale, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut", repeat: Infinity }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default PoppingWrapper;
