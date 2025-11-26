import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">Blog</h1>
            <p className="max-w-2xl text-lg text-foreground-secondary">
              Thoughts on machine learning, data engineering, software architecture,
              and building production systems.
            </p>
          </div>
        </AnimatedSection>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-background-surface p-6 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="mb-3 flex items-center gap-4 text-sm text-foreground-secondary">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                  </div>

                  <h2 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>

                  <p className="mb-4 text-foreground-secondary">{post.excerpt}</p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-background-elevated px-3 py-1 font-mono text-xs text-foreground-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-background-surface p-12 text-center">
              <p className="text-lg text-foreground-secondary">
                No blog posts yet. Check back soon!
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}
