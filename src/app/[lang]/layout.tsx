import type { Metadata } from 'next';
import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import BottomTabBar from '@/components/BottomTabBar';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Regeneration Clinic | Medizinische Exzellenz in Riga',
  description: 'Regeneration Clinic bietet moderne regenerative Behandlungen mit individueller Betreuung, innovativen Therapiekonzepten und höchster Diskretion.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams?.lang || 'de';

  return (
    <html lang={lang}>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <BottomTabBar />
        
        <main>{children}</main>

        <footer>
          <div className="footer-top">
            <div className="footer-container">
              <div className="footer-section">
                <Image 
                  src="/images/Logo-dark.jpg" 
                  alt="Regeneration Clinic Logo" 
                  width={250} 
                  height={125} 
                  style={{ marginBottom: '1.5rem', marginLeft: '-15px', objectFit: 'contain' }}
                />
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Spitzenmedizin in Riga. Fokussiert auf Ihre vollständige Genesung mit modernsten Therapiekonzepten und höchster Diskretion auf absolutem Premium-Niveau.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                  
                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  
                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  
                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>

                </div>
              </div>
              
              <div className="footer-section">
                <h4>Direktlinks</h4>
                <Link href="/">Startseite</Link>
                <Link href="/leistungen">Fachbereiche</Link>
                <Link href="/team">Medizinisches Team</Link>
                <Link href="/patienten">Kosten & Erstattung</Link>
              </div>

              <div className="footer-section">
                <h4>Kontakt</h4>
                <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '1.2rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}>📍</span>
                  <span>Jāņa Asara iela 3<br/>LV-1009 Rīga, Lettland</span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}>📞</span>
                  <span>+371 28717452</span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}>✉️</span>
                  <a href="mailto:info@regenerationclinic.eu" className="footer-email-link">info@regenerationclinic.eu</a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '2rem' }}>
              <p>&copy; {new Date().getFullYear()} Regeneration Clinic. Alle Rechte vorbehalten. | ISO 9001 zertifiziert</p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <Link href="/kontakt" className="footer-bottom-link">Impressum</Link>
                <Link href="/kontakt" className="footer-bottom-link">Datenschutz</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
