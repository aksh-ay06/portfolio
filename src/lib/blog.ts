import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
  author?: string
  readTime?: string
}

export function getAllPosts(): Post[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || slug,
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          content,
          tags: data.tags || [],
          author: data.author || 'Engineer',
          readTime: data.readTime || '5 min read',
        }
      })

    return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.mdx?$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      const mdxPath = path.join(postsDirectory, `${realSlug}.mdx`)
      if (!fs.existsSync(mdxPath)) {
        return null
      }
      const fileContents = fs.readFileSync(mdxPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: realSlug,
        title: data.title || realSlug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content,
        tags: data.tags || [],
        author: data.author || 'Engineer',
        readTime: data.readTime || '5 min read',
      }
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: realSlug,
      title: data.title || realSlug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content,
      tags: data.tags || [],
      author: data.author || 'Engineer',
      readTime: data.readTime || '5 min read',
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}
