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
            <h2 className="about-title" style={{ marginBottom: '1rem' }}>About Us</h2>
            <p className="about-text">
              Our vision started as an all-in-one project management and specification platform built for interior designers and architects. It included interfaces for mood boards, specification sheets, client approvals, project timelines, and invoicing so studios can ditch the scattered spreadsheets and run everything from concept to completion in one seamlessly designed place.
            </p>
            <p className="about-text">
              After further market research, we found that everyday people and business owners (non designers / architects) have a strong desire for self-service design and procurement tools. However, the existing apps on the market are woefully insufficient.
            </p>
            <p className="about-text">
              Recognizing this massive need in the market, we expanded our vision to create Interior Vision, an AI-powered design acceleration platform that puts professional-grade tools directly into the hands of everyday users. By transforming Pinterest boards into identified style profiles, floor plans into custom layouts, and inspiration into shoppable product lists in seconds, we're democratizing a process that used to require hiring a professional or hours of manual curation. Whether it's a renter styling their first apartment, a homeowner refreshing a single room, or an entrepreneur designing their barbershop, tattoo studio, or salon, Interior Vision delivers flexible, affordable, and genuinely intuitive design tools built for how people actually create spaces today.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
