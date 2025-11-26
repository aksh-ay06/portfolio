# 🚀 Deployment Guide

This guide covers deploying your portfolio to Vercel (recommended) and other platforms.

## Quick Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Option 1: One-Click Deploy

1. Click the "Deploy with Vercel" button above
2. Sign in to Vercel (or create account)
3. Import the repository
4. Configure environment variables (optional)
5. Click "Deploy"
6. Done! Your site is live

### Option 2: CLI Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or deploy to production
vercel --prod
```

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

**Benefits:**
- Automatic deployments on every push
- Preview deployments for PRs
- Zero configuration needed

---

## Environment Variables

Create a `.env.local` file for local development:

```bash
# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Contact Form (if implementing email)
SENDGRID_API_KEY=your_sendgrid_key
CONTACT_EMAIL=hello@yourdomain.com

# Optional: Database (if adding CMS)
DATABASE_URL=your_database_url
```

**Add to Vercel:**
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

---

## Custom Domain Setup

### On Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS with your registrar:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`
4. Wait for DNS propagation (5-60 minutes)
5. SSL certificate automatically provisioned

---

## Alternative Deployment Platforms

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Cloudflare Pages

```bash
# Build command
npm run build

# Output directory
.next

# Environment variables
NODE_VERSION=18
```

### AWS Amplify

1. Connect GitHub repository
2. Build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Docker (Self-Hosted)

```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

**Build & Run:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Performance Optimization

### Before Deploying

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images (use tools like ImageOptim, TinyPNG)
   - Use modern formats (WebP, AVIF)

2. **Code Splitting**
   - Already handled by Next.js
   - Consider dynamic imports for heavy components

3. **Analytics**
   ```bash
   npm install @vercel/analytics
   ```
   
   Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   // In body
   <Analytics />
   ```

4. **Speed Insights**
   ```bash
   npm install @vercel/speed-insights
   ```

---

## SEO Optimization

### Sitemap

Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://yourdomain.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://yourdomain.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

### Robots.txt

Create `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

---

## Monitoring & Analytics

### Recommended Tools

1. **Vercel Analytics** (Built-in)
   - Page views
   - Real user metrics
   - Web Vitals

2. **Google Analytics**
   ```tsx
   // app/layout.tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
     strategy="afterInteractive"
   />
   ```

3. **Sentry** (Error Tracking)
   ```bash
   npm install @sentry/nextjs
   ```

4. **Lighthouse CI**
   - Automated performance audits
   - Integrated with GitHub Actions

---

## Continuous Integration

### GitHub Actions

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
```

---

## Post-Deployment Checklist

- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Analytics tracking
- [ ] Performance metrics (Lighthouse score >90)
- [ ] Mobile responsiveness verified
- [ ] SEO metadata complete
- [ ] Social media preview images
- [ ] Contact form tested
- [ ] All links working
- [ ] 404 page accessible
- [ ] Error boundaries tested
- [ ] Dark/light mode working

---

## Troubleshooting

### Build Failures

**Problem:** "Module not found"
```bash
# Clear cache and reinstall
rm -rf node_modules .next package-lock.json
npm install
npm run build
```

**Problem:** TypeScript errors
```bash
# Run type check locally
npm run type-check
```

### Performance Issues

**Problem:** Large bundle size
```bash
# Analyze bundle
npm run build
# Check .next/analyze output
```

**Problem:** Slow page loads
- Use Next.js Image component
- Implement code splitting
- Enable caching headers
- Use CDN for static assets

### Deployment Issues on Vercel

**Problem:** Build timeout
- Increase timeout in project settings
- Optimize build process
- Remove unnecessary dependencies

**Problem:** Function timeout
- Edge Runtime for faster responses
- Optimize server actions
- Cache expensive operations

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Deployment Forum**: https://github.com/vercel/next.js/discussions

---

## Need Help?

If you encounter issues:
1. Check the [troubleshooting section](#troubleshooting)
2. Review Vercel deployment logs
3. Open an issue on GitHub
4. Contact support@vercel.com (for Vercel-specific issues)

---

**🎉 Your portfolio is now live!**

Remember to:
- Update content regularly
- Add new projects
- Write blog posts
- Monitor performance
- Collect user feedback
