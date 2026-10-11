import { Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, home, person } from "@/resources";
import { InteractiveHero } from "@/components/InteractiveHero";
import { MotionReveal } from "@/components/MotionReveal";
import { HomeHighlights } from "@/components/HomeHighlights";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { HomeRippleEffect } from "@/components/HomeRippleEffect";

const Arrow = () => <span aria-hidden="true">↗</span>;

const FourPointStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path d="M50 0C50 40 60 50 100 50C60 50 50 60 50 100C50 60 40 50 0 50C40 50 50 40 50 0Z" />
  </svg>
);

const HandDrawnLoop = () => (
  <svg className="reference-loop" viewBox="0 0 200 100" fill="none" aria-hidden="true">
    <path d="M10 80C-20 20 80-20 90 50C100 120 190 110 180 40C170-30 250 20 190 90" />
  </svg>
);

const SquigglyArrow = () => (
  <svg className="reference-squiggle" viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M10 10Q30 40 50 20T90 70" />
    <polyline points="70,70 90,70 90,50" />
  </svg>
);

const ReadyBadge = () => (
  <div className="ready-badge" aria-hidden="true">
    <span>I&apos;M<br />READY TO TALK</span>
    <Arrow />
  </div>
);

const projectRows = [
  {
    label: "Analytics Platform",
    title: "AI Code & Content Analyzer.",
    href: "/work/ai-code-content-analyzer",
    visual: "analyzer-visual",
    description: "Automated static linting, vulnerability scanning, syntax evaluation, and interactive Chart.js dashboards.",
  },
  {
    label: "Backend Systems",
    title: "Scalable URL Shortener.",
    href: "/work/scalable-url-shortener",
    visual: "swasthos-visual",
    description: "High-throughput Node.js service using Base62 encoding and Redis caching to cut database read loads by 60%+.",
  },
  {
    label: "Media Infrastructure",
    title: "Video Streaming Platform Backend.",
    href: "/work/video-streaming-platform",
    visual: "parivesh-visual",
    description: "RESTful media microservice with chunked streaming, Multer/Cloudinary pipelines, and JWT/Bcrypt security.",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <HomeRippleEffect>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      <InteractiveHero email={person.email} />

      <section className="reference-intro" id="about">
        <div>
          <p className="reference-kicker reference-kicker--muted">HI, I&apos;M 👋</p>
          <h2>Sandeep Kumar Sidar</h2>
          <p className="reference-lead text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Transforming complex problems into scalable web systems. I am a B.Tech CSE student, SwasthOS co-founder, and active open-source contributor with a deep focus on full-stack engineering, backend architecture, and system design.
          </p>
        </div>
        <ReadyBadge />
        <div className="reference-follow">
          <span>FOLLOW ME</span>
          <a href="https://github.com/sandeepsidar1210-rgb" aria-label="GitHub">GH</a>
          <a href="https://www.linkedin.com/in/sandeep-kumar-sidar-402046370" aria-label="LinkedIn">in</a>
          <a href={`mailto:${person.email}`} aria-label="Email">@</a>
        </div>
      </section>

      <HomeHighlights />

      <ProjectShowcase projects={projectRows} />

      <section className="reference-contact" id="contact">
        <div className="reference-contact-blue"><h2>Anything in Mind?<br />Let&apos;s Talk</h2></div>
        <div className="reference-contact-white">
          <div><div className="reference-monogram">S.</div><h3>Let&apos;s build scalable, high-performance systems together.</h3><p>Atal Nagar-Nava Raipur,<br />Chhattisgarh, India.</p></div>
          <div className="reference-contact-links"><span>LET&apos;S CONNECT</span><a href={`mailto:${person.email}`}>{person.email}</a><a href="/about">View my experience <Arrow /></a></div>
        </div>
      </section>
    </HomeRippleEffect>
  );
}
