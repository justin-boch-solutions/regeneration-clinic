import Image from "next/image";
import Link from "next/link";
import styles from "../home.module.css";
import ScrollReveal from "../../components/ScrollReveal";
import TiltCard from "../../components/TiltCard";
import AnimatedCounter from "../../components/AnimatedCounter";
import ParticleBackground from "../../components/ParticleBackground";
import ImageComparisonSlider from "../../components/ImageComparisonSlider";
import Magnetic from "../../components/Magnetic";
import { getDictionary } from "../../dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: 'de'|'en'|'lv' }> | { lang: 'de'|'en'|'lv' } }) {
  // Await params if it's a promise (Next.js 15+ pattern) or use directly
  const { lang } = await Promise.resolve(params);
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="ambient-orb" style={{ width: '400px', height: '400px', top: '10%', left: '-100px', background: 'var(--primary-color)' }}></div>
      <div className="ambient-orb" style={{ width: '500px', height: '500px', top: '40%', right: '-150px', background: 'var(--secondary-color)', animationDelay: '-5s' }}></div>

      {/* 1. HERO SECTION (Extreme Wow Factor) */}
      <section className={styles.hero} style={{ minHeight: '100svh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Parallax Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', zIndex: -2, animation: 'slowZoom 20s infinite alternate' }}>
          <Image 
            src="/images/image014.jpg" 
            alt="Premium Medical Facility" 
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Complex Gradient Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.95) 0%, rgba(26, 54, 93, 0.4) 60%, rgba(169, 144, 107, 0.2) 100%)', zIndex: -1 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', alignItems: 'center' }}>
          <ScrollReveal direction="up" delay={100} style={{ maxWidth: '850px', color: 'white' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', border: '1px solid rgba(169, 144, 107, 0.5)', borderRadius: '30px', color: 'var(--primary-color)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(5px)' }}>
              {dict.hero.badge}
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.1, marginBottom: '2rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              {dict.hero.title1} <br/>
              <span style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{dict.hero.title2}</span> {dict.hero.title3}
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', marginBottom: '3rem', opacity: 0.9, maxWidth: '650px', lineHeight: 1.7, fontWeight: 300 }}>
              {dict.hero.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Magnetic strength={0.2} radius={80}>
                <Link href={`/${lang}/kontakt`} className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '40px', boxShadow: '0 10px 25px rgba(169, 144, 107, 0.4)' }}>
                  {dict.hero.cta_primary}
                </Link>
              </Magnetic>
              <Magnetic strength={0.2} radius={80}>
                <Link href={`/${lang}/leistungen`} className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '40px', borderColor: 'rgba(255,255,255,0.4)', color: 'white', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.05)' }}>
                  {dict.hero.cta_secondary}
                </Link>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Floating Elements (Glass UI Info Box) */}
        <ScrollReveal direction="left" delay={500} style={{ position: 'absolute', bottom: '6rem', right: '5%', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(15px)', padding: '1.5rem 2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.15)', color: 'white', maxWidth: '300px', display: 'none' }} className="desktop-only-box interactive">
           <div style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '0.2rem', fontFamily: 'var(--font-serif)' }}>
             <AnimatedCounter end={99} suffix="%" duration={2500} />
           </div>
           <p style={{ fontSize: '0.9rem', margin: 0, opacity: 0.8 }}>{dict.hero.stats_text}</p>
        </ScrollReveal>
      </section>

      {/* TRUST MARQUEE */}
      <div className="marquee-container interactive">
        <div className="marquee-content">
          {dict.marquee.map((text, idx) => (
            <span key={idx}>
              <div className="marquee-item">{text}</div>
            </span>
          ))}
        </div>
      </div>

      {/* FACTS & FIGURES SECTION (Animated Counters) */}
      <section className="section interactive" style={{ backgroundColor: 'var(--white)', paddingBottom: '3rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
           <div>
             <div style={{ fontSize: '4rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)', fontWeight: 'bold' }}>
               <AnimatedCounter end={15} suffix="+" duration={2000} />
             </div>
             <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{dict.stats.years}</p>
           </div>
           <div>
             <div style={{ fontSize: '4rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)', fontWeight: 'bold' }}>
               <AnimatedCounter end={7900} suffix="+" duration={3000} />
             </div>
             <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{dict.stats.surgeries}</p>
           </div>
           <div>
             <div style={{ fontSize: '4rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)', fontWeight: 'bold' }}>
               <AnimatedCounter end={3} suffix=".0" duration={1500} />
             </div>
             <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{dict.stats.tesla}</p>
           </div>
        </div>
      </section>

      {/* 2. CORE FEATURES (Elevated Glass Cards with 3D Tilt) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 20, paddingBottom: '8rem', paddingTop: '6rem' }}>
        <ParticleBackground />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <ScrollReveal>
            <h2 className="section-title">{dict.features.title}</h2>
            <p className="section-subtitle">{dict.features.subtitle}</p>
          </ScrollReveal>

          <div className="features-grid">
            {dict.features.items.map((f, i) => (
              <ScrollReveal key={i} delay={i * 150} direction="up" style={{ height: '100%' }}>
                <TiltCard className="card hover-elevate interactive" style={{ padding: '3rem 2rem', background: 'var(--white)', borderTop: 'none', borderBottom: '4px solid var(--primary-color)', position: 'relative', overflow: 'hidden', height: '100%', cursor: 'none' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '8rem', fontFamily: 'var(--font-serif)', color: 'rgba(169, 144, 107, 0.05)', lineHeight: 1, zIndex: 0, transition: 'all 0.5s ease' }} className="bg-number">0{i+1}</div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 'bold' }}>0{i+1}</span>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{f.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW SECTION (With 3D Image Tilt) */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <ScrollReveal direction="right">
            <div style={{ position: 'relative', background: 'var(--bg-color)', borderRadius: '30px', padding: '4rem 3rem' }}>
              <div style={{ fontSize: '4rem', color: 'var(--primary-color)', lineHeight: 0.5, marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>"</div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem', lineHeight: 1.4, fontStyle: 'italic' }}>
                {dict.team_preview.quote}
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
                <strong style={{ color: 'var(--secondary-color)', display: 'block' }}>{dict.team_preview.name}</strong>
                {dict.team_preview.role}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" style={{ position: 'relative', height: '400px', width: '100%', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', overflow: 'hidden' }} className="interactive">
            <Image 
              src="/images/image010.jpg" 
              alt="Medizinisches Team" 
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* PATIENT JOURNEY TIMELINE (Harmonious 2-Column Layout) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', position: 'relative' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>{dict.journey.subtitle}</span>
              <h2 className="section-title">{dict.journey.title}</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Visual Anchor (Sticky Image) */}
            <ScrollReveal direction="right" style={{ position: 'sticky', top: '120px' }} className="desktop-only-sticky">
              <div style={{ position: 'relative', width: '100%', minHeight: '600px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                <Image 
                  src="/images/image011.jpg" 
                  alt="Patientenbetreuung" 
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26, 54, 93, 0.8), transparent 50%)' }}></div>
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: 'white' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'white' }}>Exzellenz in jedem Schritt</h3>
                  <p style={{ opacity: 0.9, fontSize: '1rem', margin: 0 }}>Von der ersten Beratung bis zur vollständigen Genesung begleiten wir Sie persönlich.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Timeline Column */}
            <div className="timeline" style={{ margin: '0' }}>
              {dict.journey.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 150} direction="up" className="timeline-item interactive">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'block' }}>{dict.journey.step_prefix} 0{i+1}</span>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. VIDEO PRESENTATION (Erklärvideos) */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-color)', padding: '8rem 0', color: 'white' }}>
        <div className="container">
          <ScrollReveal direction="none" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>{dict.video.title}</h2>
            <p style={{ color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem' }}>
              {dict.video.desc}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200} direction="up">
            <div style={{ position: 'relative', paddingBottom: '52%', height: 0, overflow: 'hidden', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }} className="interactive">
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/iADW6FvFP7E?si=m68PQeVUeg07RSOP&autoplay=0&mute=0&controls=1&rel=0" 
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
      <section className="section" style={{ backgroundColor: 'var(--white)', padding: '8rem 0', backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(169, 144, 107, 0.05) 0%, transparent 40%)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>{dict.reviews.subtitle}</span>
              <h2 className="section-title">{dict.reviews.title}</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginTop: '4rem' }}>
            {dict.reviews.items.map((rev, i) => (
              <ScrollReveal key={i} delay={i * 150} direction="up" style={{ padding: '3rem 2.5rem', background: 'var(--bg-color)', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', position: 'relative' }} className="interactive">
                <div style={{ color: '#f59e0b', fontSize: '1.4rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  "{rev.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--white)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
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
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', padding: '5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          
          <ScrollReveal direction="right" style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 7vw, 3rem)', color: 'var(--secondary-color)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              {dict.premium_care.title1}<br/>{dict.premium_care.title2}
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              {dict.premium_care.desc}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {dict.premium_care.features.map((feat, idx) => (
                <li key={idx} style={{ marginBottom: idx === 0 ? '1.5rem' : '0', display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>✧</span>
                  <div>
                    <strong style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', display: 'block', marginBottom: '0.3rem' }}>{feat.title}</strong>
                    <span style={{ color: 'var(--text-light)' }}>{feat.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link href={`/${lang}/patienten`} className="btn btn-outline" style={{ marginTop: '3rem', padding: '1rem 2.5rem' }}>
              {dict.premium_care.cta}
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="left" style={{ flex: '1 1 400px', position: 'relative' }} className="interactive">
            <ImageComparisonSlider 
               beforeImage="/images/image008.jpg" 
               afterImage="/images/mri.png" 
            />
            <div className="ambient-orb" style={{ width: '200px', height: '200px', bottom: '-50px', left: '-50px', background: 'var(--primary-color)', zIndex: -1 }}></div>
          </ScrollReveal>

        </div>
      </section>

      {/* 6. GOOGLE MAPS LOCATION (FIXED LAYOUT - Grid Sidebar) */}
      <section className="section" style={{ backgroundColor: 'var(--white)', padding: '8rem 0' }}>
        <div className="container">
          <div className="map-grid-container" style={{ background: 'var(--bg-color)', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
            
            {/* Info Sidebar */}
            <ScrollReveal direction="right" style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{dict.map.title}</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {dict.map.desc}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'var(--white)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid var(--border-color)' }}>📍</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>{dict.map.address_title}</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.5 }}>
                      {dict.map.address_line1}<br/>{dict.map.address_line2}<br/>{dict.map.address_line3}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'var(--white)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid var(--border-color)' }}>📞</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>{dict.map.contact_title}</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '1rem' }}>+371 28717452</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map Frame */}
            <ScrollReveal direction="none" style={{ position: 'relative', minHeight: '350px' }} className="interactive">
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

      {/* STICKY CTA REMOVED AS REQUESTED */}

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
