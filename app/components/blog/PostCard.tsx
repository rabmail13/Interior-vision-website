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
      className="group block py-4 border-b border-gray-200 hover:border-gray-400 transition-colors"
    >
      {/* Date & Author */}
      {(post.date || post.author) && (
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          {post.date && post.author && <span>·</span>}
          {post.author && <span>{post.author}</span>}
        </div>
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold text-black mb-1.5 group-hover:underline leading-tight">
        {post.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-snug line-clamp-2">
        {post.description}
      </p>
    </Link>
  );
}
