import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  description: string;
  coverImage?: string;
  content: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  description: string;
  coverImage?: string;
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.(md|mdx)$/, ''));
}

/**
 * Get metadata for all blog posts (for listing page)
 */
export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();

  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        author: post.author,
        description: post.description,
        coverImage: post.coverImage,
      };
    })
    .sort((a, b) => {
      // Sort by date, newest first (posts without dates go to the end)
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

/**
 * Get a single blog post by slug (includes content)
 */
export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.(md|mdx)$/, '');

  // Try .mdx first, then .md
  let fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${realSlug}.md`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || 'Untitled',
    date: data.date,
    author: data.author,
    description: data.description || '',
    coverImage: data.coverImage,
    content,
  };
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
