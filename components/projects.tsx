import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const projects = [
  {
    title: "Andieni - Electronic Service Manuscript Application",
    description: "Electronic signature and mail distribution system for University of Indonesia's Archives office",
    period: "Aug 2023 - Oct 2024",
    role: "Frontend Engineer & Full Stack Developer",
    achievements: [
      "Led significant UI/UX revamp, improving user experience and application functionality",
      "Restructured application architecture, separating frontend and backend components",
      "Developed robust mail disposition system and eSignature solution to reduce paper usage",
      "Successfully integrated with Badan Sertifikasi Elektronik (BSRE) for compliance",
    ],
    technologies: ["React", "Node.js", "Digital Signatures", "Government Compliance"],
  },
  {
    title: "BNI QRIS Integration - MAJA",
    description: "Payment system integration with Bank Negara Indonesia's QRIS payment system",
    period: "Dec 2021 - Jan 2022",
    role: "Backend Developer",
    achievements: [
      "Successfully integrated existing billing system with BNI QRIS payment gateway",
      "Implemented secure payment processing and transaction handling",
      "Ensured compliance with banking regulations and security standards",
    ],
    technologies: ["PHP", "Payment Gateway", "QRIS", "Banking Integration"],
  },
  {
    title: "BCA Virtual Account - MAJA",
    description: "Integration with Bank Central Asia's Virtual Account payment system",
    period: "Sep 2021 - Nov 2021",
    role: "Backend Developer",
    achievements: [
      "Integrated billing system with BCA Virtual Account payment method",
      "Implemented automated payment reconciliation and reporting",
      "Enhanced system reliability and payment processing efficiency",
    ],
    technologies: ["PHP", "Virtual Account", "Payment Processing", "Banking API"],
  },
  {
    title: "TNDE UNHAN - Electronic Mail Disposition",
    description: "Comprehensive electronic mail disposition system for Universitas Pertahanan Indonesia",
    period: "Sep 2020 - Aug 2021",
    role: "Full Stack Developer",
    achievements: [
      "Developed complete electronic document management system",
      "Streamlined administrative processes and reduced paper usage",
      "Implemented role-based access control and document workflow",
    ],
    technologies: ["PHP", "Document Management", "Workflow Automation", "Government Systems"],
  },
  {
    title: "DISPOSUR BPOM - Mail Disposition System",
    description: "Electronic mail disposition system for National Agency of Drug and Food Control",
    period: "Feb 2019 - Apr 2020",
    role: "Full Stack Developer",
    achievements: [
      "Developed comprehensive electronic mail disposition system",
      "Reduced manual processing time and improved productivity",
      "Provided training and documentation for smooth system adoption",
    ],
    technologies: ["PHP", "Government Systems", "Document Processing", "Training & Support"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.period}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
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
