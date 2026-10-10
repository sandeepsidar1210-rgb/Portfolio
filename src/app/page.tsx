import { Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, home, person } from "@/resources";

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
    <main className="reference-site">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      <section className="reference-hero">
        <div className="reference-hero-copy">
          <p className="reference-kicker">FULL-STACK SOFTWARE DEVELOPER &amp; STUDENT</p>
          <h1>Full-Stack<br /><span>Coder &amp;</span><br />more <FourPointStar className="reference-star" /></h1>
          <a className="reference-button reference-button--blue" href={`mailto:${person.email}`}>Let&apos;s Talk <Arrow /></a>
        </div>
        <div className="reference-hero-art">
          <div className="reference-spray" />
          <HandDrawnLoop />
          <div className="reference-photo-frame">
            <img src="/images/sandeep.jpg" alt="Sandeep Kumar Sidar" />
            <div className="reference-round-badge">BUILD · SHIP · LEARN · BUILD · SHIP · LEARN ·</div>
          </div>
        </div>
      </section>

      <section className="reference-intro" id="about">
        <div>
          <p className="reference-kicker reference-kicker--muted">HI, I&apos;M 👋</p>
          <h2>Sandeep Kumar Sidar</h2>
          <p className="reference-lead">
            I&apos;m a B.Tech CSE student specializing in <strong>full-stack web engineering</strong>,
            backend architecture, and <strong>system design</strong>. Core team member of WebDev Club,
            co-founder of SwasthOS, and participant in Google Solution Challenge 2026 and E-SUMMIT 2026.
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

      <section className="reference-stats" aria-label="Portfolio highlights">
        <div><strong>250+</strong><span>DSA PROBLEMS SOLVED</span></div>
        <div><strong>60%+</strong><span>READ LOAD REDUCTION</span></div>
        <div><strong>3</strong><span>FEATURED BACKEND & AI PROJECTS</span></div>
      </section>

      <section className="reference-services">
        <div className="reference-section-heading">
          <h2>All kind of coding<br />solution.</h2>
          <a className="reference-button reference-button--blue" href="/about">Explore All <Arrow /></a>
        </div>
        <div className="reference-service-grid">
          <article className="reference-service reference-service--blue">
            <span className="reference-service-icon">●</span>
            <h3>Full-Stack Web<br />Development.</h3>
            <p>React products, REST APIs, and production-ready services.</p>
            <ul><li>Express.js</li><li>React</li><li>Node.js</li><li>MongoDB</li></ul>
            <span className="reference-card-arrow"><Arrow /></span>
          </article>
          <article className="reference-service reference-service--pale">
            <span className="reference-service-icon">&lt;/&gt;</span>
            <h3>Backend<br />Architecture.</h3>
            <p>High-throughput services, caching, auth, and data workflows.</p>
            <ul><li>PostgreSQL</li><li>RESTful APIs</li><li>System Design</li></ul>
            <span className="reference-card-arrow"><Arrow /></span>
          </article>
          <article className="reference-service reference-service--gray">
            <span className="reference-service-icon">AI</span>
            <h3>AI Integrations &amp;<br />Tooling.</h3>
            <p>Gemini-powered analysis and practical developer tooling.</p>
            <ul><li>Gemini API</li><li>Prompt Engineering</li><li>Workflow Automation</li></ul>
            <span className="reference-card-arrow"><Arrow /></span>
          </article>
        </div>
      </section>

      <section className="reference-projects" id="work">
        <div className="reference-section-heading reference-section-heading--projects">
          <div><h2>Explore My Top<br />Creations</h2><SquigglyArrow /></div>
          <a className="reference-button reference-button--blue" href="/work">Explore All <Arrow /></a>
        </div>
        {projectRows.map((project, index) => (
          <a className={`reference-project ${index % 2 ? "reference-project--reverse" : ""}`} href={project.href} key={project.title}>
            <div className="reference-project-copy">
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="reference-project-arrow"><Arrow /></span>
            </div>
            <div className={`reference-project-visual ${project.visual}`}>
              {index === 0 && <strong>SWASTHOS</strong>}
              {index === 1 && <div className="portal-mock"><i /><i /><i /><i /></div>}
              {index === 2 && <div className="code-mock"><span>// Running analysis...</span><b>import {"{ Gemini }"} from &apos;ai&apos;;</b><span>Analysis complete: 0 vulnerabilities found.</span></div>}
            </div>
          </a>
        ))}
      </section>

      <section className="reference-contact" id="contact">
        <div className="reference-contact-blue"><h2>Anything in Mind?<br />Let&apos;s Talk</h2></div>
        <div className="reference-contact-white">
          <div><div className="reference-monogram">S.</div><h3>Today, improve your<br />business with<br />quality.</h3><p>Atal Nagar-Nava Raipur,<br />Chhattisgarh, India.</p></div>
          <div className="reference-contact-links"><span>LET&apos;S CONNECT</span><a href={`mailto:${person.email}`}>{person.email}</a><a href="/about">View my experience <Arrow /></a></div>
        </div>
      </section>
    </main>
  );
}
