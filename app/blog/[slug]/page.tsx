import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import TopNavbar from '@/app/components/TopNavbar';
import Footer from '@/app/components/Footer';
import PostHeader from '@/app/components/blog/PostHeader';
import BackToAllPosts from '@/app/components/blog/BackToAllPosts';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  // Get the post data
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>

      <article className="max-w-4xl mx-auto px-6 md:px-12 py-24 pt-32">
        <BackToAllPosts />

        <PostHeader
          title={post.title}
          date={post.date}
          coverImage={post.coverImage}
        />

        {/* Blog Content with Tailwind Typography */}
        <div className="prose prose-lg prose-headings:font-semibold prose-headings:text-black prose-p:text-gray-700 prose-a:text-black prose-a:underline hover:prose-a:text-gray-700 prose-strong:text-black prose-code:text-black prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
