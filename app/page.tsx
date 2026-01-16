'use client';

import { useEffect, useRef } from 'react';
import ScrollSection from './components/ScrollSection';
import TypingText from './components/TypingText';
import HighlightText from './components/HighlightText';
import FeaturesSection from './components/FeaturesSection';
import ManageProjectsSection from './components/ManageProjectsSection';
import BuiltByDesigners from './components/BuiltByDesigners';
import AnimatedEntrance, { StaggerContainer, StaggerItem } from './components/AnimatedEntrance';
import ScrollIndicator from './components/ScrollIndicator';
import JumpToTop from './components/JumpToTop';
import JumpToBottom from './components/JumpToBottom';
import Footer from './components/Footer';

export default function Home() {
  const section5VideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = section5VideoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset video to beginning and play when section comes into view
            videoElement.currentTime = 0;
            videoElement.play();
          } else {
            // Pause video when section is out of view
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of video is visible
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <JumpToTop />
      <JumpToBottom />
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
                {/* Hero image above titles */}
                <img 
                  src="/InteriorVision main website (13).png"
                  alt="Interior Vision"
                  className="hero-glasses-icon"
                />
                
                {/* Interior and Vision row */}
                <div className="hero-title-word">
                  <h1 className="hero-title no-italic hero-title-rotate-in">Interior</h1>
                  <h1 className="hero-title">
                    <TypingText>Vision</TypingText>
                  </h1>
                </div>
              </div>
              
              </div>
            </div>

            {/* Image grid area - content to be added later */}
            <div className="hero-image-grid">
            </div>
          </div>

          {/* Tagline */}
          <div className="tagline-container">
            <div className="tagline-line">
              <h2 className="tagline-text">
                <TypingText typingSpeed={20} startDelay={150}>
                  From <em>inspiration</em> to <em>implementation</em>,
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

          {/* Scroll indicator */}
          <ScrollIndicator />
        </ScrollSection>

        {/* Section 2: Key Features */}
        <ScrollSection
          id="features"
          className="section-2"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <FeaturesSection />
        </ScrollSection>

        {/* Section 3: Built by Designers */}
        <ScrollSection
          id="built-by-designers"
          className="section-3"
          contentAlignment="center"
          backgroundColor="#000000"
        >
          <BuiltByDesigners />
        </ScrollSection>

        {/* Section 4: Video Section */}
        <ScrollSection
          id="mood-boards"
          className="section-4"
          contentAlignment="center"
          backgroundColor="#e5e5e5"
        >
          <video
            ref={section5VideoRef}
            muted
            loop
            playsInline
            className="section-5-video"
          >
            <source src="/FROM MOOD BOARDS (2).mp4" type="video/mp4" />
          </video>
        </ScrollSection>

        {/* Section 5: Manage Projects */}
        <ScrollSection
          id="manage-projects"
          className="section-5"
          contentAlignment="center"
          backgroundColor="#000000"
        >
          <ManageProjectsSection />
        </ScrollSection>

        {/* Section 6: Learn More */}
        <ScrollSection
          id="learn-more"
          className="section-6"
          contentAlignment="center"
          backgroundColor="#f5f5f0"
        >
          <div className="learn-container">
            {/* Header */}
            <AnimatedEntrance animation="fadeLeft" duration={1.2}>
              <div className="learn-header">
                <h2 className="learn-title">
                  Learn <span className="learn-title-italic">More</span>
                </h2>
                <p className="learn-subtitle">We look forward to hearing from you</p>
              </div>
            </AnimatedEntrance>

            {/* Decorative circles logo */}
            <div className="learn-logo">
              <div className="learn-circle learn-circle-1"></div>
              <div className="learn-circle learn-circle-2"></div>
              <div className="learn-circle learn-circle-3"></div>
            </div>

            {/* Button grid - 1 row x 3 columns */}
            <StaggerContainer className="learn-grid" staggerDelay={0.1}>
              <StaggerItem animation="scale">
                <a href="/about" className="learn-button">
                  About <span className="learn-arrow">→</span>
                </a>
              </StaggerItem>
              <StaggerItem animation="scale">
                <a href="/blog" className="learn-button">
                  Blog <span className="learn-arrow">→</span>
                </a>
              </StaggerItem>
              <StaggerItem animation="scale">
                <a href="mailto:rachel@rhizomiclabs.ai" className="learn-button">
                  Email Us
                </a>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </ScrollSection>
        <Footer />
      </main>
    </>
  );
}
