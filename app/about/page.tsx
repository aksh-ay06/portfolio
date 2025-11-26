import { AnimatedSection } from '@/components/animated-section'
import { Code2, Database, Brain, Server, Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              About Me
            </h1>
            <p className="text-xl text-foreground-secondary">
              Engineer working at the intersection of Machine Learning, Data Science,
              and Full-Stack Engineering.
            </p>
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16 rounded-2xl border border-border bg-background-surface p-8">
            <p className="mb-4 text-lg leading-relaxed text-foreground">
              Hi, I’m Akshay. I’m currently pursuing my master’s in Industrial Engineering at WVU, with a bachelor’s in Chemical Engineering from NIT Bhopal. I work as a Graduate Research Assistant in the Pollution Prevention Lab, focusing on energy analytics, sustainability, and data-driven efficiency projects. I also volunteer as an Experiential Learning Cybersecurity Analyst with Data Driven WV (under NDA).
            </p>
            <p className="mb-4 text-lg leading-relaxed text-foreground-secondary">
              I'm passionate about creating systems that are not just functional, but
              elegant, maintainable, and performant. Whether it's optimizing a machine
              learning pipeline to handle millions of predictions per second, or
              architecting a real-time data platform processing billions of events daily,
              I focus on building solutions that scale.
            </p>
            <p className="text-lg leading-relaxed text-foreground-secondary">
              When I'm not coding, you'll find me reading research papers, contributing
              to open source, or experimenting with new technologies. I believe in
              continuous learning and sharing knowledge with the community.
            </p>
          </div>
        </AnimatedSection>

        {/* Expertise Areas */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold">Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Machine Learning */}
              <div className="rounded-2xl border border-border bg-background-surface p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Machine Learning</h3>
                </div>
                <ul className="space-y-2 text-foreground-secondary">
                  <li>• Deep Learning (PyTorch)</li>
                  <li>• NLP & Computer Vision</li>
                  <li>• MLOps & Model Deployment</li>
                  <li>• Model Monitoring & A/B Testing</li>
                  <li>• Feature Engineering & Selection</li>
                </ul>
              </div>

              {/* Data Engineering */}
              <div className="rounded-2xl border border-border bg-background-surface p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-accent-secondary/10 p-3">
                    <Database className="h-6 w-6 text-accent-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Data Engineering</h3>
                </div>
                <ul className="space-y-2 text-foreground-secondary">
                  <li>• Stream Processing (Kafka)</li>
                  <li>• Batch Processing (Spark, Airflow)</li>
                  <li>• Data Warehousing (Snowflake, BigQuery)</li>
                  <li>• ETL/ELT Pipeline Design</li>
                  <li>• Data Quality & Observability</li>
                </ul>
              </div>

              {/* Full-Stack */}
              <div className="rounded-2xl border border-border bg-background-surface p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                </div>
                <ul className="space-y-2 text-foreground-secondary">
                  <li>• React, Next.js, TypeScript</li>
                  <li>• Python, Node.js</li>
                  <li>• REST & GraphQL APIs</li>
                  <li>• PostgreSQL, MongoDB, Redis</li>
                  <li>• Authentication & Authorization</li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div className="rounded-2xl border border-border bg-background-surface p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-accent-secondary/10 p-3">
                    <Server className="h-6 w-6 text-accent-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Infrastructure</h3>
                </div>
                <ul className="space-y-2 text-foreground-secondary">
                  <li>• Docker & Kubernetes</li>
                  <li>• AWS</li>
                  <li>• CI/CD (GitHub Actions, GitLab CI)</li>
                  <li>• Monitoring (Prometheus, Grafana)</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Highlights */}
        <AnimatedSection delay={0.3}>
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold">Highlights</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="mb-2 text-xl font-semibold">
                  Data Driven WV
                </h3>
                <p className="text-foreground-secondary">
                  As an Experiential Learning Cybersecurity Analyst at Data Driven WV, I contributed to the Log to Control initiative, a project focused on strengthening security posture through structured log analysis and automated control mapping. My work involved developing components of a secure workflow that could ingest, parse, and classify system logs to identify patterns, anomalies, and compliance-relevant signals. I supported the design of a scalable pipeline that aligned log events with security controls, enabling more informed auditing, faster detection, and cleaner reporting. Although the project is under NDA, my contributions centered on building reliable logic, enhancing data quality, and applying cybersecurity fundamentals to turn raw data into actionable insights.
                </p>
              </div>

              <div className="border-l-2 border-accent-secondary pl-6">
                <h3 className="mb-2 text-xl font-semibold">
                  WVU Pollution Prevention (P2) Lab
                </h3>
                <p className="text-foreground-secondary">
                  As a Graduate Research Assistant in WVU’s Pollution Prevention Lab, I lead energy analytics and sustainability assessments for small- and medium-sized businesses across West Virginia. I conduct on-site energy audits, collect and analyze operational data, and build data-driven models to identify efficiency opportunities in lighting, HVAC systems, motors, insulation, and industrial processes. My role includes calculating potential savings in kWh, fuel usage, and greenhouse-gas emissions, as well as performing ROI/payback analyses for USDA REAP grant applications. I also collaborate with faculty, industry partners, and field teams to translate audit findings into clear, high-impact recommendations that improve energy performance and reduce environmental footprint.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="mb-2 text-xl font-semibold">SaaS Platform</h3>
                <p className="text-foreground-secondary">
                  Led development of full-stack analytics platform with 100K+ MAU.
                  Built real-time dashboards, team collaboration features, and custom
                  visualization engine.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Connect */}
        <AnimatedSection delay={0.4}>
          <div className="rounded-2xl border border-accent bg-accent/5 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Let's Connect</h2>
            <p className="mb-6 text-foreground-secondary">
              I'm always interested in new opportunities, collaborations, or just a
              good technical conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-surface"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-surface"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-surface"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
