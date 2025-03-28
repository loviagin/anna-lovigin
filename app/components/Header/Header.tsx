'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
          Анна Ловягина
        </div>
        {/* <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button> */}
        {/* <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <a href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Главная</a>
          <a href="/gallery" className={`${styles.navLink} ${pathname === '/gallery' ? styles.active : ''}`}>Галерея</a>
          <a href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>О художнике</a>
          <a href="/exhibitions" className={`${styles.navLink} ${pathname === '/exhibitions' ? styles.active : ''}`}>Выставки</a>
          <a href="/shop" className={`${styles.navLink} ${pathname === '/shop' ? styles.active : ''}`}>Магазин</a>
          <a href="/contacts" className={`${styles.navLink} ${pathname === '/contacts' ? styles.active : ''}`}>Контакты</a>
        </nav> */}
      </div>
    </header>
  );
} 