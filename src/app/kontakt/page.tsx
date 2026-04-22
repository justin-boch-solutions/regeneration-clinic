export default function Kontakt() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Kontakt & Impressum</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="card">
              <h2 className="card-title" style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>Kontaktieren Sie uns</h2>
              
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>Telefon</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>+371 28717452</p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>E-Mail</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                  <a href="mailto:info@regenerationclinic.eu" style={{ textDecoration: 'underline' }}>info@regenerationclinic.eu</a>
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>Adresse</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginTop: '0.5rem', lineHeight: 1.6 }}>
                  Regeneration Clinic<br/>
                  Jāņa Asara iela 3<br/>
                  LV-1009 Rīga<br/>
                  Lettland
                </p>
              </div>
            </div>

            <div className="card" style={{ background: 'var(--bg-color)' }}>
              <h2 className="card-title" style={{ fontSize: '1.8rem' }}>Impressum & Rechtliches</h2>
              
              <div style={{ marginTop: '2rem' }}>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>
                  <strong>Regeneration Clinic</strong><br/>
                  Registration No.: 40203593175<br/>
                  Health Institution Code: 001000289
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  Verantwortlich für den Inhalt:<br/>
                  Prof. Dr. Markus Masin
                </p>
              </div>

              <div style={{ marginTop: '3rem', width: '100%', height: '250px', background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#94a3b8' }}>[Karten-Integration (z.B. Google Maps)]</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
