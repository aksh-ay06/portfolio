'use client'

import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { AnimatedSection, FadeIn, SlideIn } from '@/components/animated-section'
import { projects } from '@/data/projects'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-background-surface px-6 py-24 lg:px-8 lg:py-32">
        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-6 inline-block">
              <span className="font-mono text-sm uppercase tracking-wider text-accent">
                Portfolio
              </span>
            </div>
          </FadeIn>

          <SlideIn delay={0.1}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Akshay</span>
            </h1>
          </SlideIn>

          <SlideIn delay={0.2} direction="right">
            <p className="mb-8 text-xl text-foreground-secondary sm:text-2xl lg:text-3xl">
              I design intelligent systems, build data infrastructure, and create
              production-ready applications.
            </p>
          </SlideIn>

          <SlideIn delay={0.3}>
            <p className="mb-10 max-w-2xl text-base text-foreground-secondary sm:text-lg">
              Working at the intersection of{' '}
              <span className="font-semibold text-accent">Machine Learning</span>,{' '}
              <span className="font-semibold text-accent-secondary">Data Science</span>,
              and{' '}
              <span className="font-semibold text-accent">Full-Stack Engineering</span>.
              I transform complex problems into elegant, scalable solutions.
            </p>
          </SlideIn>

          <SlideIn delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
              >
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background-surface px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-elevated"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background-surface px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-elevated"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background-surface px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-elevated"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="border-b border-border bg-background px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mb-3 font-mono text-sm uppercase tracking-wider text-accent">
                  Featured Work
                </h2>
                <p className="text-3xl font-bold sm:text-4xl">Selected Projects</p>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm font-medium text-foreground-secondary transition-colors hover:text-accent sm:block"
              >
                View all projects →
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <Link
                  href={`/projects#${project.id}`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-background-surface p-6 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10">
                    <div className="mb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-accent">
                        {Array.isArray(project.category) ? project.category.join(' • ') : project.category}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-foreground-secondary">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-background-elevated px-3 py-1 font-mono text-xs text-foreground-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/projects"
                className="text-sm font-medium text-foreground-secondary transition-colors hover:text-accent"
              >
                View all projects →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-background-surface px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="mb-3 font-mono text-sm uppercase tracking-wider text-accent">
                Expertise
              </h2>
              <p className="text-3xl font-bold sm:text-4xl">Technical Skills</p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="mb-4 text-lg font-semibold text-accent">
                  Machine Learning
                </h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>PyTorch</li>
                  <li>NLP, Computer Vision</li>
                  <li>MLOps & Model Serving</li>
                  <li>A/B Testing & Evaluation</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="mb-4 text-lg font-semibold text-accent-secondary">
                  Data Engineering
                </h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>Kafka, Airflow</li>
                  <li>SQL, NoSQL, Vector DBs</li>
                  <li>ETL/ELT Pipelines</li>
                  <li>Data Quality & Observability</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="mb-4 text-lg font-semibold text-accent">
                  Full-Stack Development
                </h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>React, Next.js, TypeScript</li>
                  <li>Python, Node.js</li>
                  <li>REST & GraphQL APIs</li>
                  <li>PostgreSQL, Redis</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="mb-4 text-lg font-semibold text-accent-secondary">
                  Infrastructure
                </h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>Docker, Kubernetes</li>
                  <li>AWS,</li>
                  <li>CI/CD Pipelines</li>
                  <li>Monitoring & Logging</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Let's Build Something Great
            </h2>
            <p className="mb-8 text-lg text-foreground-secondary">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to connect, feel free
              to reach out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
