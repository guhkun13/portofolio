import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Teguh Atma Wijaya</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Software Engineer & Technical Leader</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            6+ years of expertise in backend systems, DevOps, and cross-functional team leadership. Passionate about
            clean code, performance optimization, and empowering teams to ship independently.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/guhkun13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/teguh-atma-wijaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:guhkun13@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
