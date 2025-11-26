# Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies ✅

```bash
npm install
```

**Already done!** Dependencies are installed.

## Step 2: Choose Your Theme 🎨

Open `app/layout.tsx` and choose your theme:

```typescript
// Line 24 - Change 'minimal' to 'bold' or 'playful'
const theme: 'minimal' | 'bold' | 'playful' = 'minimal';
```

**Theme Options:**
- `'minimal'` - Clean, Apple-like, professional
- `'bold'` - Dark, neon accents, futuristic  
- `'playful'` - Colorful, friendly, creative

See `DESIGN-COMPARISON.md` for detailed comparison.

## Step 3: Update Your Information 📝

### Personal Info
Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'Engineer',  // ← Change this
  email: 'hello@engineer.dev',  // ← Your email
  github: 'https://github.com/yourusername',  // ← Your GitHub
  linkedin: 'https://linkedin.com/in/yourusername',  // ← Your LinkedIn
  twitter: 'https://twitter.com/yourusername',  // ← Your Twitter
};
```

### Projects
Edit `src/data/projects.ts` - Replace sample projects with yours.

### Blog Posts
Add your posts to `content/posts/` - Copy the existing format.

## Step 4: Run Development Server 🚀

```bash
npm run dev
```

Visit: http://localhost:3000

## Step 5: Customize (Optional) 🛠️

### Add Your Resume
Place `resume.pdf` in the `public/` folder

### Update Theme in All Pages
To use the same theme everywhere, update these files:
- `app/page.tsx`
- `app/projects/page.tsx`
- `app/blog/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

Find and change:
```typescript
const theme: 'minimal' | 'bold' | 'playful' = 'minimal';
```

## Step 6: Deploy 🌐

When ready to go live:

```bash
# Build to check for errors
npm run build

# Deploy to Vercel (recommended)
```

See `DEPLOYMENT.md` for detailed instructions.

---

## Common Tasks

### Add a New Project

Edit `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Brief description',
  tags: ['React', 'TypeScript'],
  category: 'fullstack', // ml, data, fullstack, or infra
  featured: true, // Shows on homepage
  github: 'https://github.com/...',
  demo: 'https://demo.com',
}
```

### Write a Blog Post

Create `content/posts/my-post.mdx`:

```mdx
---
title: "Post Title"
date: "2024-11-26"
excerpt: "Brief description"
tags: ["Tag1", "Tag2"]
---

# Your Content

Write in Markdown format...
```

### Change Colors

Edit `tailwind.config.ts` - Modify the color values in the `extend.colors` section.

---

## File Structure Quick Reference

```
📁 Key Files to Edit:
├── src/config/site.ts          ← Personal info
├── src/data/projects.ts        ← Your projects
├── content/posts/*.mdx         ← Blog posts
├── app/layout.tsx              ← Theme selection
└── public/resume.pdf           ← Your resume

📁 Design System:
├── src/config/themes.ts        ← Theme configs
├── tailwind.config.ts          ← Tailwind colors
└── app/globals.css             ← Global styles

📁 Components:
└── src/components/
    ├── Navbar.tsx              ← Navigation
    ├── Hero.tsx                ← Landing section
    ├── ProjectCard.tsx         ← Project display
    └── ContactForm.tsx         ← Contact form
```

---

## Troubleshooting

### TypeScript Errors?
The errors you see are normal until you run the dev server. They'll resolve automatically.

### Dependencies Issues?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails?
```bash
npm run build
```
Check the error messages for missing data or configuration.

---

## Next Steps

1. ✅ Install dependencies (done)
2. ⬜ Choose your theme
3. ⬜ Update personal information
4. ⬜ Add your projects
5. ⬜ Write a blog post
6. ⬜ Run `npm run dev`
7. ⬜ Deploy to Vercel

**Need help?** Check out:
- `README.md` - Full documentation
- `DESIGN-COMPARISON.md` - Theme details
- `DEPLOYMENT.md` - Deployment guide
- `ENHANCEMENTS.md` - Optional features

Happy building! 🚀
