import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import ParticleBackground from '@/components/ParticleBackground';

export default async function NewsDetail({ params }: { params: Promise<{ lang: 'de' | 'en' | 'lv', id: string }> | { lang: 'de' | 'en' | 'lv', id: string } }) {
  const { lang, id } = await Promise.resolve(params);
  
  const post = await prisma.post.findUnique({
    where: { id }
  });

  if (!post) {
    notFound();
  }

  // To maintain cinematic feel, use random image based on string length hash or just image014
  const images = ['/images/image004.jpg', '/images/image002.jpg', '/images/image014.jpg', '/images/mri.png'];
  const randomImg = images[post.title.length % images.length];

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <ParticleBackground />

      <section style={{ position: 'relative', paddingTop: '10rem', paddingBottom: '3rem', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <ScrollReveal direction="up">
            <Link href={`/${lang}/news`} className="interactive" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', textDecoration: 'none', marginBottom: '3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>
              <span>⟵</span> Back to Intelligence
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {new Date(post.createdAt).toLocaleDateString(lang === 'de' ? 'de-DE' : (lang === 'en' ? 'en-US' : 'lv-LV'))}
              </span>
              <span style={{ width: '3px', height: '3px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
              <span style={{ fontSize: '0.9rem', color: 'var(--primary-color)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {Math.ceil(post.content.length / 800)} Min Read
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--secondary-color)', marginBottom: '2rem', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
              {post.title}
            </h1>
          </ScrollReveal>

        </div>
      </section>

      <section style={{ position: 'relative', height: '60vh', width: '100%', marginBottom: '4rem', zIndex: 10 }}>
        <ScrollReveal direction="none" style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={randomImg} alt={post.title} fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-color), transparent)' }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg-color), transparent)' }}></div>
        </ScrollReveal>
      </section>

      <section style={{ position: 'relative', zIndex: 10, paddingBottom: '10rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <ScrollReveal direction="up">
            <div style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-light)', 
              lineHeight: 1.9, 
              whiteSpace: 'pre-wrap',
            }}>
              {/* Add a beautiful drop cap for the first letter */}
              <span style={{ 
                float: 'left', 
                fontSize: '5rem', 
                lineHeight: '4rem', 
                paddingTop: '0.8rem',
                paddingRight: '1rem', 
                color: 'var(--primary-color)', 
                fontFamily: 'var(--font-serif)' 
              }}>
                {post.content.charAt(0)}
              </span>
              {post.content.slice(1)}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
