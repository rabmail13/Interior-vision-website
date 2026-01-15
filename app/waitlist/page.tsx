'use client';

import { useState } from 'react';
import AnimatedEntrance from '../components/AnimatedEntrance';
import TypingText from '../components/TypingText';
import ColourfulText from '../components/ColourfulText';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual form submission logic
    setSubmitted(true);
  };

  return (
    <main className="scroll-container">
      <section id="waitlist" className="section-2" style={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="tagline-container" style={{ maxWidth: '800px', padding: '2rem' }}>
          <AnimatedEntrance animation="fade" duration={0.8}>
            <div className="tagline-line">
              <h2 className="tagline-text">
                <TypingText typingSpeed={20} startDelay={150}>
                  Join the <ColourfulText text="waitlist" /> today
                </TypingText>
              </h2>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ marginTop: '3rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    backgroundColor: '#d4ff00',
                    color: '#000000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="tagline-line" style={{ marginTop: '3rem' }}>
                <h2 className="tagline-text" style={{ fontSize: '1.5rem' }}>
                  Thank you for joining! We&rsquo;ll be in touch soon.
                </h2>
              </div>
            )}
          </AnimatedEntrance>
        </div>
      </section>
    </main>
  );
}
