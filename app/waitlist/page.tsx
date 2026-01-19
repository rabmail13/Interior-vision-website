'use client';

import { useState } from 'react';
import AnimatedEntrance from '../components/AnimatedEntrance';
import TypingText from '../components/TypingText';
import ColourfulText from '../components/ColourfulText';
import TopNavbar from '../components/TopNavbar';

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
            {!submitted && (
              <div className="tagline-line">
                <h2 className="tagline-text">
                  <TypingText typingSpeed={20} startDelay={150}>
                    <span style={{ color: '#ffffff' }}>Join the </span><ColourfulText text="waitlist" /><span style={{ color: '#ffffff' }}> today</span>
                  </TypingText>
                </h2>
              </div>
            )}

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
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <div style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(212, 255, 0, 0.1)',
                  border: '1px solid rgba(212, 255, 0, 0.3)',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
                  <h2 style={{ fontSize: '1.5rem', color: '#ffffff', margin: 0 }}>
                    You&rsquo;re on the list!
                  </h2>
                  <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>
                    We&rsquo;ll be in touch soon.
                  </p>
                </div>
              </div>
            )}
          </AnimatedEntrance>
        </div>
      </section>
    </main>
  );
}
