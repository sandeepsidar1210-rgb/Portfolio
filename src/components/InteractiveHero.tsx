"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type InteractiveHeroProps = {
  email: string;
};

const subtitle = "Engineering Scalable Web Systems & Intelligent Applications";
const scrambleCharacters = "< /> { } [ ] 01";

const Arrow = () => <span aria-hidden="true">↗</span>;

const FourPointStar = () => (
  <svg viewBox="0 0 100 100" className="reference-star" aria-hidden="true">
    <path d="M50 0C50 40 60 50 100 50C60 50 50 60 50 100C50 60 40 50 0 50C40 50 50 40 50 0Z" />
  </svg>
);

const HandDrawnLoop = () => (
  <svg className="reference-loop animate-float" viewBox="0 0 200 100" fill="none" aria-hidden="true">
    <path d="M10 80C-20 20 80-20 90 50C100 120 190 110 180 40C170-30 250 20 190 90" />
  </svg>
);

function ScrambleName() {
  const name = "Sandeep Kumar Sidar";
  const [displayName, setDisplayName] = useState(name);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const scramble = () => {
    let iteration = 0;
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setDisplayName(name
        .split("")
        .map((character, index) => {
          if (character === " ") return " ";
          if (index < iteration) return name[index];
          return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
        })
        .join(""));
      iteration += 1;
      if (iteration > name.length) {
        if (timer.current) clearInterval(timer.current);
        setDisplayName(name);
      }
    }, 45);
  };

  return (
    <span className="interactive-hero__name" onMouseEnter={scramble} aria-label={name}>
      {displayName}
    </span>
  );
}

function TypewriterSubtitle() {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setVisibleText(subtitle.slice(0, index + 1));
      index += 1;
      if (index === subtitle.length) clearInterval(timer);
    }, 38);
    return () => clearInterval(timer);
  }, []);

  return <p className="interactive-hero__subtitle">{visibleText}<span aria-hidden="true">▌</span></p>;
}

export function InteractiveHero({ email }: InteractiveHeroProps) {
  const orbX = useSpring(useMotionValue(0), { stiffness: 50, damping: 25 });
  const orbY = useSpring(useMotionValue(0), { stiffness: 50, damping: 25 });
  const buttonX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const buttonY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  return (
    <motion.section
      className="reference-hero interactive-hero"
      onMouseMove={(event) => {
        orbX.set(event.clientX - window.innerWidth / 2);
        orbY.set(event.clientY - window.innerHeight / 2);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div className="interactive-hero__orb" style={{ x: orbX, y: orbY }} aria-hidden="true" />
      <div className="interactive-hero__float interactive-hero__float--react hidden lg:flex top-12 right-12 z-50">React</div>
      <div className="interactive-hero__float interactive-hero__float--python hidden lg:flex bottom-12 right-1/3 z-50">Python</div>
      <div className="interactive-hero__float interactive-hero__float--express hidden lg:flex bottom-32 left-12 z-50">Express</div>
      <div className="interactive-hero__float interactive-hero__float--node hidden lg:flex top-12 left-12 z-50">Node.js</div>
      <div className="interactive-hero__float interactive-hero__float--mongo hidden lg:flex bottom-24 right-20 z-50">MongoDB</div>
      <div className="interactive-hero__float interactive-hero__float--next hidden lg:flex top-1/2 right-12 -translate-y-1/2 z-50">Next.js</div>
      <div className="reference-hero-copy">
        <p className="reference-kicker">FULL-STACK SOFTWARE DEVELOPER &amp; STUDENT</p>
        <h1><ScrambleName /></h1>
        <TypewriterSubtitle />
        <motion.a
          className="reference-button reference-button--blue interactive-hero__cta"
          href={`mailto:${email}`}
          style={{ x: buttonX, y: buttonY }}
          onMouseMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            buttonX.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.18);
            buttonY.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.18);
          }}
          onMouseLeave={() => {
            buttonX.set(0);
            buttonY.set(0);
          }}
        >
          Let&apos;s Talk <Arrow />
        </motion.a>
      </div>
      <div className="reference-hero-art">
        <div className="reference-spray animate-float animate-float--delayed" />
        <HandDrawnLoop />
        <div className="reference-photo-frame">
          <img src="/images/sandeep.jpg" alt="Sandeep Kumar Sidar" />
          <div className="reference-round-badge">BUILD · SHIP · LEARN · BUILD · SHIP · LEARN ·</div>
        </div>
      </div>
    </motion.section>
  );
}
