import ScrollSection, { SectionContent, SplitSectionContent } from './components/ScrollSection';
import ScrollEffects from './components/ScrollEffects';

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <main className="scroll-container">
        {/* Section 1: Hero */}
        <ScrollSection
          id="hero"
          className="section-1"
          contentAlignment="center"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.4}
          backgroundColor="#f5f5f0"
          parallaxForeground={true}
          parallaxForegroundSpeed={-0.15}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            {/* Top Bar with Coming Soon and Try for Free */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 border-2 border-black flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-base sm:text-lg md:text-xl font-light tracking-wide">Coming</div>
                  <div className="text-base sm:text-lg md:text-xl font-light tracking-wide">Soon</div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#d4ff00] hover:bg-[#c4ef00] transition-colors text-base sm:text-lg font-medium whitespace-nowrap"
              >
                Try for Free
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Main Title */}
            <h1
              className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 px-2 sm:px-4"
              style={{
                fontSize: 'clamp(3rem, 8vw + 1rem, 10rem)',
                lineHeight: '0.95',
                fontWeight: '400',
                fontStyle: 'italic',
                letterSpacing: '-0.02em'
              }}
            >
              Interior<br />Vision
            </h1>

            {/* 4 Image Placeholder Boxes */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-[3/4] rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-[#d4ff00] bg-white flex items-center justify-center min-h-[300px] sm:min-h-0"
                  >
                    <span className="text-xl sm:text-2xl font-medium text-gray-400">[Image]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Section 2: About - Split Layout */}
        <ScrollSection
          id="about"
          className="section-2"
          contentLayout="split"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.3}
          backgroundColor="#ffffff"
        >
          <SplitSectionContent
            textColumn={
              <>
                <span className="section-eyebrow" data-animate="fade-up">
                  About Us
                </span>
                <h2 className="section-title" data-animate="fade-up">
                  Crafting Spaces That Inspire
                </h2>
                <p className="section-body" data-animate="fade-up">
                  With over a decade of experience in architecture and interior design,
                  we specialize in transforming spaces into timeless works of art. Our
                  approach combines functionality with aesthetic excellence to create
                  environments that enhance the way you live and work.
                </p>
              </>
            }
            mediaColumn={
              <div
                className="w-full h-96 bg-gray-200 rounded-lg"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              />
            }
          />
        </ScrollSection>

        {/* Section 3: Services - Split Reverse */}
        <ScrollSection
          id="services"
          className="section-3"
          contentLayout="split-reverse"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.3}
          backgroundColor="#f5f5f0"
        >
          <SplitSectionContent
            textColumn={
              <>
                <span className="section-eyebrow" data-animate="fade-up">
                  What We Do
                </span>
                <h2 className="section-title" data-animate="fade-up">
                  Full-Spectrum Design Services
                </h2>
                <p className="section-body" data-animate="fade-up">
                  From initial concept to final execution, we guide you through every
                  step of the design process. Our services include residential and
                  commercial interior design, architectural planning, custom furniture
                  design, and project management.
                </p>
              </>
            }
            mediaColumn={
              <div
                className="w-full h-96 bg-gray-200 rounded-lg"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                }}
              />
            }
          />
        </ScrollSection>

        {/* Section 4: Portfolio Preview - Split Layout */}
        <ScrollSection
          id="portfolio-preview"
          className="section-4"
          contentLayout="split"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.3}
          backgroundColor="#ffffff"
        >
          <SplitSectionContent
            textColumn={
              <>
                <span className="section-eyebrow" data-animate="fade-up">
                  Featured Projects
                </span>
                <h2 className="section-title" data-animate="fade-up">
                  Transformative Designs
                </h2>
                <p className="section-body" data-animate="fade-up">
                  Explore our curated collection of residential and commercial projects.
                  Each space tells a unique story, reflecting our commitment to excellence
                  and our passion for creating environments that inspire.
                </p>
                <a href="/portfolio" className="cta-button" data-animate="fade-up">
                  View Full Portfolio
                </a>
              </>
            }
            mediaColumn={
              <div
                className="w-full h-96 bg-gray-200 rounded-lg"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                }}
              />
            }
          />
        </ScrollSection>

        {/* Section 5: Process - Split Reverse */}
        <ScrollSection
          id="process"
          className="section-5"
          contentLayout="split-reverse"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.3}
          backgroundColor="#f5f5f0"
        >
          <SplitSectionContent
            textColumn={
              <>
                <span className="section-eyebrow" data-animate="fade-up">
                  Our Approach
                </span>
                <h2 className="section-title" data-animate="fade-up">
                  A Collaborative Journey
                </h2>
                <p className="section-body" data-animate="fade-up">
                  We believe great design is born from collaboration. Our process begins
                  with understanding your vision, followed by thoughtful research and
                  creative exploration. We iterate together until every detail aligns
                  with your aspirations.
                </p>
              </>
            }
            mediaColumn={
              <div
                className="w-full h-96 bg-gray-200 rounded-lg"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                }}
              />
            }
          />
        </ScrollSection>

        {/* Section 6: Testimonial - Center Aligned */}
        <ScrollSection
          id="testimonial"
          className="section-6"
          contentAlignment="center"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.3}
          backgroundColor="#ffffff"
        >
          <SectionContent
            eyebrow="Client Stories"
            title="Exceeding Expectations"
            body={
              <>
                <p className="text-2xl font-light italic mb-8">
                  "Working with this team transformed not just our space, but our entire
                  lifestyle. Their attention to detail and ability to capture our vision
                  was extraordinary."
                </p>
                <p className="text-sm font-semibold tracking-wider uppercase">
                  — Sarah Mitchell, Homeowner
                </p>
              </>
            }
          />
        </ScrollSection>

        {/* Section 7: Awards & Recognition - Split Layout */}
        <ScrollSection
          id="recognition"
          className="section-7"
          contentLayout="split"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.3}
          backgroundColor="#f5f5f0"
        >
          <SplitSectionContent
            textColumn={
              <>
                <span className="section-eyebrow" data-animate="fade-up">
                  Recognition
                </span>
                <h2 className="section-title" data-animate="fade-up">
                  Award-Winning Excellence
                </h2>
                <p className="section-body" data-animate="fade-up">
                  Our work has been recognized by leading design publications and
                  industry organizations. These accolades reflect our dedication to
                  pushing creative boundaries and delivering exceptional results.
                </p>
              </>
            }
            mediaColumn={
              <div
                className="w-full h-96 bg-gray-200 rounded-lg"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                }}
              />
            }
          />
        </ScrollSection>

        {/* Section 8: Contact / CTA */}
        <ScrollSection
          id="contact"
          className="section-8"
          contentAlignment="center"
          parallaxBackground={true}
          parallaxBackgroundSpeed={0.3}
          backgroundColor="#1a1a1a"
        >
          <div className="text-white">
            <SectionContent
              eyebrow="Let's Create Together"
              title="Start Your Project"
              body="Ready to transform your space? We'd love to hear about your vision and explore how we can bring it to life."
              cta={
                <div className="cta-group">
                  <a
                    href="/contact"
                    className="cta-button"
                    style={{ backgroundColor: '#fff', color: '#1a1a1a', borderColor: '#fff' }}
                  >
                    Schedule a Consultation
                  </a>
                  <a
                    href="/portfolio"
                    className="cta-button secondary"
                    style={{ color: '#fff', borderColor: '#fff' }}
                  >
                    View Our Work
                  </a>
                </div>
              }
            />
          </div>
        </ScrollSection>
      </main>
    </>
  );
}
