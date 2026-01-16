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
      <section id="blog" className="section-8" style={{ backgroundColor: '#f5f5f0', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-normal mb-4">
              Our <span className="italic font-serif">Blog</span>
            </h1>
            <p className="text-lg text-gray-600">Insights, tips, and inspiration for interior designers</p>
          </div>

          {/* Blog Posts Grid */}
          {posts.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
              {posts.map((post) => (
                <StaggerItem key={post.slug} animation="scale">
                  <PostCard post={post} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
