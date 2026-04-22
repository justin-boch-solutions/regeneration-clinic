import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION (Extreme Wow Factor) */}
      <section className={styles.hero} style={{ height: '95vh', overflow: 'hidden' }}>
        {/* Parallax Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', zIndex: -2, animation: 'slowZoom 20s infinite alternate' }}>
          <Image 
            src="/images/image014.jpg" 
            alt="Premium Medical Facility" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Complex Gradient Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.95) 0%, rgba(26, 54, 93, 0.4) 60%, rgba(169, 144, 107, 0.2) 100%)', zIndex: -1 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', alignItems: 'center' }}>
          <ScrollReveal direction="up" delay={100} style={{ maxWidth: '850px', color: 'white' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', border: '1px solid rgba(169, 144, 107, 0.5)', borderRadius: '30px', color: 'var(--primary-color)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(5px)' }}>
              Ihr Weg zur Heilung
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(3.5rem, 5vw, 5.5rem)', lineHeight: 1.1, marginBottom: '2rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Medizinische <br/>
              <span style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Exzellenz</span> in Riga.
            </h1>
            <p style={{ fontSize: '1.3rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '650px', lineHeight: 1.7, fontWeight: 300 }}>
              Moderne regenerative Behandlungen, hochpräzise Diagnostik und erstklassige Betreuung. Alles aus einer Hand – auf internationalem Premium-Niveau.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '40px', boxShadow: '0 10px 25px rgba(169, 144, 107, 0.4)' }}>
                Termin anfragen
              </Link>
              <Link href="/leistungen" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '40px', borderColor: 'rgba(255,255,255,0.4)', color: 'white', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.05)' }}>
                Unsere Leistungen
              </Link>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Floating Elements (Glass UI Info Box) */}
        <ScrollReveal direction="left" delay={500} style={{ position: 'absolute', bottom: '6rem', right: '5%', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(15px)', padding: '1.5rem 2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.15)', color: 'white', maxWidth: '300px', display: 'none' }} className="desktop-only-box">
           <div style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>★ 4.9/5</div>
           <p style={{ fontSize: '0.9rem', margin: 0, opacity: 0.8 }}>"Die beste Entscheidung für meine Gesundheit. Luxuriöse Betreuung."</p>
        </ScrollReveal>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
          <div style={{ width: '30px', height: '50px', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '15px', position: 'relative' }}>
             <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '10px', background: 'var(--primary-color)', borderRadius: '2px' }}></div>
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES (Elevated Glass Cards) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', marginTop: '-80px', position: 'relative', zIndex: 20, borderRadius: '60px 60px 0 0', paddingBottom: '6rem', paddingTop: '6rem', boxShadow: '0 -20px 50px rgba(0,0,0,0.1)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Warum Regeneration Clinic?</h2>
            <p className="section-subtitle">Vier Säulen, auf denen Ihre Gesundheit und schnelle Genesung aufbauen.</p>
          </ScrollReveal>

          <div className="features-grid">
            {[
              { num: '01', title: 'Spitzenmedizin', desc: 'Topmoderne und hochqualitative Spitzenmedizin, gepaart mit High-Tech Diagnostik direkt vor Ort.' },
              { num: '02', title: 'Persöhnliche Betreuung', desc: 'Profitieren Sie von einer erstklassigen, familiären Versorgung und stets individueller Beratung.' },
              { num: '03', title: 'Erstklassige Erfahrung', desc: 'Unsere Chefärzte verfügen über die Expertise von über 7.900 erfolgreichen operativen Eingriffen.' },
              { num: '04', title: 'Absolute Diskretion', desc: 'Wir legen höchsten Wert auf Ihre Privatsphäre und bieten eine Umgebung der puren Entspannung.' }
            ].map((f, i) => (
              <ScrollReveal key={i} delay={i * 150} direction="up" className="card hover-elevate" style={{ padding: '3rem 2rem', background: 'var(--white)', borderTop: 'none', borderBottom: '4px solid var(--primary-color)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '8rem', fontFamily: 'var(--font-serif)', color: 'rgba(169, 144, 107, 0.05)', lineHeight: 1, zIndex: 0, transition: 'all 0.5s ease' }} className="bg-number">{f.num}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 'bold' }}>{f.num}</span>
                  <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VIDEO PRESENTATION (Erklärvideos) */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-color)', padding: '8rem 0', color: 'white' }}>
        <div className="container">
          <ScrollReveal direction="none" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Medizinisches Wissen verständlich erklärt</h2>
            <p style={{ color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem' }}>
              Komplexe medizinische Zusammenhänge einfach aufbereitet. In unseren Erklärvideos bringen wir Ihnen wichtige medizinische Themen näher.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200} direction="up">
            <div style={{ position: 'relative', paddingBottom: '52%', height: 0, overflow: 'hidden', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=0&mute=0&controls=1&rel=0" 
                title="Medizinisches Erklärvideo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. REVIEWS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', padding: '8rem 0', backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(169, 144, 107, 0.05) 0%, transparent 40%)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>Erfahrungsberichte</span>
              <h2 className="section-title">Stimmen unserer Patienten</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '4rem' }}>
            {[
              { text: "Unglaubliche medizinische Kompetenz! Von der ersten Diagnose am MRT bis hin zur Nachbehandlung fühlte ich mich perfekt aufgehoben.", author: "Michael T.", date: "Google Rezension" },
              { text: "Die weite Anreise nach Riga hat sich zu 100% gelohnt. Luxuriöses Ambiente und ein Standard, der weit über dem liegt, was ich aus Deutschland kenne.", author: "Sarah K.", date: "Google Rezension" },
              { text: "Man merkt, dass hier der Patient als Mensch im Fokus steht. Absolute Diskretion und medizinische Betreuung auf Weltklasseniveau. Danke!", author: "Dr. Johannes B.", date: "Google Rezension" }
            ].map((rev, i) => (
              <ScrollReveal key={i} delay={i * 150} direction="up" style={{ padding: '3rem 2.5rem', background: 'var(--white)', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', position: 'relative' }}>
                <div style={{ color: '#f59e0b', fontSize: '1.4rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  "{rev.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--secondary-color)', fontSize: '1.05rem' }}>{rev.author}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{rev.date}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GRENZÜBERSCHREITENDE VERSORGUNG (Side by side) */}
      <section className="section" style={{ backgroundColor: 'var(--white)', padding: '5rem 0 0 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          
          <ScrollReveal direction="right" style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Grenzüberschreitende<br/>Versorgung auf Premium-Niveau
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Als Patient:in aus der EU profitieren Sie von unserer Versorgung 
              gemäß EU-Richtlinie 2011/24/EU (entsprechende Kostenübernahme durch gesetzliche Krankenkassen ist möglich).
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>✧</span>
                <div>
                  <strong style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', display: 'block', marginBottom: '0.3rem' }}>High-Tech Diagnostik</strong>
                  <span style={{ color: 'var(--text-light)' }}>3,0 Tesla MRT, 128-Zeiler CT/PET-CT und Spektral-CT (ab 2025).</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>✧</span>
                <div>
                  <strong style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', display: 'block', marginBottom: '0.3rem' }}>Alles an einem Ort</strong>
                  <span style={{ color: 'var(--text-light)' }}>Komplette Diagnostik und Therapie – stationär oder ambulant auf höchstem Standard.</span>
                </div>
              </li>
            </ul>
            <Link href="/patienten" className="btn btn-outline" style={{ marginTop: '3rem', padding: '1rem 2.5rem' }}>
              Mehr zur Erstattung erfahren
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="left" style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/images/mri.png" 
                alt="High-Tech Radiologie" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Soft decorative element */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '120px', height: '120px', background: 'var(--primary-color)', zIndex: -1, borderRadius: '50%', opacity: 0.2, filter: 'blur(30px)' }}></div>
          </ScrollReveal>

        </div>
      </section>

      {/* 6. GOOGLE MAPS LOCATION (FIXED LAYOUT - Grid Sidebar) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) 2fr', gap: '2rem', background: 'var(--white)', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
            
            {/* Info Sidebar */}
            <ScrollReveal direction="right" style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>Ihr Weg zu uns</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Zentral gelegen im medizinischen Herzen von Riga. Einfach erreichbar und perfekt ausgestattet für internationale Patienten.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'var(--bg-color)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>Klinik Adresse</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.5 }}>Regeneration Clinic<br/>Jāņa Asara iela 3<br/>LV-1009 Rīga, Lettland</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'var(--bg-color)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📞</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>24/7 Kontakt</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '1rem' }}>+371 28717452</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map Frame */}
            <ScrollReveal direction="none" style={{ position: 'relative', minHeight: '500px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.642598555139!2d24.148154877372295!3d56.95488107353974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd15c898c69%3A0xa1aa42c0de1d601b!2sJ%C4%81%C5%86a%20Asara%20iela%203%2C%20Latgales%20priek%C5%A1pils%C4%93ta%2C%20R%C4%ABga%2C%20LV-1009%2C%20Lettland!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .hover-elevate:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
        }
        .hover-elevate:hover .bg-number {
          transform: translate(-10px, -10px) scale(1.1);
          color: rgba(169, 144, 107, 0.1);
        }
        @media (min-width: 1024px) {
          .desktop-only-box { display: block !important; }
        }
      `}</style>
    </>
  );
}
