import { About, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sandeep",
  lastName: "Kumar Sidar",
  name: "Sandeep Kumar Sidar",
  role: "Software Engineering Student & Full-Stack Developer",
  avatar: "/images/sandeep.jpg",
  email: "sandeepsidar1210@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
  locale: "en",
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sandeepsidar1210-rgb",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sandeep-kumar-sidar-402046370",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/sandeep.jpg",
  label: "Home",
  title: `${person.name} – Full-Stack Software Developer`,
  description:
    "Portfolio of Sandeep Kumar Sidar, a software engineering student building high-throughput APIs, responsive products, and intelligent applications.",
  headline: <>Engineering Scalable Web Systems & Intelligent Applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">About Me</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Full-stack developer & student
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      I'm Sandeep Kumar Sidar, a Computer Science Engineering student specializing in full-stack web
      development, backend architecture, and system design.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} is a full-stack software developer and Computer Science Engineering student at IIIT Naya Raipur.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a B.Tech Computer Science & Engineering student at IIIT Naya Raipur with practical
        experience in full-stack web development, backend architecture, and open-source
        contributions. I build high-throughput REST APIs, responsive UIs, and data-processing
        workflows across relational and NoSQL systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Leadership & Experience",
    experiences: [
      {
        company: "SwasthOS",
        timeframe: "Jan 2026 – Apr 2026",
        role: "Co-Founder & Full-Stack Developer",
        achievements: [
          <>Engineered real-time emergency alert workflows and communication pipelines using Twilio APIs and asynchronous webhooks.</>,
          <>Enforced role-based data security requirements, authorization filters, and CORS configuration rules.</>,
        ],
        images: [],
      },
      {
        company: "EduLinkUp",
        timeframe: "Jun 2026 – Present",
        role: "Full-Stack Developer Intern",
        achievements: [
          <>Developed core full-stack features with React and Node.js/Express, boosting user engagement and endpoint performance.</>,
          <>Integrated secure RESTful endpoints with input validation layers and optimized database queries for production deployment.</>,
        ],
        images: [],
      },
      {
        company: "GirlScript & EduLinkUp Summer of Code",
        timeframe: "May 2026 – Jul 2026",
        role: "Open-Source Contributor",
        achievements: [
          <>Resolved critical backend endpoint logic, schema validation, and UI bugs across multiple open-source repositories.</>,
          <>Implemented real-time progress streaming and UI pagination to enhance responsiveness across client platforms.</>,
        ],
        images: [],
      },
      {
        company: "WebDev Club, IIIT Naya Raipur",
        timeframe: "Sep 2026 – Present",
        role: "Core Team Member",
        achievements: [
          <>Lead full-stack web development for Hackasol, IIIT NR's flagship tech event, architecting registration workflows, responsive layouts, and schedule modules.</>,
          <>Conduct technical workshops, mentorship sessions, and code reviews for institute-wide software initiatives.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "SPM International Institute of Information Technology, Naya Raipur",
        description: <>B.Tech in Computer Science & Engineering, Aug 2025 – Present. Relevant coursework includes Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: <>C, C++, Python, and modern JavaScript (ES6+).</>,
        tags: [
          { name: "C" },
          { name: "C++" },
          { name: "Python" },
          { name: "JavaScript" },
        ],
        images: [],
      },
      {
        title: "Full-Stack Engineering",
        description: <>React.js, Node.js, Express.js, Django, Tailwind CSS, REST APIs, and responsive UI development.</>,
        tags: [
          { name: "React" },
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "Django" },
          { name: "Tailwind CSS" },
        ],
        images: [],
      },
      {
        title: "Data & AI",
        description: <>MongoDB, MySQL, SQLite, Supabase, Redis, NumPy, Pandas, Matplotlib, and Gemini API integrations.</>,
        tags: [
          { name: "MongoDB" },
          { name: "MySQL" },
          { name: "Redis" },
          { name: "Gemini API" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack and AI projects by ${person.name}`,
};

export { person, social, home, about, work };
