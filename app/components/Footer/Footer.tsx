'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Контакты</h3>
            <p className={styles.text}>Email: anna@lovigin.art</p>
            <p className={styles.text}>Instagram: @anna.lovigin</p>
            <p className={styles.text}>Telegram: @annalovigin</p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.title}>О художнике</h3>
            <p className={styles.text}>Анна Ловигин</p>
            <p className={styles.text}>Современный художник</p>
            <p className={styles.text}>Санкт-Петербург</p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.title}>Навигация</h3>
            <nav className={styles.nav}>
              <a href="/" className={styles.link}>Главная</a>
              <a href="/gallery" className={styles.link}>Галерея</a>
              <a href="/about" className={styles.link}>Обо мне</a>
              <a href="/contact" className={styles.link}>Контакты</a>
            </nav>
          </div>
        </div> */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2025 Анна Ловягина. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
} 