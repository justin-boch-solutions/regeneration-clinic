import { getPosts } from "../../../actions/post";
import ParticleBackground from "../../../components/ParticleBackground";
import TiltCard from "../../../components/TiltCard";
import ScrollReveal from "../../../components/ScrollReveal";
import { getDictionary } from "../../../dictionaries";
import Link from "next/link";

export const revalidate = 0; // Ensures fresh data load

export default async function NewsPage({ params }: { params: Promise<{ lang: 'de'|'en'|'lv' }> | { lang: 'de'|'en'|'lv' } }) {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams?.lang || 'de';
  const dict = await getDictionary(lang);
  
  const posts = await getPosts(lang);

  // Fallback texts
  const title = lang === 'de' ? "News & Einblicke" : (lang === 'en' ? "News & Insights" : "Jaunumi un ieskati");
  const subtitle = lang === 'de' ? "Bleiben Sie auf dem neuesten Stand rund um Regeneration Clinic." : (lang === 'en' ? "Stay up to date with the latest from Regeneration Clinic." : "Esiet jaunāko ziņu centrā par Regeneration klīniku.");

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', paddingBottom: '8rem' }}>
      <ParticleBackground />

      <section style={{ padding: '10rem 0 4rem 0', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <ScrollReveal direction="up">
            <span style={{ color: 'var(--primary-color)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
              Blog
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--secondary-color)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
              {title}
            </h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              {subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* HERO SECTION / FEATURED POST */}
      <section style={{ position: 'relative', minHeight: '85vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', paddingBottom: '5rem' }}>
        {posts.length > 0 ? (
          <Link href={`/${lang}/news/${posts[0].id}`} style={{ display: 'contents', textDecoration: 'none' }} className="interactive">
            {/* Cinematic Full-Bleed Background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/image008.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7) contrast(1.1)', transform: 'scale(1.05)', transition: 'transform 10s ease-out' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-color) 0%, transparent 100%)' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 100%)' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
              <ScrollReveal direction="up" delay={200}>
                <div style={{ maxWidth: '800px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <span style={{ padding: '0.6rem 1.8rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600, borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)' }}>
                      Epicenter
                    </span>
                    <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                      {new Date(posts[0].createdAt).toLocaleDateString(lang === 'de' ? 'de-DE' : (lang === 'en' ? 'en-US' : 'lv-LV'))}
                    </span>
                  </div>
                  
                  <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'white', marginBottom: '2rem', lineHeight: 1.1, fontFamily: 'var(--font-serif)', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    {posts[0].title}
                  </h1>
                  
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.4rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '650px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {posts[0].content}
                  </p>
                  
                  <div style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', padding: '1rem 0' }}>
                    <span style={{ borderBottom: '1px solid var(--primary-color)', paddingBottom: '5px' }}>Read Experience</span>
                    <span style={{ color: 'var(--primary-color)' }}>⟶</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Link>
        ) : (
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
            <h1 style={{ fontSize: '4rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)' }}>Editorial Insight</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginTop: '1rem' }}>No stories have been published yet.</p>
          </div>
        )}
      </section>

      {/* MAGAZINE GRID */}
      {posts.length > 1 && (
        <section style={{ padding: '6rem 0 10rem 0', position: 'relative', zIndex: 20, background: 'var(--bg-color)' }}>
          <div className="container">
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)' }}>Latest Intelligence</h2>
              <div style={{ color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>View All</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
              {posts.slice(1).map((post: any, i: number) => {
                const images = ['/images/image004.jpg', '/images/image002.jpg', '/images/image014.jpg', '/images/mri.png'];
                const randomImg = images[i % images.length];

                return (
                  <ScrollReveal key={post.id} delay={i * 150} direction="up">
                    <Link href={`/${lang}/news/${post.id}`} className="interactive" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textDecoration: 'none' }}>
                      
                      <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '15px', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${randomImg})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease', transform: 'scale(1)' }} className="zoom-on-hover"></div>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }}></div>
                        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.4rem 1.2rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', color: 'white', borderRadius: '30px', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                          Medical
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <span style={{ width: '40px', height: '1px', background: 'var(--primary-color)' }}></span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
                            {new Date(post.createdAt).toLocaleDateString(lang === 'de' ? 'de-DE' : (lang === 'en' ? 'en-US' : 'lv-LV'))}
                          </span>
                        </div>
                        
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1rem', lineHeight: 1.3, fontFamily: 'var(--font-serif)', transition: 'color 0.3s ease' }}>
                          {post.title}
                        </h3>
                        
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.7, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {post.content}
                        </p>
                      </div>

                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
            
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .zoom-on-hover { transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
            .interactive:hover .zoom-on-hover { transform: scale(1.08) !important; }
            .interactive:hover h3 { color: var(--primary-color) !important; }
          `}} />
        </section>
      )}

    </div>
  );
}
