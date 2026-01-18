import { StaggerContainer, StaggerItem } from '../components/AnimatedEntrance';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';
import PostCard from '../components/blog/PostCard';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="scroll-container">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>
      <section id="blog" className="section-8" style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="max-w-[680px] mx-auto px-6 pt-12 md:pt-16">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold mb-0">
              Blog
            </h1>
          </div>

          {/* Blog Posts List */}
          {posts.length > 0 ? (
            <div className="space-y-0">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <h2 className="text-4xl font-normal mb-4 text-gray-800">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-600">We're working on bringing you valuable insights and inspiration.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
