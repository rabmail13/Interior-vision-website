import ScrollSection from './components/ScrollSection';
import RotatingText from './components/RotatingText';
import ColourfulText from './components/ColourfulText';
import TypingText from './components/TypingText';
import HighlightText from './components/HighlightText';
import FeaturesSection from './components/FeaturesSection';
import ManageProjectsSection from './components/ManageProjectsSection';
import BuiltByDesigners from './components/BuiltByDesigners';

export default function Home() {
  return (
    <>
      <main className="scroll-container">
        {/* Section 1: Hero */}
        <ScrollSection
          id="hero"
          className="section-1"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <div className="hero-container">
            {/* Header Row */}
            <div className="hero-header">
              {/* Center: Title Block */}
              <div className="hero-title-block">
              {/* Title elements wrapper */}
              <div className="hero-titles-wrapper">
                {/* Interior row */}
                <div className="hero-title-word">
                  <svg 
                    className="hero-glasses-icon" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="15" r="4"/>
                    <circle cx="18" cy="15" r="4"/>
                    <path d="M14 15a2 2 0 0 0-4 0"/>
                    <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/>
                    <path d="M21.5 13 19 7c-.7-1.3-1.4-2-3-2"/>
                  </svg>
                  <h1 className="hero-title no-italic hero-title-rotate-in">Interior</h1>
                </div>
                {/* Vision row with CTA */}
                <div className="hero-title-row">
                  <div className="hero-title-word">
                    <h1 className="hero-title">
                      <TypingText>Vision</TypingText>
                    </h1>
                  </div>
                  <div className="hero-cta-row">
                    <svg
                      className="hero-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="16 8 20 12 16 16" />
                    </svg>
                    <a
                      href="#contact"
                      className="hero-cta-button"
                    >
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>
              
              </div>
            </div>

            {/* Rotating text preview - outside hero-title-block */}
            <div className="hero-rotating-wrapper">
              <RotatingText
                texts={[
                  "Design smarter, not harder.",
                  "Your vision, streamlined."
                ]}
                interval={3000}
                initialDelay={1500}
                className="hero-rotating-text"
              />
            </div>

            {/* Image grid area - content to be added later */}
            <div className="hero-image-grid">
            </div>
          </div>
        </ScrollSection>

        {/* Section 2: Tagline */}
        <ScrollSection
          id="tagline"
          className="section-2"
          contentAlignment="center"
          backgroundColor="#000000"
        >
          <div className="tagline-container">
            <div className="tagline-line">
              <h2 className="tagline-text">
                <TypingText typingSpeed={20} startDelay={150}>
                  From <ColourfulText text="inspiration" /> to <ColourfulText text="implementation" />,
                </TypingText>
              </h2>
            </div>
            <div className="tagline-line">
              <h2 className="tagline-text tagline-underline">
                <HighlightText 
                  text="all in one place." 
                  delay={1500}
                  duration={480}
                  highlightColor="#d4ff00"
                  textColor="#000000"
                />
              </h2>
            </div>
          </div>
        </ScrollSection>

        {/* Section 3: Key Features */}
        <ScrollSection
          id="features"
          className="section-3"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <FeaturesSection />
        </ScrollSection>

        {/* Section 4: Manage Projects */}
        <ScrollSection
          id="manage-projects"
          className="section-4"
          contentAlignment="center"
          backgroundColor="#000000"
        >
          <ManageProjectsSection />
        </ScrollSection>

        {/* Section 5: Video Section */}
        <ScrollSection
          id="mood-boards"
          className="section-5"
          contentAlignment="center"
          backgroundColor="#ffffff"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="section-5-video"
          >
            <source src="/FROM MOOD BOARDS (2).mp4" type="video/mp4" />
          </video>
        </ScrollSection>

        {/* Section 6: Built by Designers */}
        <ScrollSection
          id="built-by-designers"
          className="section-6"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <BuiltByDesigners />
        </ScrollSection>

        {/* Section 7: About Us */}
        <ScrollSection
          id="about-us"
          className="section-7"
          contentAlignment="center"
          backgroundColor="#1f1f1f"
        >
          <div className="about-container">
            {/* Left content */}
            <div className="about-content">
              <h2 className="about-title">About Us</h2>
              <p className="about-text">
                We&rsquo;re designers and engineer who have lived through the friction of disjointed and overpriced project management tools.
              </p>
              <p className="about-text">
                By combining design expertise with technical know-how, we created the tool we always wished existed: an intelligent sourcing platform that <span className="about-italic-underline">actually</span> understands what professional designers need.
              </p>
              <p className="about-text">
                Our mission is simple: give designers back their time so they can focus on what they do best—creating beautiful spaces.
              </p>
            </div>

            {/* Right illustration */}
            <div className="about-illustration">
              <img 
                src="/InteriorVision main website (11).png" 
                alt="Designer searching illustration" 
                className="about-image"
              />
            </div>
          </div>
        </ScrollSection>

        {/* Section 8: Learn More */}
        <ScrollSection
          id="learn-more"
          className="section-8"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <div className="learn-container">
            {/* Header */}
            <div className="learn-header">
              <h2 className="learn-title">
                Learn <span className="learn-title-italic">More</span>
              </h2>
              <p className="learn-subtitle">We&rsquo;re looking forward to hearing your feedback</p>
            </div>

            {/* Decorative circles logo */}
            <div className="learn-logo">
              <div className="learn-circle learn-circle-1"></div>
              <div className="learn-circle learn-circle-2"></div>
              <div className="learn-circle learn-circle-3"></div>
            </div>

            {/* Button grid - 2 rows x 3 columns */}
            <div className="learn-grid">
              <a href="#" className="learn-button">
                Share Feedback <span className="learn-arrow">→</span>
              </a>
              <a href="#" className="learn-button">
                Email Us <span className="learn-arrow">→</span>
              </a>
              <a href="#" className="learn-button">
                FAQ <span className="learn-arrow">→</span>
              </a>
              <a href="#" className="learn-button">
                Pricing <span className="learn-arrow">→</span>
              </a>
              <a href="#" className="learn-button">
                Blog <span className="learn-arrow">→</span>
              </a>
              <a href="#" className="learn-button">
                Roadmap <span className="learn-arrow">→</span>
              </a>
            </div>
          </div>
        </ScrollSection>
      </main>
    </>
  );
}
