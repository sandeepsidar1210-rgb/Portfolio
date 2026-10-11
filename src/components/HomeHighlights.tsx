"use client";

import { motion } from "framer-motion";
import { InteractiveServiceCard } from "@/components/InteractiveServiceCard";

const stats = [
  ["250+", "DSA PROBLEMS SOLVED"],
  ["60%+", "READ LOAD REDUCTION"],
  ["3", "FEATURED BACKEND & AI PROJECTS"],
];

const services = [
  {
    className: "reference-service reference-service--blue hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 ease-out",
    icon: "●",
    title: <>Full-Stack Web<br />Development.</>,
    description: "React products, REST APIs, and production-ready services.",
    items: ["Express.js", "React", "Node.js", "MongoDB"],
  },
  {
    className: "reference-service reference-service--pale hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 ease-out",
    icon: "</>",
    title: <>Backend<br />Architecture.</>,
    description: "High-throughput services, caching, auth, and data workflows.",
    items: ["PostgreSQL", "RESTful APIs", "System Design"],
  },
  {
    className: "reference-service reference-service--gray hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 ease-out",
    icon: "AI",
    title: <>AI Integrations &amp;<br />Tooling.</>,
    description: "Gemini-powered analysis and practical developer tooling.",
    items: ["Gemini API", "Prompt Engineering", "Workflow Automation"],
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export function HomeHighlights() {
  return (
    <>
      <motion.section
        className="reference-stats"
        aria-label="Portfolio highlights"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {stats.map(([value, label]) => (
          <div key={label}>
            <motion.strong
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {value}
            </motion.strong>
            <span>{label}</span>
          </div>
        ))}
      </motion.section>

      <section className="reference-services">
        <div className="reference-section-heading">
          <h2>All kind of coding<br />solution.</h2>
          <a className="reference-button reference-button--blue" href="/about">Explore All <Arrow /></a>
        </div>
        <motion.div
          className="reference-service-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {services.map((service) => (
            <InteractiveServiceCard
              className={service.className}
              key={service.icon}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
              arrow={<Arrow />}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}
