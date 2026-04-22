import Link from "next/link";
import styles from "../home.module.css";
import Image from "next/image";

export default function Leistungen() {
  return (
    <div className="fade-in">
      <section className="section" style={{ background: 'var(--bg-color)' }}>
        <div className="container">
          <h1 className="section-title">Unsere Fachbereiche & Leistungen</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
            Die Regeneration Clinic bündelt Expertise aus verschiedenen medizinischen Disziplinen, 
            um Ihnen eine ganzheitliche, hochmoderne und effiziente Behandlung zu garantieren.
          </p>

          <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr' }}>
            
            {/* Orthopädie */}
            <div className="card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 500px' }}>
                <h2 className="card-title" style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>Orthopädie & Unfallchirurgie</h2>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                  Operative Exzellenz – von Gelenkersatz bis Sportmedizin
                </h3>
                <ul className={styles.infoList}>
                  <li><strong>Endoprothetik:</strong> Hüfte, Knie, Schulter – präzise Planung, minimalinvasive OP, hochwertige Prothesen.</li>
                  <li><strong>Wirbelsäulenchirurgie:</strong> Bandscheiben, Spinalkanalstenosen, Instabilitäten – mikrochirurgisch & endoskopisch.</li>
                  <li><strong>Arthroskopie:</strong> Kreuzband, Meniskus, Knorpelrekonstruktion, Schulterchirurgie.</li>
                  <li><strong>Fuß- & Sprunggelenk:</strong> Achillessehne, Hallux valgus, Umstellungsosteotomien.</li>
                  <li><strong>Allgemeinchirurgie:</strong> Leisten- & Nabelhernien, Entfernung von Tumoren, Zysten & Abszessen.</li>
                </ul>
              </div>
            </div>

            {/* Wundambulanz */}
            <div className="card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', background: 'var(--secondary-color)', color: 'var(--white)' }}>
              <div style={{ flex: '1 1 500px' }}>
                <h2 className="card-title" style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>Wundambulanz</h2>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 500, color: '#e2e8f0' }}>
                  Schnellere Heilung durch modernste Methoden
                </h3>
                <ul className={styles.infoList} style={{ color: 'var(--white)' }}>
                  <li style={{ color: 'var(--white)' }}><strong>Fokussierter Ultraschall:</strong> aktiviert die Durchblutung, beschleunigt die Heilung.</li>
                  <li style={{ color: 'var(--white)' }}><strong>Kaltplasma-Therapie:</strong> wirkt gegen Keime, fördert Geweberegeneration (wird 2026 implementiert).</li>
                  <li style={{ color: 'var(--white)' }}><strong>Individuelle Wundpläne:</strong> maßgeschneiderte Materialien & Therapie.</li>
                  <li style={{ color: 'var(--white)' }}><strong>Interdisziplinäres Team:</strong> Medizin, Pflege & Physio Hand in Hand.</li>
                </ul>
              </div>
            </div>

            {/* Radiologie & Ernährungsmedizin */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '2rem' }}>
              <div className="card">
                <h2 className="card-title" style={{ fontSize: '1.8rem' }}>Radiologie</h2>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Präzise Diagnostik für gezielte Therapie</h3>
                <ul className={styles.infoList}>
                  <li>3,0 Tesla MRT</li>
                  <li>128-Zeiler CT & PET-CT</li>
                  <li>Spektral-CT (ab 2025)</li>
                </ul>
              </div>
              
              <div className="card">
                <h2 className="card-title" style={{ fontSize: '1.8rem' }}>Ernährungsmedizin</h2>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Wissenschaftlich fundiert – individuell umgesetzt</h3>
                <p style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>
                  In Zusammenarbeit mit dem Medical Institute for Nutrition Science and Technology (MINST) entwickeln wir Konzepte für:
                </p>
                <ul className={styles.infoList}>
                  <li>Kurzdarmsyndrom & parenterale Ernährung</li>
                  <li>Onkologische Ernährungstherapie</li>
                  <li>Mangelernährung & Malabsorption</li>
                  <li>Komplexe Stoffwechselstörungen</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
