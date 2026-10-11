"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { person } from "@/resources";
import { ThemeToggle } from "@/components/ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <motion.header
      className="reference-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a className="reference-logo" href="/">Sandeep.</a>
      <nav aria-label="Primary navigation">
        <a className={pathname === "/" ? "active" : ""} href="/">Home</a>
        <a className={pathname.startsWith("/work") ? "active" : ""} href="/work">Work</a>
        <a className={pathname === "/about" ? "active" : ""} href="/about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div className="reference-header-actions">
        <ThemeToggle />
        <a className="reference-talk-link" href={`mailto:${person.email}`}>Let&apos;s Talk <span>↗</span></a>
      </div>
    </motion.header>
  );
};
