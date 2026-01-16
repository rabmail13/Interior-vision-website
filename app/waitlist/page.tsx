'use client';

import { useState } from 'react';
import AnimatedEntrance from '../components/AnimatedEntrance';
import TypingText from '../components/TypingText';
import ColourfulText from '../components/ColourfulText';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="scroll-container">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>
      <section id="waitlist" className="section-2" style={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
        <div className="tagline-container" style={{ maxWidth: '800px', padding: '2rem' }}>
          <AnimatedEntrance animation="fade" duration={0.8}>
            <div className="tagline-line">
              <h2 className="tagline-text">
                <TypingText typingSpeed={20} startDelay={150}>
                  <span style={{ color: '#ffffff' }}>Join the </span><ColourfulText text="waitlist" /><span style={{ color: '#ffffff' }}> today</span>
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
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      outline: 'none',
                      opacity: loading ? 0.6 : 1
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
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      outline: 'none',
                      opacity: loading ? 0.6 : 1
                    }}
                  />
                </div>
                {error && (
                  <div style={{
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 0, 0, 0.3)',
                    borderRadius: '8px',
                    color: '#ff6b6b'
                  }}>
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    backgroundColor: loading ? '#999999' : '#d4ff00',
                    color: '#000000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease',
                    opacity: loading ? 0.6 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
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
      <Footer />
    </main>
  );
}
