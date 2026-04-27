import ScrollReveal from "../../../components/ScrollReveal";
import ParticleBackground from "../../../components/ParticleBackground";
import ContactForm from "../../../components/ContactForm";
import { getDictionary } from "../../../dictionaries";

export default async function Kontakt({ params }: { params: Promise<{ lang: 'de'|'en'|'lv' }> | { lang: 'de'|'en'|'lv' } }) {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams?.lang || 'de';
  const dict = await getDictionary(lang);
  const cnt = dict.contact_page;

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', paddingBottom: '8rem' }}>
      <ParticleBackground />
      
      {/* HEADER SECTION */}
      <section style={{ padding: '10rem 0 4rem 0', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <ScrollReveal direction="up">
            <span style={{ color: 'var(--primary-color)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
              Premium Care Access
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--secondary-color)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
              {cnt.title}
            </h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              {cnt.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM SECTION */}
      <section style={{ position: 'relative', zIndex: 20 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <ScrollReveal delay={200}>
            <ContactForm dict={cnt} />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
