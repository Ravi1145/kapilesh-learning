/**
 * Kapilesh Learning Solutions — single source of truth for all site content.
 * Factual claims are preserved from the original Kapilesh Learning Solutions website.
 * Edit copy here; components read from this file.
 */

export const brand = {
  name: "Kapilesh Learning Solutions",
  tagline: "Leadership. Capability. Transformation.",
  positioning:
    "A Learning & Development (L&D) consultant and organisational capability consulting practice based in India, offering corporate training solutions, learning strategy, learning architecture, leadership development consulting and capability building for enterprises.",
  coreIdea: "Building people who can build better organisations.",
  siteUrl: "https://www.kapileshlearning.com",
};

export const contact = {
  phoneDisplay: "+91 93500 40594",
  phoneRaw: "919350040594",
  email: "kapilesh@kapileshlearning.com",
  linkedin: "https://www.linkedin.com/in/kapileshthemotivator",
  instagram: "https://www.instagram.com/kapsicome/",
  instagramHandle: "@kapsicome",
  youtube: "https://tr.ee/o0vSm5qodo",
  city: "Noida",
  region: "Uttar Pradesh",
  country: "IN",
  locationDisplay: "Noida, Uttar Pradesh, India",
  whatsappMessage:
    "Hello Kapilesh, I would like to discuss a capability-building engagement.",
};

export const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

export const stats = [
  { value: 34, suffix: "+", label: "Years of Experience" },
  { value: 20000, suffix: "+", label: "Professionals Trained & Developed" },
  { value: null, display: "Multi-Industry", label: "Experience" },
  { value: null, display: "Enterprise", label: "Capability Building" },
];

export const philosophy = {
  headline: ["Training is an event.", "Capability is a journey."],
  quote:
    "Learning is valuable only when it changes the way people think, decide and act.",
  quoteAttribution: "Kapilesh",
  body: [
    "Kapilesh Learning Solutions brings together two worlds that are often disconnected: commercial reality and people development. The practice is built on a career spanning Learning & Development, leadership development, sales leadership, talent management and organisational transformation.",
    "Before moving into senior L&D leadership, Kapilesh built his career in sales management with organisations including GlaxoSmithKline, Wockhardt and Dumex India. That commercial grounding continues to shape the approach: learning must be relevant to the business, practical for the learner and visible in performance.",
    "The focus is simple — move beyond training events and build capability that improves leadership, behaviour, performance and business outcomes.",
  ],
};

export const services = [
  {
    number: "01",
    slug: "lnd-strategy",
    title: "L&D Strategy & Governance",
    summary:
      "Building L&D functions, learning architecture, governance systems, training calendars and enterprise-wide capability strategies.",
    challenge:
      "Learning activity without learning architecture. Many organisations run training programmes but lack the strategy, governance and systems that connect learning to business priorities.",
    approach:
      "Start with the business context, not the course catalogue. Understand where the organisation is going, where capability gaps constrain it, and design the learning function around that reality.",
    whatWeDo: [
      "L&D function design and build-out",
      "Learning architecture and governance systems",
      "Enterprise capability strategy",
      "Training calendars and learning operations",
      "Learning measurement frameworks",
    ],
    whoItServes:
      "Organisations building an L&D function from the ground up, or maturing an existing function into a strategic capability partner.",
    expectedChange:
      "A learning function that operates as a system — governed, planned and visibly connected to business priorities rather than a series of disconnected events.",
  },
  {
    number: "02",
    slug: "leadership-development",
    title: "Leadership Development",
    summary:
      "Leadership pipelines, leadership academies, succession development, coaching and capability journeys for current and future leaders.",
    challenge:
      "Leadership gaps rarely announce themselves until a role is vacant or a team is struggling. Building leaders takes longer than recruiting them — and produces stronger organisations.",
    approach:
      "Treat leadership development as a journey, not a workshop. Combine structured learning, coaching, real work application and honest feedback over time.",
    whatWeDo: [
      "Leadership pipeline and academy design",
      "Succession development programmes",
      "Leadership capability journeys",
      "Executive coaching and mentoring",
      "First-time manager development",
    ],
    whoItServes:
      "Organisations investing in current and future leaders — from frontline managers stepping up, to senior leaders preparing for enterprise roles.",
    expectedChange:
      "Leaders who move from managing activity to building people, judgement and ownership — and a visible internal pipeline for critical roles.",
  },
  {
    number: "03",
    slug: "organisational-transformation",
    title: "Organisational Transformation",
    summary:
      "Mission, vision and values workshops, induction, culture building, change initiatives and engagement interventions.",
    challenge:
      "Strategy changes faster than culture. Transformation initiatives stall when the people side — beliefs, behaviours, engagement — is treated as an afterthought.",
    approach:
      "Work at the level of thinking and behaviour, not posters and slogans. Align leadership, translate values into observable behaviours, and build the change into everyday systems.",
    whatWeDo: [
      "Mission, vision and values workshops",
      "Culture building and engagement interventions",
      "Change management support",
      "Induction and onboarding design",
      "Team effectiveness interventions",
    ],
    whoItServes:
      "Organisations navigating growth, restructuring, cultural renewal or any change where people need to think and act differently.",
    expectedChange:
      "A culture where stated values show up in real decisions — and change initiatives that hold because people understand and own them.",
  },
  {
    number: "04",
    slug: "sales-excellence",
    title: "Sales Excellence",
    summary:
      "Sales leadership, consultative selling, strategic account management, negotiation and frontline capability development.",
    challenge:
      "Sales capability is often built by exception — top performers succeed on instinct while the rest of the team lacks a repeatable approach.",
    approach:
      "Grounded in real commercial experience: over a decade in sales leadership before L&D. Build selling capability the way the field actually works — practical, situational and performance-visible.",
    whatWeDo: [
      "Sales leadership development",
      "Consultative and solution selling programmes",
      "Strategic account management",
      "Negotiation capability",
      "Frontline sales capability building",
    ],
    whoItServes:
      "Sales organisations that want consistent capability across the team, not just isolated stars — from frontline sellers to sales leaders.",
    expectedChange:
      "A sales organisation with a shared language, a repeatable approach and leaders who coach performance rather than just review numbers.",
  },
  {
    number: "05",
    slug: "trainer-development",
    title: "Trainer & Facilitator Development",
    summary:
      "Train-the-Trainer, TNA, trainer certification, facilitation capability, trainer audits and quality assurance.",
    challenge:
      "The quality of an organisation's learning is capped by the quality of its trainers. Internal facilitators are often subject-matter experts who were never developed as educators.",
    approach:
      "Develop trainers as professionals — design skill, facilitation craft, learner psychology and quality standards — then audit and certify to sustain the standard.",
    whatWeDo: [
      "Train-the-Trainer programmes",
      "Training needs analysis (TNA) capability",
      "Trainer certification pathways",
      "Facilitation skill development",
      "Trainer audits and quality assurance",
    ],
    whoItServes:
      "Organisations with internal training teams, academies or subject-matter experts who deliver learning as part of their role.",
    expectedChange:
      "An internal training capability that meets a consistent professional standard — and learning experiences that participants take seriously.",
  },
  {
    number: "06",
    slug: "ai-enabled-learning",
    title: "AI-Enabled Learning",
    summary:
      "Practical AI tools, Prompt Engineering and emerging learning technologies integrated into everyday professional work.",
    challenge:
      "AI is changing how professionals think and work — but most organisations oscillate between hype and avoidance instead of building practical, everyday capability.",
    approach:
      "Demystify AI through hands-on, work-relevant practice. Focus on the tools and prompting skills professionals can apply immediately, not abstract theory.",
    whatWeDo: [
      "Practical AI tools for professionals",
      "Prompt Engineering programmes",
      "AI-enabled learning design",
      "Emerging learning technology adoption",
      "AI readiness for L&D teams",
    ],
    whoItServes:
      "Professionals and teams who want to use AI as part of everyday thinking and work — and L&D functions modernising how learning is built and delivered.",
    expectedChange:
      "Professionals who use AI tools confidently and critically as part of their daily work, rather than watching the change from the sidelines.",
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business context, the capability gap and the change that needs to happen — before designing anything.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architect the intervention around business reality: the right mix of learning, practice, coaching and reinforcement.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build and deliver experiences that challenge thinking and change behaviour — not just transfer information.",
  },
  {
    number: "04",
    title: "Transform",
    description:
      "Embed the change into systems, leadership and everyday work so capability compounds after the engagement ends.",
  },
];

export const programs = [
  {
    title: "Leadership That Creates Capability",
    description:
      "Moving leaders from managing activity to building people, judgement and ownership.",
  },
  {
    title: "Communication: The New Superpower",
    description:
      "Understanding the gap between what we say and what people actually understand.",
  },
  {
    title: "Managing Organisational Conflict",
    description:
      "Turning disagreement into productive dialogue, better decisions and healthier relationships.",
  },
  {
    title: "Emotional Intelligence at Work",
    description:
      "Building self-awareness, better relationships and more effective leadership behaviour.",
  },
  {
    title: "Fail Fast. Learn Faster.",
    description:
      "Creating a healthier relationship with experimentation, mistakes and intelligent learning.",
  },
  {
    title: "AI & Prompt Engineering for Professionals",
    description:
      "Helping professionals use emerging AI tools as part of everyday thinking and work.",
  },
];

export const industries = [
  "FMCG",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Banking",
  "Telecom",
  "Power",
  "Government",
  "Education",
  "Automobile",
];

export const careerHistory = [
  {
    organisation: "RSPL Group",
    role: "AVP & Head, Learning & Development",
    period: "October 2012 – June 2026",
    description:
      "Established the Training & Development function from the ground up; led enterprise-wide L&D across FMCG, personal care, dairy, footwear, healthcare, international operations, beauty services and manufacturing. Led and developed an L&D team of approximately 50.",
  },
  {
    organisation: "HeroMindmine Institute / Hero Group",
    role: "Lead Training Manager",
    period: "April 2008 – September 2012",
    description:
      "Promoted from Senior Trainer to Lead Training Manager; led training delivery, trainer development, learning quality and capability-building initiatives.",
  },
  {
    organisation: "Dumex India / Wockhardt",
    role: "Business Manager",
    period: "November 2004 – March 2008",
    description:
      "Progressed from Area Manager to Business Manager, managed multi-state operations, launched brands and developed sales teams.",
  },
  {
    organisation: "GlaxoSmithKline",
    role: "Area Business Manager",
    period: "August 1993 – October 2004",
    description:
      "Progressed from frontline executive to Area Business Manager, managing sales operations, institutional business and team performance.",
  },
];

export const expertise = [
  "Learning Strategy & Governance",
  "Leadership Development & Succession Planning",
  "Capability Building & Competency Frameworks",
  "Executive Facilitation & Behavioural Learning",
  "Organisational Transformation & Change Management",
  "Coaching, Mentoring & Facilitation",
  "Sales Leadership & Selling Excellence",
  "Content Design & Learning Architecture",
  "Emotional Intelligence & Team Management",
  "AI Tools, Prompt Engineering & Learning Technology",
];

export const organisations = [
  "Maruti Suzuki",
  "Hero Honda",
  "Abbott",
  "Ranbaxy",
  "LG",
  "BPCL",
  "Titan",
  "HDFC Bank",
  "Tata Power",
  "PowerGrid",
  "Ericsson",
  "LIC",
  "Godrej",
  "Voltas",
];

export const moreOrganisations =
  "The full career profile also includes work with organisations such as NHPC, Network18, Jaquar, Border Security Force, Dr. Lal PathLabs, Dainik Bhaskar and Reliance Infrastructure.";

export const credentials = [
  "IIM Ahmedabad — 5 Management Development Programs",
  "Emotional Intelligence & Personal Profile Analysis — Thomas Assessments",
  "Learning & Development Professional Program — KPMG",
  "Lean Six Sigma Yellow Belt",
  "NIS Train-the-Trainer Certification",
  "Certified PoSH Trainer — TÜV SÜD",
];

export const serviceKeywords = [
  "Learning and Development Consultant",
  "L&D Consultant",
  "L&D Consultant India",
  "Corporate Learning Solutions",
  "Corporate Learning and Development",
  "Learning Solutions for Corporates",
  "Corporate Training Solutions",
  "Corporate Training Consultant India",
  "L&D Consulting Services",
  "Learning Strategy Consultant",
  "Learning Architecture Consultant",
  "Leadership Development Consultant",
  "Capability Building Consultant",
  "Leadership Mentor India",
  "Organisational Capability Diagnostics",
  "L&D Consultant Noida",
  "Corporate Training Consultant Noida",
  "Leadership Development Consultant Noida",
  "Leadership Mentor Noida",
];

export const faqs = [
  {
    question: "What does Kapilesh Learning Solutions do?",
    answer:
      "Kapilesh Learning Solutions is a premium leadership, capability and organisational transformation consulting practice founded by Kapilesh, who brings 34+ years of experience across sales leadership, Learning & Development and organisational capability building. The practice has trained and developed more than 20,000 professionals across industries — moving beyond training events to build capability that improves leadership, behaviour, performance and business outcomes.",
  },
  {
    question: "What is the difference between training and capability building?",
    answer:
      "Training is an event; capability is a journey. A single workshop can transfer information, but capability building combines structured learning, coaching, real work application and honest feedback over time — so that learning changes the way people actually think, decide and act, not just what they know.",
  },
  {
    question: "What consulting solutions does Kapilesh Learning Solutions offer?",
    answer:
      "Six areas of practice: L&D Strategy & Governance, Leadership Development, Organisational Transformation, Sales Excellence, Trainer & Facilitator Development, and AI-Enabled Learning. Each engagement starts with the business context and the capability gap, not a fixed course catalogue.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "Every engagement follows a four-stage approach: Discover (understand the business context and capability gap), Design (architect the right mix of learning, practice, coaching and reinforcement), Develop (build and deliver experiences that change behaviour) and Transform (embed the change into systems and everyday work so capability compounds after the engagement ends).",
  },
  {
    question: "Which industries has Kapilesh Learning Solutions worked with?",
    answer:
      "Cross-industry experience spanning FMCG, healthcare, manufacturing, retail, banking, telecom, power, government, education and automobile — grounded in a career that moved from frontline sales leadership to enterprise-wide L&D leadership at organisations including GlaxoSmithKline, Wockhardt, Dumex India, Hero Group and RSPL Group.",
  },
  {
    question: "Does Kapilesh Learning Solutions offer coaching and mentoring?",
    answer:
      "Yes — coaching, mentoring and facilitation is a core area of expertise. Within Leadership Development engagements specifically, mentoring is combined with structured learning, real work application and honest feedback over time, so leaders build judgement and ownership rather than just complete a course. As an India-based practice with 34+ years of cross-industry experience, Kapilesh works as a leadership mentor for professionals and organisations across the country.",
  },
  {
    question:
      "Is Kapilesh Learning Solutions a Learning and Development (L&D) consultant?",
    answer:
      "Yes. Kapilesh Learning Solutions is a Learning & Development (L&D) consulting practice offering corporate training solutions, learning strategy, learning architecture, leadership development consulting and capability building for enterprises — built on a career spanning L&D leadership, sales leadership and organisational transformation.",
  },
  {
    question:
      "Does Kapilesh Learning Solutions carry out organisational capability diagnostics, such as SWOT analysis?",
    answer:
      "Every engagement begins with the Discover phase — understanding the business context, the capability gap and the change that needs to happen. That diagnostic work draws on standard organisational analysis frameworks, including SWOT-style thinking (strengths, weaknesses, opportunities and threats), to make sure the intervention that follows is grounded in business reality rather than a generic course catalogue.",
  },
  {
    question: "Where is Kapilesh Learning Solutions based?",
    answer:
      "Kapilesh Learning Solutions is based in Noida, Uttar Pradesh, India, and works with organisations across India — with a career built on enterprise-wide engagements at companies including GlaxoSmithKline, Wockhardt, Hero Group and RSPL Group.",
  },
  {
    question: "How can I start a conversation with Kapilesh Learning Solutions?",
    answer:
      "Use the enquiry form on the Contact page, or reach out directly by phone, email, WhatsApp or LinkedIn. Every conversation starts with the business context and the capability challenge, not a sales pitch.",
  },
];

export const areasOfInterest = [
  "L&D Strategy & Governance",
  "Leadership Development",
  "Organisational Transformation",
  "Sales Excellence",
  "Trainer & Facilitator Development",
  "AI-Enabled Learning",
  "Signature Programs",
  "Other",
];
