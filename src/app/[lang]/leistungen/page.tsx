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
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          
          {/* DIAGNOSTICS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <ScrollReveal direction="left" style={{ position: 'relative', height: '500px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                <Image src="/images/mri.png" alt="High-Tech Diagnostik" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
            </ScrollReveal>
            
            <div>
              <ScrollReveal direction="up" style={{ marginBottom: '2rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>01.</span>
                <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                  {srv.categories.diagnostics.title}
                </h2>
                <div style={{ height: '3px', width: '50px', background: 'var(--primary-color)', marginBottom: '3rem' }}></div>
              </ScrollReveal>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {srv.categories.diagnostics.items.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 150} direction="up">
                    <TiltCard className="card interactive" style={{ padding: '2.5rem', background: 'var(--white)', borderLeft: '4px solid var(--primary-color)' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{item.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* THERAPY (Alternating) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
            <ScrollReveal direction="right" style={{ position: 'relative', height: '500px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', direction: 'ltr' }}>
                <Image src="/images/image002.jpg" alt="Regenerative Therapie" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
            </ScrollReveal>
            
            <div style={{ direction: 'ltr' }}>
              <ScrollReveal direction="up" style={{ marginBottom: '2rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>02.</span>
                <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                  {srv.categories.therapy.title}
                </h2>
                <div style={{ height: '3px', width: '50px', background: 'var(--primary-color)', marginBottom: '3rem' }}></div>
              </ScrollReveal>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {srv.categories.therapy.items.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 150} direction="up">
                    <TiltCard className="card interactive" style={{ padding: '2.5rem', background: 'var(--white)', borderLeft: '4px solid var(--primary-color)' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{item.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* SURGERY */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <ScrollReveal direction="left" style={{ position: 'relative', height: '500px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                <Image src="/images/image014.jpg" alt="Operative Eingriffe" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
            </ScrollReveal>
            
            <div>
              <ScrollReveal direction="up" style={{ marginBottom: '2rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>03.</span>
                <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                  {srv.categories.surgery.title}
                </h2>
                <div style={{ height: '3px', width: '50px', background: 'var(--primary-color)', marginBottom: '3rem' }}></div>
              </ScrollReveal>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {srv.categories.surgery.items.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 150} direction="up">
                    <TiltCard className="card interactive" style={{ padding: '2.5rem', background: 'var(--white)', borderLeft: '4px solid var(--primary-color)' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{item.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
