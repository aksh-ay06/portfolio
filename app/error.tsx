'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-red-500/10 p-6">
            <AlertTriangle className="h-16 w-16 text-red-500" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mb-8 text-lg text-foreground-secondary">
          We encountered an unexpected error. This has been logged and we'll look
          into it.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-left">
            <p className="mb-2 font-mono text-sm font-semibold text-red-500">
              Error Details (Development Only):
            </p>
            <p className="font-mono text-xs text-foreground-secondary">
              {error.message}
            </p>
            {error.digest && (
              <p className="mt-2 font-mono text-xs text-foreground-secondary">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background-surface px-6 py-3 font-semibold transition-all hover:border-accent hover:bg-background-elevated"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
