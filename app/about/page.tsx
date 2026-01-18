'use client';

import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="scroll-container">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>

      <section id="about" className="section-7" style={{ backgroundColor: '#1f1f1f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="about-container">
          {/* Left content */}
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
