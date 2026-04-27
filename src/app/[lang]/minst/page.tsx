import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ParticleBackground from '@/components/ParticleBackground';
import TiltCard from '@/components/TiltCard';
import { getDictionary } from '@/dictionaries';

export default async function MinstModule({ params }: { params: Promise<{ lang: 'de' | 'en' | 'lv' }> | { lang: 'de' | 'en' | 'lv' } }) {
  const { lang } = await Promise.resolve(params);
  const dict = await getDictionary(lang) as any;
  const content = dict.minst;

  if (!content) return null;

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-color)' }}>
      
      {/* 1. HERO / ABOUT SECTION */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', paddingBottom: '4rem', zIndex: 10 }}>
        <ParticleBackground />
        
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--bg-color) 80%)', opacity: 0.8 }}></div>
        </div>

        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <ScrollReveal direction="up" delay={200}>
            <span style={{ display: 'inline-block', padding: '0.6rem 2rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', color: 'var(--primary-color)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600, borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '3rem' }}>
              {content.badge}
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={400}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--secondary-color)', marginBottom: '3rem', lineHeight: 1.1, fontFamily: 'var(--font-serif)' }}>
              {content.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '1.4rem', lineHeight: 1.8, fontFamily: 'var(--font-sans)', fontWeight: 300, marginBottom: '1.5rem' }}>
                {content.intro}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                {content.history}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. RESEARCH SECTION */}
      <section style={{ padding: '8rem 0', position: 'relative', zIndex: 20 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            
            <ScrollReveal direction="right">
              <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop" alt="Lab Research" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0,20,50,0.6), transparent)' }}></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div style={{ paddingRight: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '50px', height: '1px', background: 'var(--primary-color)' }}></div>
                  <span style={{ color: 'var(--primary-color)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600 }}>Scientific Focus</span>
                </div>
                <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '2rem', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
                  {content.research.title}
                </h2>
                <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>
                  {content.research.text}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {content.research.points && content.research.points.map((point: any, idx: number) => (
                    <div key={idx} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--primary-color)' }}>
                      <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{point.title}</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.6 }}>{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. TEACHING & PATIENT CARE */}
      <section style={{ padding: '8rem 0', position: 'relative', zIndex: 20, background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            
            {/* Order reversed visually */}
            <ScrollReveal direction="right" delay={200} style={{ order: 2 }}>
              <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop" alt="DNA Genome Precision Medicine" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" style={{ order: 1 }}>
              <div style={{ paddingLeft: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '50px', height: '1px', background: 'var(--primary-color)' }}></div>
                  <span style={{ color: 'var(--primary-color)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600 }}>Education & Care</span>
                </div>
                <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '2rem', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
                  {content.teaching.title}
                </h2>
                <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>
                  {content.teaching.text}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {content.teaching.points && content.teaching.points.map((point: any, idx: number) => (
                    <div key={idx} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--primary-color)' }}>
                      <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{point.title}</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.6 }}>{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. THE ACADEMIC TEAM */}
      <section style={{ padding: '10rem 0', position: 'relative', zIndex: 20 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <ScrollReveal direction="up">
              <h2 style={{ fontSize: '3.5rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
                {content.team.title}
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                {content.team.text}
              </p>
            </ScrollReveal>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ScrollReveal direction="up" delay={200}>
              <TiltCard className="interactive" style={{ padding: '4rem', maxWidth: '500px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '30px', backdropFilter: 'blur(10px)' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--primary-color)', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white', fontFamily: 'var(--font-serif)' }}>
                  M
                </div>
                <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                  Prof. Dr. Markus Masin
                </h3>
                <p style={{ color: 'var(--primary-color)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>
                  Institute Director
                </p>
                
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '15px' }}>
                  {content.team.team_desc}
                </p>
                
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-light)', fontSize: '0.95rem' }}>
                  <span>📍 MINST, Gertrudes iela 53, LV-1011 Riga</span>
                  <a href="mailto:m.masin@minst.lv" className="interactive" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s ease' }}>
                    ✉️ m.masin@minst.lv
                  </a>
                  <a href="https://www.minst.lv" target="_blank" rel="noopener noreferrer" className="interactive" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s ease' }}>
                    🌐 www.minst.lv
                  </a>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </section>
      
    </div>
  );
}
