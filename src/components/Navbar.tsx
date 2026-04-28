"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Magnetic from "./Magnetic";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const lang = (pathname ? pathname.split('/')[1] : 'de') as 'de' | 'en' | 'lv';

  const navDict = {
    de: { home: "Startseite", services: "Leistungen", team: "Unser Team", patients: "Patienteninfo", contact: "Termin vereinbaren", minst: "MINST Institute" },
    en: { home: "Home", services: "Services", team: "Our Team", patients: "Patient Info", contact: "Book Appointment", minst: "MINST Institute" },
    lv: { home: "Sākums", services: "Pakalpojumi", team: "Mūsu Komanda", patients: "Pacientiem", contact: "Pieteikties Vizītei", minst: "MINST Institūts" }
  };
  const t = navDict[lang] || navDict.de;

  const switchLanguage = (newLang: string) => {
    // Replace the language segment in the URL
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLang; // e.g. ["", "de", "leistungen"] -> ["", "en", "leistungen"]
    router.push(segments.join('/'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="/images/Logo-light.jpg" 
            alt="Regeneration Clinic Logo" 
            width={180} 
            height={90} 
            priority
            style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
          />
        </Link>

        {/* RIGHT SIDE NAV CONTAINER */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          
          {/* Desktop Links (Hidden on Mobile) */}
          <div className="desktop-links">
            <Link href={`/${lang}/`}>{t.home}</Link>
            <Link href={`/${lang}/leistungen`}>{t.services}</Link>
            <Link href={`/${lang}/team`}>{t.team}</Link>
            <Link href={`/${lang}/news`}>{lang === 'de' ? 'News' : lang === 'en' ? 'News' : 'Jaunumi'}</Link>
            <Link href={`/${lang}/patienten`}>{t.patients}</Link>
            
            <Magnetic strength={0.3} radius={60}>
              <Link href={`/${lang}/kontakt`} className="btn btn-primary" style={{ padding: '0.6rem 2rem', borderRadius: '30px', display: 'inline-block' }}>
                {t.contact}
              </Link>
            </Magnetic>
          </div>

          {/* Global Nav Actions (Visible Everywhere) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ThemeToggle />
            <select 
              value={lang} 
              onChange={(e) => switchLanguage(e.target.value)}
              style={{ appearance: 'none', background: 'transparent', border: '1px solid var(--border-color)', padding: '0.3rem 0.6rem', borderRadius: '20px', fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500, color: 'var(--secondary-color)' }}
            >
              <option value="de">DE</option>
              <option value="en">EN</option>
              <option value="lv">LV</option>
            </select>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Menu */}
        <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          <Link href={`/${lang}/`} onClick={() => setIsOpen(false)}>{t.home}</Link>
          <Link href={`/${lang}/leistungen`} onClick={() => setIsOpen(false)}>{t.services}</Link>
          <Link href={`/${lang}/team`} onClick={() => setIsOpen(false)}>{t.team}</Link>
          <Link href={`/${lang}/news`} onClick={() => setIsOpen(false)}>{lang === 'de' ? 'News' : lang === 'en' ? 'News' : 'Jaunumi'}</Link>
          <Link href={`/${lang}/patienten`} onClick={() => setIsOpen(false)}>{t.patients}</Link>
          <Link href={`/${lang}/kontakt`} className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '0.8rem 2rem', borderRadius: '30px', marginTop: '1rem' }}>
            {t.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
}
