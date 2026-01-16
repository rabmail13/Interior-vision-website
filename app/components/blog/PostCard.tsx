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
      className="group block bg-white border-2 border-black rounded-3xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
    >
      {/* Cover Image */}
      {post.coverImage ? (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[16/10] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-4xl text-gray-400">📝</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        {/* Date & Author */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.author}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-black line-clamp-2 group-hover:text-gray-800 transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {post.description}
        </p>

        {/* Read More Arrow */}
        <div className="flex items-center gap-2 text-black font-medium mt-2">
          <span>Read More</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
