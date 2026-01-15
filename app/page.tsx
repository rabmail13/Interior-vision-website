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

        {/* Section 4: Manage Projects */}
        <ScrollSection
          id="manage-projects"
          className="section-4"
          contentAlignment="center"
          backgroundColor="#000000"
        >
          <div className="manage-container">
            {/* Left content */}
            <div className="manage-content">
              <div className="manage-header">
                <h2 className="manage-title">
                  MANAGE YOUR<br />
                  PROJECTS IN <span className="manage-title-italic">ONE PLACE</span>
                </h2>
                <div className="manage-logo-badge">INTERIOR VISION</div>
              </div>

              <div className="manage-section">
                <div className="manage-number">01</div>
                <div className="manage-text-block">
                  <h3 className="manage-subtitle">Background</h3>
                  <p className="manage-description">
                    Interior designers waste hours juggling multiple subscriptions—mood board software, sourcing platforms, spreadsheet-based spec sheets, and project trackers.
                  </p>
                </div>
              </div>

              <div className="manage-section">
                <div className="manage-number">02</div>
                <div className="manage-text-block">
                  <h3 className="manage-subtitle">Solution</h3>
                  <p className="manage-description">
                    Replace 3-4 tool subscriptions with one platform. Eliminate spreadsheet chaos. Deliver faster, more accurate proposals to clients—and get back to designing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right devices */}
            <div className="manage-devices">
              {/* Tablet */}
              <div className="manage-device-tablet">
                <div className="manage-device-screen">
                  <div className="manage-device-sky">
                    <div className="manage-cloud manage-cloud-1"></div>
                    <div className="manage-cloud manage-cloud-2"></div>
                  </div>
                  <div className="manage-device-hills"></div>
                </div>
              </div>

              {/* Phone */}
              <div className="manage-device-phone">
                <div className="manage-device-notch"></div>
                <div className="manage-device-screen-small">
                  <div className="manage-device-sky-small">
                    <div className="manage-cloud-small"></div>
                  </div>
                  <div className="manage-device-hills-small"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Section 5: Mood Boards to Spec Sheets */}
        <ScrollSection
          id="mood-boards"
          className="section-5"
          contentAlignment="center"
          backgroundColor="#ffffff"
        >
          <div className="mood-container">
            {/* Title with arrow */}
            <div className="mood-header">
              <span className="mood-title-text">From</span>
              <span className="mood-title-italic">Mood Boards</span>
              <svg
                className="mood-arrow"
                viewBox="0 0 100 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="0" y1="12" x2="90" y2="12" />
                <polyline points="85 8 90 12 85 16" />
              </svg>
              <span className="mood-title-text">to</span>
              <span className="mood-title-italic">Spec Sheets</span>
            </div>

            {/* Video placeholder box */}
            <div className="mood-video-box">
              <span className="mood-video-placeholder">[video placeholder]</span>
            </div>
          </div>
        </ScrollSection>

        {/* Section 6: Built by Designers */}
        <ScrollSection
          id="built-by-designers"
          className="section-6"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <div className="built-container">
            <h2 className="built-heading">
              Built by Designers, <span className="built-italic">For Designers.</span>
            </h2>
            <div className="built-subtext">
              <p className="built-line">No gimicks.</p>
              <p className="built-line">No overpriced subscriptions.</p>
            </div>
          </div>
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
              <h2 className="about-title">About <span className="about-title-italic">Us</span></h2>
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
