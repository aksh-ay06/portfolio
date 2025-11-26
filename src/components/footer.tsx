import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-mono text-lg font-semibold text-gradient">
              Akshay
            </h3>
            <p className="text-sm text-foreground-secondary max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary transition-colors hover:text-accent"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary transition-colors hover:text-accent"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="text-foreground-secondary transition-colors hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground-secondary">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
