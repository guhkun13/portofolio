import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Teguh Atma Wijaya",
  initials: "TA",
  location: "Indonesia (UTC+7), open to remote",
  about: "Backend Engineer (Go)",
  summary:
    "Backend engineer with 7+ years of experience, the last 4 years in Go. I have worked remotely for 4+ years. I build microservices with gRPC, Kafka, PostgreSQL and Redis, and I care about correct, safe and well-monitored systems. Now at a payment gateway, where I build bank integrations, fix bugs that affect money, and handle releases. I enjoy hands-on coding, code reviews, and helping teammates.",
  siteUrl: "https://guhkun.netlify.app",
  personalWebsiteUrl: "https://guhkun.netlify.app",
  resumePdfUrl: "/resume.pdf",
  contact: {
    email: "guhkun13@gmail.com",
    tel: "+62 813 8866 9930",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/guhkun13",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guhkun13",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "University of Indonesia",
      degree: "Bachelor of Computer Science",
    },
  ],
  languages: ["English (fluent)", "Bahasa Indonesia (native)"],
  work: [
    {
      company: "Durianpay",
      badges: [],
      title: "Software Engineer",
      start: "Sep 2025",
      end: null,
      description: "Payment gateway · Remote",
      highlights: [
        "Built bank payment integrations in Go across 15+ gRPC microservices: virtual accounts for two banks, a connection to a bank clearing system, real-time bank transfers (BI-FAST), and safety checks before moving a merchant's QR payments to a new bank.",
        "Fixed a bug that could pay the same refund twice, with a code fix, a PostgreSQL index and a data cleanup. Built a scanner that finds stuck refunds so they can be retried, with a switch to turn it off quickly.",
        "Found and fixed security bugs where one merchant could reach another merchant's data (BOLA/IDOR), plus an SQL injection and an open redirect. Closed 79 security tickets by upgrading dependencies in 11 PRs.",
        "Moved payouts from an old provider to a new one, with a new Kafka consumer. Added daily limits per payment method for merchants. Built a gRPC client, cached in Redis, for reading merchant data.",
        "Added Prometheus metrics, Grafana alerts and Jaeger tracing to payment flows, so the team sees failures before merchants report them.",
        "Wrote Go unit tests for my changes, wrote design docs for new bank products, reviewed teammates' pull requests, and handled monthly and hotfix releases across 6+ services on Kubernetes.",
      ],
    },
    {
      company: "AssistX Enterprise",
      badges: [],
      title: "Backend Co-Engineering Manager",
      start: "Dec 2024",
      end: "Aug 2025",
      description: "Jakarta, Indonesia",
      highlights: [
        "Worked with a remote AI team in France, India and Pakistan. Replaced slow synchronous HTTP calls with a queue to stop timeout errors, and moved from OCR to Vision-Language Models, cutting processing time from 3 minutes to 3 seconds.",
        "Designed 8+ services for an on-premises document processing system with strict client security rules (API gateway, batch processors, compression engine, legacy integration). Architecture walkthroughs and demos for the client helped win a multi-year contract.",
        "Wrote the company's Go coding standards and used them in code reviews, so everyone wrote and reviewed code the same way.",
        "Trained 5+ engineers in Docker, GitLab CI/CD, DDD and SOLID, and helped teams deploy on their own.",
      ],
    },
    {
      company: "AssistX Enterprise",
      badges: [],
      title: "Backend Engineer",
      start: "Dec 2023",
      end: "Dec 2024",
      description: "Jakarta, Indonesia",
      highlights: [
        "Split a large file-compression app (Laravel/Python) into small stateless workers on NSQ, which removed deadlocks.",
        "Replaced manual deployments with Docker images, cutting setup time from 4 hours to 20 minutes. Built a Samba integration so Windows users could process files on Linux servers.",
      ],
    },
    {
      company: "Evermos",
      badges: [],
      title: "Backend Engineer",
      start: "Aug 2022",
      end: "Aug 2023",
      description: "Social-commerce platform · Remote",
      highlights: [
        "Built and maintained features in Go services using clean architecture and DDD, from planning with product managers to release.",
        "Built internal admin tools with Appsmith (low-code), so they could be made without writing a full app from scratch.",
      ],
    },
    {
      company: "Makara Mas",
      badges: [],
      title: "Software Engineer",
      start: "Aug 2019",
      end: "Aug 2022",
      description: "Remote (2020 – 2022) · Depok (2019 – 2020)",
      highlights: [
        "Built and maintained the MAJA billing and payment system in PHP. Added BNI QRIS and BCA virtual account payments.",
        "Built an app to manage billers and transaction logs, which replaced manual work.",
        "In my first year (Aug 2019 – May 2020) I was also IT team lead for the development team, and helped the team start using Scrum.",
      ],
    },
    {
      company: "Pusilkom UI",
      badges: [],
      title: "Software Engineer",
      start: "Jun 2018",
      end: "Jul 2019",
      description: "Depok, Indonesia",
      highlights: [
        "Rebuilt smart parking and door access systems to be event-driven, using ZeroMQ.",
        "Built Presentronik, a smart-card class attendance system linked to the university's academic system, and rolled it out across faculties.",
      ],
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Go", "Python", "PHP", "JavaScript/TypeScript", "SQL"],
    },
    {
      label: "Backend",
      items: [
        "Microservices",
        "gRPC",
        "REST",
        "event-driven design",
        "Clean Architecture",
        "DDD",
        "unit testing (go test)",
      ],
    },
    {
      label: "Data & messaging",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Kafka",
        "NSQ",
        "RabbitMQ",
        "AWS SQS/SNS",
      ],
    },
    {
      label: "Infra & monitoring",
      items: [
        "Docker",
        "Kubernetes",
        "CI/CD (GitHub Actions, GitLab CI)",
        "AWS",
        "GCP",
        "Prometheus",
        "Grafana",
        "Jaeger",
        "OpenTelemetry",
        "Sentry",
        "feature flags (Unleash)",
      ],
    },
    {
      label: "Domain",
      items: [
        "payments (virtual accounts, QRIS, refunds, bank transfers)",
        "API security (BOLA/IDOR, SQL injection)",
      ],
    },
  ],
  projects: [
    {
      title: "Andieni",
      period: "2021 – 2024",
      techStack: [],
      description:
        "e-signature and mail system for the University of Indonesia Archives Office, connected to the national e-signature agency (BSrE).",
    },
    {
      title: "Government e-office systems",
      period: "2019 – 2021",
      techStack: [],
      description:
        "digital mail systems for the Indonesia Defense University and the National Agency of Drug and Food Control (BPOM).",
    },
  ],
};

export const SECTION_TITLES = {
  summary: "Summary",
  skills: "Technical Skills",
  work: "Experience",
  projects: "Selected Projects (freelance)",
  education: "Education & Languages",
} satisfies Partial<Record<keyof ResumeData, string>>;
