export default function Patienten() {
  return (
    <div className="fade-in">
      <section className="section" style={{ background: 'var(--bg-color)' }}>
        <div className="container">
          <h1 className="section-title">Patienteninformationen</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '3rem' }}>
            
            <div className="card">
              <h2 className="card-title" style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>
                Flexible Abrechnung
              </h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                Wir bieten verschiedene Abrechnungsmodelle, damit Sie sich bestmöglich auf Ihre Genesung konzentrieren können.
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Gesetzlich Versicherte</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Behandlung & Erstattung nach EU-Richtlinie 2011/24/EU zur Ausübung der Patientenrechte in der grenzüberschreitenden Gesundheitsversorgung.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Privatversicherte</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Persönliche Unterstützung bei der Kostenübernahme und der Einreichung von Dokumenten.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Selbstzahler</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Transparente Preise und eine umfassende Beratung im Vorfeld jeder Behandlung.
                </p>
              </div>
            </div>

            <div className="card" style={{ background: 'var(--secondary-color)', color: 'var(--white)' }}>
              <h2 className="card-title" style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>
                Unsere Zukunftspläne ab November 2026
              </h2>
              <p style={{ marginBottom: '1.5rem', color: '#e2e8f0' }}>
                Wir entwickeln uns stetig weiter, um Ihnen eine noch umfassendere und innovativere medizinische Versorgung zu bieten.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: '#e2e8f0', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '1rem' }}>Erweiterung auf <strong>60 stationäre Betten</strong> für noch mehr Behandlungskapazität.</li>
                <li style={{ marginBottom: '1rem' }}>Umfassender <strong>Ausbau der Poliklinik</strong> für ambulante Behandlungen.</li>
                <li>Implementierung eigener hochmoderner Geräte: <strong>Spektral-CT & 3,0 Tesla MRT</strong>.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
