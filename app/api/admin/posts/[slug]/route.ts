import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { getPostBySlug } from '@/lib/blog';
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

// GET single post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const isAuthenticated = await checkAuth(request);

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

// PUT update post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const isAuthenticated = await checkAuth(request);

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { slug } = await params;
    const { title, date, description, coverImage, content, newSlug } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const oldFilePath = path.join(BLOG_DIR, `${slug}.md`);

    // Check if old file exists
    try {
      await fs.access(oldFilePath);
    } catch {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
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

    // If slug changed, create new file and delete old one
    if (newSlug && newSlug !== slug) {
      const newFilePath = path.join(BLOG_DIR, `${newSlug}.md`);

      // Check if new slug already exists
      try {
        await fs.access(newFilePath);
        return NextResponse.json(
          { error: 'A post with the new slug already exists' },
          { status: 409 }
        );
      } catch {
        // New slug doesn't exist, continue
      }

      await fs.writeFile(newFilePath, fileContent, 'utf-8');
      await fs.unlink(oldFilePath);

      return NextResponse.json(
        { message: 'Post updated successfully', slug: newSlug },
        { status: 200 }
      );
    } else {
      // Just update the existing file
      await fs.writeFile(oldFilePath, fileContent, 'utf-8');

      return NextResponse.json(
        { message: 'Post updated successfully', slug },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

// DELETE post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const isAuthenticated = await checkAuth(request);

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { slug } = await params;
    const filePath = path.join(BLOG_DIR, `${slug}.md`);

    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    await fs.unlink(filePath);

    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
