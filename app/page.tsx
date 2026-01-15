import ScrollSection from './components/ScrollSection';
import RotatingText from './components/RotatingText';
import ColourfulText from './components/ColourfulText';
import TypingText from './components/TypingText';
import HighlightText from './components/HighlightText';
import FeaturesSection from './components/FeaturesSection';
import VideoPlayer from './components/VideoPlayer';
import VisualProductSection from './components/VisualProductSection';
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
              {/* Title elements wrapper - horizontal layout */}
              <div className="hero-titles-wrapper">
                {/* Left side: Titles */}
                <div className="hero-titles-left">
                  {/* Interior row: Just the Interior title */}
                  <div className="hero-title-row">
                    <div className="hero-title-word">
                      <h1 className="hero-title no-italic hero-title-rotate-in">Interior</h1>
                    </div>
                  </div>
                  {/* Vision in its own div */}
                  <div className="hero-title-word">
                    <h1 className="hero-title">
                      <TypingText startDelay={300} typingSpeed={25}>Vision</TypingText>
                    </h1>
                  </div>
                </div>
                
                {/* Right side: Try for Free button - positioned to the right */}
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

            {/* Rotating text preview - outside hero-title-block */}
            <div className="hero-rotating-wrapper">
              <RotatingText
                texts={[
                  "Design smarter, not harder.",
                  "Your vision, streamlined."
                ]}
                interval={3200}
                initialDelay={1000}
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
                <TypingText typingSpeed={12} startDelay={100}>
                  From <ColourfulText text="inspiration" /> to <ColourfulText text="implementation" />,
                </TypingText>
              </h2>
            </div>
            <div className="tagline-line">
              <h2 className="tagline-text tagline-underline">
                <HighlightText 
                  text="all in one place." 
                  delay={1100}
                  duration={600}
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

        {/* Section 4: Visual Product Search */}
        <ScrollSection
          id="visual-product-search"
          className="section-4"
          contentAlignment="center"
          backgroundColor="#000000"
        >
          <VisualProductSection />
        </ScrollSection>

        {/* Section 5: Mood Boards to Spec Sheets */}
        <ScrollSection
          id="mood-boards"
          className="section-5"
          contentAlignment="center"
          backgroundColor="#ffffff"
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <VideoPlayer src="/FROM MOOD BOARDS (2).mp4" />
          </div>
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
          backgroundColor="#2a2a2a"
        >
          <div className="about-container">
            {/* Left content */}
            <div className="about-content">
              <h2 className="about-title">About Us</h2>
              <div className="about-logo-stack">
                <div className="about-logo-oval"></div>
                <div className="about-logo-oval"></div>
                <div className="about-logo-oval"></div>
              </div>
              <p className="about-description">
                Interior Vision eliminates the  fragmented tool landscape that  slows down interior designers.
              </p>
              <p className="about-description">
                What once required mood boards, sourcing  databases, spreadsheets, and  project management software now happens in one cost-efficient platform.
              </p>
            </div>

            {/* Right image cards - stacked vertically */}
            <div className="about-cards">
              {/* Top card */}
              <div className="about-image-card about-card-top">
                <span className="about-card-placeholder">[image<br />placeholder]</span>
              </div>

              {/* Bottom card */}
              <div className="about-image-card about-card-bottom">
                <span className="about-card-placeholder">[image<br />placeholder]</span>
              </div>
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
