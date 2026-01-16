'use client';

import { StaggerContainer, StaggerItem } from '../components/AnimatedEntrance';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <main className="scroll-container">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>
      <section id="blog" className="section-8" style={{ backgroundColor: '#f5f5f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="learn-container">
          {/* Header */}
          <div className="learn-header">
            <h2 className="learn-title">
              Our <span className="learn-title-italic">Blog</span>
            </h2>
            <p className="learn-subtitle">Insights, tips, and inspiration for interior designers</p>
          </div>

          {/* Decorative circles logo */}
          <div className="learn-logo">
            <div className="learn-circle learn-circle-1"></div>
            <div className="learn-circle learn-circle-2"></div>
            <div className="learn-circle learn-circle-3"></div>
          </div>

          {/* Blog grid - placeholder for blog posts */}
          <StaggerContainer className="learn-grid" staggerDelay={0.1}>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Design Tips <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Industry Trends <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Case Studies <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Tool Reviews <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Tutorials <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                News <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      <Footer />
    </main>
  );
}
