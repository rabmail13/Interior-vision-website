import ScrollSection from './components/ScrollSection';

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
              {/* Left: Logo and Coming Soon */}
              <div className="hero-logo-group">
                <div className="hero-logo-box">
                  <svg
                    className="hero-logo-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 2 22 22 22 12 2" />
                    <line x1="6" y1="16" x2="18" y2="16" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="hero-coming-soon-text">Coming</div>
                  <div className="hero-coming-soon-text">Soon</div>
                </div>
              </div>

              {/* Center: Title Block */}
              <div className="hero-title-block">
                {/* Interior row: Interior div + arrow + button */}
                <div className="hero-title-row">
                  <div className="hero-title-word">
                    <h1 className="hero-title no-italic">Interior</h1>
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
                {/* Vision in its own div */}
                <div className="hero-title-word">
                  <h1 className="hero-title">Vision</h1>
                </div>
              </div>
            </div>

            {/* 4 Image Placeholder Boxes - Responsive grid */}
            <div className="hero-image-grid">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="hero-image-card"
                >
                  <span className="hero-image-placeholder">[Image]</span>
                </div>
              ))}
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
            <h2 className="tagline-text">
              From inspiration to implementation,
              <br />
              <span className="tagline-underline">all in one place.</span>
            </h2>
          </div>
        </ScrollSection>

        {/* Section 3: Key Features */}
        <ScrollSection
          id="features"
          className="section-3"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <div className="features-container">
            <h2 className="features-heading">
              Key <span className="features-italic">Features</span>
            </h2>

            <div className="features-grid">
              {/* Feature 01 */}
              <div className="feature-card">
                <div className="feature-number">01</div>
                <h3 className="feature-title">
                  Full-Suite<br />Project Management
                </h3>
                <p className="feature-description">
                  Communicate with Clients<br />
                  Manage products, projects, &<br />
                  Clients in one interface
                </p>
              </div>

              {/* Feature 02 */}
              <div className="feature-card">
                <div className="feature-number">02</div>
                <h3 className="feature-title">
                  Intelligent Inventory<br />Management
                </h3>
                <p className="feature-description">
                  One-click save → <br />
                  organized procurement<br />
                  collections via our Browser<br />
                  Extension
                </p>
              </div>

              {/* Feature 03 */}
              <div className="feature-card">
                <div className="feature-number">03</div>
                <h3 className="feature-title">
                  Automated<br />workflows to<br />save you time
                </h3>
                <p className="feature-description">
                  Upload → AI Match<br />
                  Auto-generated spec sheets<br />
                  & deliverables
                </p>
              </div>
            </div>
          </div>
        </ScrollSection>
      </main>
    </>
  );
}
