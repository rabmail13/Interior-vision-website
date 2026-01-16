import { formatDate } from '@/lib/blog';

interface PostHeaderProps {
  title: string;
  date: string;
  author: string;
  coverImage?: string;
}

export default function PostHeader({ title, date, author, coverImage }: PostHeaderProps) {
  return (
    <header className="mb-12">
      {/* Cover Image */}
      {coverImage && (
        <div className="mb-8 -mx-6 md:-mx-12">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        {title}
      </h1>

      {/* Metadata */}
      <div className="flex items-center gap-4 text-gray-600">
        <time dateTime={date} className="text-base">
          {formatDate(date)}
        </time>
        <span>•</span>
        <span className="text-base">By {author}</span>
      </div>
    </header>
  );
}
