import Link from 'next/link';

export default function BackToAllPosts() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all mb-8"
    >
      <span className="text-xl">←</span>
      <span>Back to all posts</span>
    </Link>
  );
}
