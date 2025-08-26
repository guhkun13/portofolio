import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Backend Co-Engineering Manager",
    company: "AssistX Enterprise",
    location: "Jakarta, Indonesia (On-site)",
    period: "Dec 2024 - Present",
    description: "Leading technical teams and strategic client partnerships",
    achievements: [
      "Shared responsibility for 10+ persons backend team and trained 5+ engineers in DevOps, DDD, and SOLID principles",
      "Authored company-wide coding standards (Go), reducing PR review time by 40% and onboarding time by 25%",
      "Designed multi-database framework (PostgreSQL + Sqlite + MongoDB) for high-availability and scalability",
      "Built trust through detailed architecture walkthroughs, securing multi-year contracts",
    ],
    technologies: ["Go", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "DevOps", "AI/ML", "Mentoring", "Team Leadership", "Project Management"],
  },
  {
    title: "Backend Engineer",
    company: "AssistX Enterprise",
    location: "Jakarta, Indonesia (On-site)",
    period: "Dec 2023 - Dec 2024",
    description: "Transforming monolith into distributed system",
    achievements: [
      "Broke apart monolithic file-compression system into distributed architecture using message queues (NSQ)",
      "Replaced error-prone manual deployments with Docker images, cutting setup time from 4 hours to 20 minutes",
      "Engineered Samba protocol integration for Windows-Linux file processing compatibility",
      "Migrated from OCR to Vision-Language Models (VLMs), improving processing time from 3 minutes to 3 seconds",
    ],
    technologies: ["Go", "Python", "Docker", "NSQ", "Linux"],
  },
  {
    title: "Backend Engineer",
    company: "Evermos",
    location: "Lombok, West Nusa Tenggara, Indonesia (Remote)",
    period: "Aug 2022 - Aug 2023",
    description: "Full-stack development with clean architecture principles",
    achievements: [
      "Led maintenance and development of several new features implementing clean code principles and DDD",
      "Collaborated with product managers to define system requirements and estimate development timelines",
      "Created internal applications using no-code platforms (Appsmith) cutting development time by 50%",
    ],
    technologies: ["Go", "Clean Architecture", "DDD", "Appsmith"],
  },
  {
    title: "Software Engineer & IT Team Lead",
    company: "Makara Mas",
    location: "Lombok, West Nusa Tenggara, Indonesia (Remote)",
    period: "June 2020 - Aug 2022",
    description: "Leading development teams and building payment systems",
    achievements: [
      "Developed and maintained comprehensive billing and payment system",
      "Created roadmap for application development and implemented SCRUM methodology",
      "Reduced manual processing time by 50% through automation and improved productivity",
    ],
    technologies: ["PHP", "Payment Systems", "SCRUM", "Team Leadership"],
  },
  {
    title: "Software Engineer",
    company: "Pusilkom UI",
    location: "Depok, West Java, Indonesia (On-site)",
    period: "June 2018 - July 2019",
    description: "IoT and smart systems development",
    achievements: [
      "Maintained and refactored smart parking and door access systems using event-driven architecture",
      "Developed Presentronik: smart class attendance system integrated with University of Indonesia's SIAK-NG",
      "Involved in user training, support, and deployment across university faculties",
    ],
    technologies: ["Python", "IoT", "Event-Driven Architecture", "ZeroMQ", "Smart Systems"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-accent">{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
