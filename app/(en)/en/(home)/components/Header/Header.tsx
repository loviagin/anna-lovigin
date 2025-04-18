'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/en'>Anna Loviagina</Link>
        </div>
        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href="/en" className={`${styles.navLink} ${pathname === '/en' ? styles.active : ''}`}>Home</Link>
          <Link href="#gallery" className={`${styles.navLink} ${pathname === '#gallery' ? styles.active : ''}`}>Gallery</Link>
          <Link href="#about" className={`${styles.navLink} ${pathname === '#about' ? styles.active : ''}`}>About the artist</Link>
          <Link href="#publications" className={`${styles.navLink} ${pathname === '#publications' ? styles.active : ''}`}>Media</Link>
          <Link href="#contacts" className={`${styles.navLink} ${pathname === '#contacts' ? styles.active : ''}`}>Contacts</Link>
        </nav>
      </div>
    </header>
  );
} 