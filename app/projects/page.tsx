'use client'

import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { projects, projectCategories } from '@/data/projects'
import type { Project } from '@/data/projects'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = projects.filter(
    (project) => {
      if (selectedCategory === 'all') return true
      const categories = Array.isArray(project.category) ? project.category : [project.category]
      return categories.includes(selectedCategory as any)
    }
  )

  return (
    <div className="min-h-screen bg-background px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Projects
            </h1>
            <p className="max-w-2xl text-lg text-foreground-secondary">
              A collection of projects spanning machine learning, data engineering,
              and full-stack development. Each project showcases production-ready
              solutions to real-world problems.
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <div className="mb-12 flex flex-wrap gap-3">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-xl px-5 py-2.5 font-mono text-sm font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-accent text-white shadow-lg shadow-accent/50'
                    : 'border border-border bg-background-surface text-foreground-secondary hover:border-accent hover:text-accent'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 0.05} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-foreground-secondary">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div
        id={project.id}
        className="group flex h-full flex-col rounded-2xl border border-border bg-background-surface p-6 transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/10"
      >
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            {project.category}
          </span>
          <span className="text-xs text-foreground-secondary">{project.date}</span>
        </div>

        {/* Title & Description */}
        <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-foreground-secondary">
          {project.longDescription || project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-background-elevated px-3 py-1 font-mono text-xs text-foreground-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 border-t border-border pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {!project.github && !project.link && (
            <span className="text-xs text-foreground-secondary">
              {project.featured ? 'Featured Project' : 'Private Repository'}
            </span>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
