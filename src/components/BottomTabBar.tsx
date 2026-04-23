"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HapticClick from "./HapticClick";

export default function BottomTabBar() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (!isMobile) return null;

  const lang = (pathname ? pathname.split('/')[1] : 'de') as 'de' | 'en' | 'lv';

  const navDict = {
    de: { home: "Home", services: "Leistungen", team: "Team", contact: "Kontakt" },
    en: { home: "Home", services: "Services", team: "Team", contact: "Contact" },
    lv: { home: "Sākums", services: "Maksas", team: "Komanda", contact: "Kontakti" }
  };
  const t = navDict[lang] || navDict.de;

  const tabs = [
    { 
      name: t.home, 
      path: `/${lang}/`, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    },
    { 
      name: t.services, 
      path: `/${lang}/leistungen`, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    },
    { 
      name: t.team, 
      path: `/${lang}/team`, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    { 
      name: t.contact, 
      path: `/${lang}/kontakt`, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    }
  ];

  return (
    <>
      {/* Spacer to prevent content from hiding behind the tab bar */}
      <div style={{ height: "80px", width: "100%", display: "block" }}></div>
      
      <nav 
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderTop: "1px solid rgba(0,0,0,0.05)",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0 25px 0", // Extra bottom padding for iPhone indicator bar
          zIndex: 9999,
          boxShadow: "0 -5px 20px rgba(0,0,0,0.03)"
        }}
      >
        {tabs.map((tab) => {
          const isActive = pathname === tab.path || (tab.path !== "/" && pathname?.startsWith(tab.path));
          return (
            <HapticClick key={tab.name} style={{ flex: 1 }}>
              <Link href={tab.path} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', textDecoration: 'none' }}>
                <span style={{ 
                  color: isActive ? 'var(--primary-color)' : 'var(--text-light)',
                  opacity: isActive ? 1 : 0.6,
                  transform: isActive ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                  {tab.icon}
                </span>
                <span style={{ 
                  fontSize: '0.65rem', 
                  fontWeight: isActive ? 600 : 400, 
                  color: isActive ? 'var(--primary-color)' : 'var(--text-light)',
                  transition: 'color 0.2s ease'
                }}>
                  {tab.name}
                </span>
              </Link>
            </HapticClick>
          );
        })}
      </nav>
    </>
  );
}
