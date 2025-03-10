"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: ReactNode;
  className: string;
  duration?: number;
  delay?: number;
}

const PopUp = ({ className, children, duration, delay }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: isInView ? 1 : 0,
        scale: 0.2,
        width: isInView ? 1 : 0.2,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: 1,
        width: isInView ? 1 : 0.2,
      }}
      transition={{
        duration: duration ? duration : 1,
        delay: delay ? delay : 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PopUp;
