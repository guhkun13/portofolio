export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Software Engineer with 6+ years of expertise in backend systems, DevOps, and cross-functional team
              leadership. Proven ability to design scalable solutions, mentor engineers, and bridge technical and
              business needs—transforming client trust into multi-year enterprise partnerships.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about clean code (SOLID/DDD), performance optimization, and empowering teams to ship
              independently. Currently based in Indonesia, working with global teams across different time zones.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground">
                Bachelor of Computer Science
                <br />
                University of Indonesia, Depok
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Indonesia</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Languages</h3>
              <p className="text-muted-foreground">English (Fluent), Bahasa Indonesia (Native)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
