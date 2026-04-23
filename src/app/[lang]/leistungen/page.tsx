import ScrollReveal from "../../../components/ScrollReveal";
import TiltCard from "../../../components/TiltCard";
import ParticleBackground from "../../../components/ParticleBackground";
import Image from "next/image";
import { getDictionary } from "../../../dictionaries";

export default async function Leistungen({ params }: { params: Promise<{ lang: 'de'|'en'|'lv' }> | { lang: 'de'|'en'|'lv' } }) {
  const { lang } = await Promise.resolve(params);
  const dict = await getDictionary(lang);
  const srv = dict.services_page;

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground />
      
      {/* HEADER SECTION */}
      <section style={{ padding: '12rem 0 6rem 0', textAlign: 'center', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <ScrollReveal direction="up">
            <span style={{ color: 'var(--primary-color)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
              Regeneration Clinic
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--secondary-color)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
              {srv.title}
            </h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              {srv.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section style={{ padding: '4rem 0 8rem 0', position: 'relative', zIndex: 20 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          
          {/* DIAGNOSTICS */}
          <div style={{ position: 'relative' }}>
            <ScrollReveal direction="none" style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>✧</span> {srv.categories.diagnostics.title}
              </h2>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              
              <ScrollReveal direction="right" style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
                <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: '15px', overflow: 'hidden' }}>
                    <Image src="/images/mri.png" alt="High-Tech Diagnostik" fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}></div>
                </div>
              </ScrollReveal>

              {srv.categories.diagnostics.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 150} direction="up">
                  <TiltCard className="card interactive" style={{ padding: '3rem 2.5rem', height: '100%', background: 'var(--white)' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{item.name}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* THERAPY */}
          <div style={{ position: 'relative' }}>
            <ScrollReveal direction="none" style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>✧</span> {srv.categories.therapy.title}
              </h2>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              <ScrollReveal direction="right" style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
                  <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: '15px', overflow: 'hidden' }}>
                      <Image src="/images/image002.jpg" alt="Regenerative Therapie" fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                  </div>
              </ScrollReveal>
                
              {srv.categories.therapy.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 150} direction="up">
                  <TiltCard className="card interactive" style={{ padding: '3rem 2.5rem', height: '100%', background: 'var(--white)' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{item.name}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* SURGERY */}
          <div style={{ position: 'relative' }}>
            <ScrollReveal direction="none" style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>✧</span> {srv.categories.surgery.title}
              </h2>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              <ScrollReveal direction="right" style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
                  <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: '15px', overflow: 'hidden' }}>
                      <Image src="/images/image014.jpg" alt="Operative Eingriffe" fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                  </div>
              </ScrollReveal>

              {srv.categories.surgery.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 150} direction="up">
                  <TiltCard className="card interactive" style={{ padding: '3rem 2.5rem', height: '100%', background: 'var(--white)' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{item.name}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
