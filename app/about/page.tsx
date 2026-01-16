'use client';

import AnimatedEntrance from '../components/AnimatedEntrance';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="scroll-container">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>
      {/* Status Quo Section */}
      <section className="section-status-quo" style={{ backgroundColor: '#f5f3f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', alignItems: 'center', gap: '80px' }}>
          {/* Left - Title */}
          <AnimatedEntrance animation="fade" duration={0.8} threshold={0.3}>
            <div style={{ flex: '0 0 300px' }}>
              <h2 style={{ fontSize: '72px', fontWeight: '400', lineHeight: '1.1', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                Status<br />Quo
              </h2>
            </div>
          </AnimatedEntrance>

          {/* Center - Image */}
          <div style={{ flex: '0 0 auto' }}>
            <img
              src="/Product or Service.png"
              alt="Interior design living room"
              style={{ width: '280px', height: 'auto', objectFit: 'cover' }}
            />
          </div>

          {/* Right - Content */}
          <AnimatedEntrance animation="fade" duration={0.8} threshold={0.3} delay={0.2}>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#1f1f1f', marginBottom: '32px', fontFamily: 'EB Garamond, serif' }}>
                Interior designers convert creative concepts into <span style={{ fontStyle: 'italic' }}>spec sheets</span>: Precise, order-ready instructions that govern the purchasing end of client delivery.
              </p>
              <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#1f1f1f', marginBottom: '16px', fontFamily: 'EB Garamond, serif' }}>
                The process of building a spec sheets is:
              </p>
              <ul style={{ fontSize: '20px', lineHeight: '1.8', color: '#1f1f1f', marginBottom: '32px', paddingLeft: '24px', fontFamily: 'EB Garamond, serif' }}>
                <li style={{ fontStyle: 'italic' }}>Manual</li>
                <li style={{ fontStyle: 'italic' }}>Repetitive</li>
                <li style={{ fontStyle: 'italic' }}>Error-prone</li>
              </ul>
              <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                Current software offerings <span style={{ fontStyle: 'italic' }}>should</span> relieve these pain points, but instead, <span style={{ fontWeight: '600' }}>exacerbate them</span> with unreliable features and predatory subscription costs.
              </p>
            </div>
          </AnimatedEntrance>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section-solution" style={{ backgroundColor: '#fafafa', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          {/* Header with image */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px' }}>
            <div style={{ flex: '0 0 auto' }}>
              <img
                src="/Product or Service (2).png"
                alt="Interior design bedroom"
                style={{ width: '400px', height: 'auto', objectFit: 'cover' }}
              />
            </div>
            <AnimatedEntrance animation="fade" duration={0.8} threshold={0.3}>
              <h2 style={{ fontSize: '72px', fontWeight: '400', lineHeight: '1.1', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                The Solution
              </h2>
            </AnimatedEntrance>
          </div>

          {/* Three columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
            <AnimatedEntrance animation="fade" duration={0.8} threshold={0.3} delay={0.1}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                  Intelligent, Collaborative<br />Client Interfaces
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                  Transforms mood boards into actual purchasable products in real-time, aligned with the client's taste, budget, and availability
                </p>
              </div>
            </AnimatedEntrance>

            <AnimatedEntrance animation="fade" duration={0.8} threshold={0.3} delay={0.2}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                  Continuous, Reliable Price<br />Tracking
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                  Our browser plugin lets designers save any product with continuous monitoring of price, availability, and variants.
                </p>
              </div>
            </AnimatedEntrance>

            <AnimatedEntrance animation="fade" duration={0.8} threshold={0.3} delay={0.3}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                  Affordable for Any Designer
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1f1f1f', fontFamily: 'EB Garamond, serif' }}>
                  Optimized for independent designers and small firms typically priced out of "all-in-one" suites
                </p>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      <section id="about" className="section-7" style={{ backgroundColor: '#1f1f1f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="about-container">
          {/* Left content */}
          <AnimatedEntrance animation="fade" duration={0.8} threshold={0.3}>
            <div className="about-content">
              <h2 className="about-title">About Us</h2>
              <p className="about-text">
                Interior Vision was created by a designers and engineers who have lived through the friction of disjointed and overpriced project management tools.
              </p>
              <p className="about-text">
                By combining design expertise with technical know-how, we created the tool we always wished existed: an intelligent sourcing platform that <span className="about-italic-underline">actually</span> understands what professional designers need.
              </p>
              <p className="about-text">
                Our mission is simple: give designers back their time so they can focus on what they do best—creating beautiful spaces.
              </p>
            </div>
          </AnimatedEntrance>

          {/* Right illustration */}
          <div className="about-illustration">
            <img
              src="/InteriorVision main website (11).png"
              alt="Designer searching illustration"
              className="about-image"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
