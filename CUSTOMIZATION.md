# 🎨 Customization Guide

Learn how to customize every aspect of your portfolio to match your personal brand.

## 🎯 Quick Customization Checklist

- [ ] Update personal information in `src/config/site.ts`
- [ ] Replace placeholder projects in `src/data/projects.ts`
- [ ] Add your blog posts to `content/posts/`
- [ ] Update resume file in `public/`
- [ ] Change color scheme (optional)
- [ ] Swap design system (optional)
- [ ] Add your own images/assets
- [ ] Update social media links

---

## 📝 Personal Information

### Site Configuration

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Name — Your Tagline',
  description: 'Your custom description...',
  url: 'https://yourwebsite.com',
  author: {
    name: 'Your Name',
    bio: 'Your bio...',
    email: 'your@email.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
}
```

---

## 🚀 Adding Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'unique-slug',
    title: 'Project Title',
    description: 'Short description (1-2 lines)',
    longDescription: 'Detailed description for project page',
    tags: ['Technology', 'Stack', 'Used'],
    category: 'ml' | 'data' | 'fullstack' | 'infrastructure',
    image: '/images/project-screenshot.png', // Optional
    link: 'https://live-demo.com', // Optional
    github: 'https://github.com/you/repo', // Optional
    featured: true, // Show on homepage
    date: '2024-11',
  },
  // Add more projects...
]
```

**Project Categories:**
- `ml` - Machine Learning
- `data` - Data Engineering
- `fullstack` - Full-Stack Development
- `infrastructure` - Infrastructure/DevOps

---

## ✍️ Adding Blog Posts

Create a new file in `content/posts/your-post-title.md`:

```markdown
---
title: "Your Blog Post Title"
date: "2024-11-26"
excerpt: "A brief summary of your post (1-2 sentences)"
tags: ["Tag1", "Tag2", "Tag3"]
author: "Your Name"
readTime: "5 min read"
---

# Your Blog Post Title

Your content here...

## Subheading

More content...

\```python
# Code blocks supported
def example():
    return "Hello, World!"
\```

**Bold text**, *italic text*, [links](https://example.com)

- Bullet points
- Are supported
- As well

1. Numbered lists
2. Also work
3. Perfectly
```

---

## 🎨 Switching Design Systems

The portfolio comes with 3 pre-built designs. To switch:

### Current Design: Bold & Modern (Design 2)

To switch to **Minimal & Clean (Design 1)**:

1. Update `app/globals.css` color variables:
```css
:root {
  --background: 255 255 255;
  --surface: 245 245 247;
  --foreground: 29 29 31;
  --foreground-secondary: 134 134 139;
  --accent: 0 113 227;
  --border: 210 210 215;
}

.dark {
  --background: 0 0 0;
  --surface: 29 29 31;
  --foreground: 245 245 247;
  --foreground-secondary: 134 134 139;
  --accent: 10 132 255;
  --border: 66 66 69;
}
```

2. Update fonts in `src/lib/fonts.ts`:
```typescript
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})
```

To switch to **Playful & Creative (Design 3)**:

Update colors to warm palette:
```css
:root {
  --background: 254 252 249;
  --surface: 255 255 255;
  --foreground: 41 37 36;
  --accent: 249 115 22; /* Orange */
  --accent-secondary: 139 92 246; /* Purple */
}
```

See `DESIGN-SYSTEMS.md` for complete specifications.

---

## 🖼️ Adding Images

### Project Images

1. Add images to `public/images/`:
```
public/
  images/
    projects/
      my-project.png
      another-project.jpg
```

2. Reference in projects:
```typescript
{
  id: 'my-project',
  title: 'My Project',
  image: '/images/projects/my-project.png',
  // ...
}
```

### Using Next.js Image

```tsx
import Image from 'next/image'

<Image
  src="/images/projects/my-project.png"
  alt="Project screenshot"
  width={800}
  height={600}
  className="rounded-xl"
/>
```

---

## 🎨 Custom Colors

### Method 1: Update CSS Variables

Edit `app/globals.css`:

```css
:root {
  --accent: 255 0 128; /* Your custom color in RGB */
  --accent-secondary: 0 255 255;
}
```

### Method 2: Update Tailwind Config

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#fef2f2',
        100: '#fee2e2',
        // ... your color scale
        900: '#7f1d1d',
      },
    },
  },
}
```

Use in components:
```tsx
<div className="bg-brand-500 text-brand-50">
  Custom branded content
</div>
```

---

## 📱 Social Media Preview

### Open Graph Images

Create `app/opengraph-image.tsx`:

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Your Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: 72, color: 'white' }}>
          Your Name - Engineer
        </h1>
      </div>
    ),
    { ...size }
  )
}
```

Or use a static image:
```
public/
  og-image.png (1200x630)
```

---

## 🔧 Advanced Customization

### Custom Components

Create reusable components in `src/components/`:

```tsx
// src/components/custom-card.tsx
export function CustomCard({ title, children }: Props) {
  return (
    <div className="rounded-xl border border-border bg-background-surface p-6">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      {children}
    </div>
  )
}
```

### Add New Routes

Create new pages in `app/`:

```tsx
// app/resume/page.tsx
export default function ResumePage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <h1>My Resume</h1>
      {/* Your content */}
    </div>
  )
}
```

### Custom Animations

Using Framer Motion:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

---

## 📊 Adding Analytics

### Google Analytics

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
import { Analytics } from '@vercel/analytics/react'

<Analytics />
```

---

## 📧 Contact Form Integration

### SendGrid

```typescript
// app/contact/actions.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function submitContactForm(data: ContactFormData) {
  await sgMail.send({
    to: 'your@email.com',
    from: 'noreply@yourdomain.com',
    subject: `Contact: ${data.subject}`,
    text: data.message,
    html: `
      <p><strong>From:</strong> ${data.name} (${data.email})</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  })
}
```

### Resend

```bash
npm install resend
```

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'your@email.com',
  subject: data.subject,
  html: `<p>${data.message}</p>`,
})
```

---

## 🎭 Custom Fonts

### Google Fonts

```typescript
// src/lib/fonts.ts
import { Poppins, Fira_Code } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})
```

### Custom Local Fonts

```typescript
import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2',
  variable: '--font-custom',
})
```

---

## 🛠️ Tips & Best Practices

1. **Keep It Simple**: Don't over-customize. Start with small changes.

2. **Test Responsively**: Always check mobile, tablet, and desktop views.

3. **Maintain Performance**: Optimize images, minimize dependencies.

4. **Version Control**: Commit changes frequently with clear messages.

5. **Backup**: Keep backups before major customizations.

6. **Consistency**: Maintain design consistency across all pages.

7. **Accessibility**: Ensure sufficient color contrast, keyboard navigation.

---

## Need Inspiration?

Check out these resources:
- [Awwwards](https://www.awwwards.com/) - Design inspiration
- [Dribbble](https://dribbble.com/) - Portfolio designs
- [Tailwind UI](https://tailwindui.com/) - Component examples

---

**Happy customizing! 🎨**
