import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="mb-4 font-mono text-8xl font-bold text-gradient sm:text-9xl">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Page Not Found</h2>
          <p className="text-lg text-foreground-secondary">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background-surface px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-elevated"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12">
          <p className="mb-4 text-sm text-foreground-secondary">
            You might be interested in:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/projects"
              className="text-foreground-secondary transition-colors hover:text-accent"
            >
              Projects
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/blog"
              className="text-foreground-secondary transition-colors hover:text-accent"
            >
              Blog
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/about"
              className="text-foreground-secondary transition-colors hover:text-accent"
            >
              About
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/contact"
              className="text-foreground-secondary transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
