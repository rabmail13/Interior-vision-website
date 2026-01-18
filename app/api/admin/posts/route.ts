import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { getAllPosts } from '@/lib/blog';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

async function checkAuth(request: NextRequest) {
  const token = request.cookies.get('admin-session')?.value;
  if (!token) {
    return false;
  }

  const session = await verifySession(token);
  return !!session;
}

// GET all posts
export async function GET(request: NextRequest) {
  const isAuthenticated = await checkAuth(request);

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const posts = await getAllPosts();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// POST create new post
export async function POST(request: NextRequest) {
  const isAuthenticated = await checkAuth(request);

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { slug, title, date, description, coverImage, content } = await request.json();

    if (!slug || !title || !content) {
      return NextResponse.json(
        { error: 'Slug, title, and content are required' },
        { status: 400 }
      );
    }

    // Create frontmatter
    const frontmatter: Record<string, string> = {
      title,
    };

    if (date) frontmatter.date = date;
    if (description) frontmatter.description = description;
    if (coverImage) frontmatter.coverImage = coverImage;

    // Generate markdown file
    const fileContent = matter.stringify(content, frontmatter);

    // Write file
    const filePath = path.join(BLOG_DIR, `${slug}.md`);

    // Check if file already exists
    try {
      await fs.access(filePath);
      return NextResponse.json(
        { error: 'A post with this slug already exists' },
        { status: 409 }
      );
    } catch {
      // File doesn't exist, continue
    }

    await fs.writeFile(filePath, fileContent, 'utf-8');

    return NextResponse.json(
      { message: 'Post created successfully', slug },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
