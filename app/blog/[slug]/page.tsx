import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background px-6 py-20 lg:px-8 lg:py-32">
      <article className="mx-auto max-w-3xl">
        {/* Back Link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-secondary">
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
            {post.author && <span>by {post.author}</span>}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-background-surface px-3 py-1 font-mono text-xs text-foreground-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-background-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-background-surface prose-pre:border prose-pre:border-border">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
