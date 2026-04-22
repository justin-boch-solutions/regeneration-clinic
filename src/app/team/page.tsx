import Image from "next/image";

export default function Team() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Unser Team</h1>
          
          <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image 
              src="/images/team.png" 
              alt="Medical Team" 
              width={800} 
              height={500} 
              style={{ borderRadius: '12px', objectFit: 'cover', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            
            <div className="card">
              <h2 className="card-title" style={{ color: 'var(--primary-color)' }}>Prof. Dr. Markus Masin</h2>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-light)' }}>
                Professor für Ernährungsmedizin & Diabetologie
              </h3>
              <p>Direktor des Medical Institute for Nutrition Science and Technology (MINST)</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-light)' }}>
                <li>Verantwortlich für Forschung, medizinisch-wissenschaftliche Entwicklung und strategische Ausrichtung.</li>
                <li>Sprachen: Deutsch, Englisch, Italienisch</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title" style={{ color: 'var(--primary-color)' }}>Dr. med. Markus Gotwald</h2>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-light)' }}>
                Chefarzt für Orthopädie & Ärztlicher Direktor
              </h3>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-light)' }}>
                <li>Über 7.900 erfolgreiche Eingriffe.</li>
                <li>Spezialist für komplexe orthopädische und chirurgische Operationen.</li>
                <li>Sprachen: Deutsch, Englisch</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title" style={{ color: 'var(--primary-color)' }}>Alice Hessel</h2>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-light)' }}>
                Koordinatorin Internationales Patientenmanagement
              </h3>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-light)' }}>
                <li>Betreuung deutschsprachiger Patient:innen aus Deutschland, Österreich und der Schweiz.</li>
                <li>Sprachen: Deutsch, Englisch</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title" style={{ color: 'var(--primary-color)' }}>Marita Fogele</h2>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-light)' }}>
                Assistentin der Klinikleitung
              </h3>
            </div>

            <div className="card">
              <h2 className="card-title" style={{ color: 'var(--primary-color)' }}>Externe Fachkraft Wundmanagement</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>
                Zuständig für Organisation, Qualitätsstandards und Fachfortbildung im Wundbereich.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
