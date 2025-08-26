"use client"

import type React from "react"

import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export function Contact() {

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Lets Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am always interested in discussing new opportunities, innovative projects, or potential collaborations.
                Whether you are looking for a technical leader, backend engineer, or consultant, I would love to hear from
                you.
              </p>
            </div>

          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-semibold">Find me online</h4>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/guhkun13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/guhkun13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="https://guhkun.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  Portfolio
                </a>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a
                    href="mailto:guhkun13@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    guhkun13@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:+6281388669930" className="text-muted-foreground hover:text-foreground transition-colors">
                    +62 813 8866 9930
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Indonesia</span>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
