"use client";

import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type InteractiveServiceCardProps = {
  className: string;
  icon: string;
  title: ReactNode;
  description: string;
  items: string[];
  arrow: ReactNode;
  variants?: Variants;
};

export function InteractiveServiceCard({
  className,
  icon,
  title,
  description,
  items,
  arrow,
  variants,
}: InteractiveServiceCardProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 180, damping: 20 });
  const glareX = useSpring(useTransform(mouseX, [0, 1], ["0%", "100%"]), { stiffness: 180, damping: 20 });
  const glareY = useSpring(useTransform(mouseY, [0, 1], ["0%", "100%"]), { stiffness: 180, damping: 20 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width);
    mouseY.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetTilt = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      variants={variants}
    >
      <motion.div
        className="reference-service__glare"
        style={{ left: glareX, top: glareY }}
        aria-hidden="true"
      />
      <span className="reference-service-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
      <span className="reference-card-arrow">{arrow}</span>
    </motion.article>
  );
}
