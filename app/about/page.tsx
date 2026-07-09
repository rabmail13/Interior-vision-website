import TopNavbar from '../components/TopNavbar';

export default function AboutPage() {

  return (
    <main className="scroll-container">
      <div className="top-navbar-static">
        <TopNavbar />
      </div>

      <section id="about" className="section-7" style={{ backgroundColor: '#1f1f1f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 4rem', boxSizing: 'border-box' }}>
          {/* Content */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="about-title" style={{ marginBottom: '1rem' }}>About</h2>
            <p className="about-text">
              We started by building an all-in-one platform for interior designers and hobbists - mood boards, spec sheets, client approvals, timelines, and invoicing in one place, so studios could ditch scattered spreadsheets and run every project from concept to completion.
            </p>
            <p className="about-text">
              Then our research surfaced something bigger: everyday people and business owners want to design and shop for their spaces themselves—but the tools available to them fall painfully short.
            </p>
            <p className="about-text">
              So we built Interior Vision, an AI-powered design platform that puts professional-grade tools in everyone's hands. It turns your boards into style profiles, floor plans into custom layouts, and inspiration into shoppable product lists, all in just seconds. What used to require hiring a pro or hours of manual curation can now be done in a fraction of the time, by anyone.
            </p>
            <p className="about-text">
              Whether you're a renter styling your first apartment, a homeowner refreshing a room, or an entrepreneur designing your barbershop, tattoo studio, or salon, Interior Vision is flexible, affordable, and built for how people actually create spaces today.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
