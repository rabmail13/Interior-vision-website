import Link from 'next/link';
import { formatDate } from '@/lib/blog';
import type { BlogPostMetadata } from '@/lib/blog';

interface PostCardProps {
  post: BlogPostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-8 border-b border-gray-200 hover:border-gray-400 transition-colors"
    >
      {/* Date & Author */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.author}</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-black mb-3 group-hover:underline">
        {post.title}
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed">
        {post.description}
      </p>
    </Link>
  );
}
