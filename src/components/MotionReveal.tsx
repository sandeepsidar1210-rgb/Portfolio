"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionRevealProps = HTMLMotionProps<"div">;

export function MotionReveal({ children, ...props }: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
