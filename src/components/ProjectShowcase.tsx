"use client";

import { motion } from "framer-motion";

type Project = {
  label: string;
  title: string;
  href: string;
  visual: string;
  description: string;
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <section className="reference-projects" id="work">
      <div className="reference-section-heading reference-section-heading--projects">
        <div><h2>Explore My Top<br />Creations</h2></div>
        <a className="reference-button reference-button--blue" href="/work">Explore All <Arrow /></a>
      </div>
      {projects.map((project, index) => (
        <a className={`reference-project ${index % 2 ? "reference-project--reverse" : ""}`} href={project.href} key={project.title}>
          <div className="reference-project-copy">
            <span>{project.label}</span>
            <div className="reference-project-title-mask">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              >
                {project.title}
              </motion.h3>
            </div>
            <p>{project.description}</p>
            <span className="reference-project-arrow">
              <span className="reference-project-arrow__in"><Arrow /></span>
              <span className="reference-project-arrow__out"><Arrow /></span>
            </span>
          </div>
          <div className="reference-project-visual-frame">
            <motion.div
              className={`reference-project-visual ${project.visual}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            >
              {index === 0 && <strong>SWASTHOS</strong>}
              {index === 1 && <div className="portal-mock"><i /><i /><i /><i /></div>}
              {index === 2 && <div className="code-mock"><span>// Running analysis...</span><b>import {"{ Gemini }"} from &apos;ai&apos;;</b><span>Analysis complete: 0 vulnerabilities found.</span></div>}
            </motion.div>
          </div>
        </a>
      ))}
    </section>
  );
}
