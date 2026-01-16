'use client';

import { StaggerContainer, StaggerItem } from '../components/AnimatedEntrance';
import AnimatedEntrance from '../components/AnimatedEntrance';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="scroll-container">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>
      <section id="contact" className="section-8" style={{ backgroundColor: '#f5f5f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="learn-container">
          {/* Header */}
          <AnimatedEntrance animation="fadeLeft" duration={1.2}>
            <div className="learn-header">
              <h2 className="learn-title">
                Get In <span className="learn-title-italic">Touch</span>
              </h2>
              <p className="learn-subtitle">We&rsquo;re looking forward to hearing from you</p>
            </div>
          </AnimatedEntrance>

          {/* Decorative circles logo */}
          <div className="learn-logo">
            <div className="learn-circle learn-circle-1"></div>
            <div className="learn-circle learn-circle-2"></div>
            <div className="learn-circle learn-circle-3"></div>
          </div>

          {/* Contact options grid */}
          <StaggerContainer className="learn-grid" staggerDelay={0.1}>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Share Feedback <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Email Us <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                FAQ <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Support <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Schedule Call <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
            <StaggerItem animation="scale">
              <a href="#" className="learn-button">
                Partnership <span className="learn-arrow">→</span>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      <Footer />
    </main>
  );
}
