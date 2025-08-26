import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Cloud, Database, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Go", "Python", "PHP", "NodeJs", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "DDD",
      "MVC",
      "REST APIs",
      "SOAP",
      "WebSockets",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "CI/CD", "AWS", "GCP", "Nginx", "Grafana", "Prometheus", "Loki", "Proxmox", "Sentry"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Jira", "Kibana", "Zabbix", "NSQ", "RabbitMQ", "Solace", "AWS SQS/SNS", "ZeroMQ", "MQTT"],
  },
  {
    title: "Leadership & Soft Skills",
    icon: Users,
    skills: [
      "Team Mentoring",
      "Architecture Reviews",
      "Client Management",
      "Agile/Scrum",
      "Technical Documentation",
      "Performance Optimization",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IconComponent className="h-5 w-5 text-accent" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
