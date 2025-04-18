'use client';

import styles from './CallToAction.module.css';
import { FaVk, FaTelegram } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.animatedCircle} />
      <div className={styles.animatedCircle} />
      <div className={styles.animatedCircle} />
      <div className={styles.container}>
        <div className={styles.quote}>
          <p className={styles.quoteText}>
            &ldquo;Art washes away from the soul the dust of everyday life.&rdquo;
          </p>
          <p className={styles.quoteAuthor}>- Pablo Picasso</p>
        </div>
        
        <div className={styles.social}>
          <h2 className={styles.title}>Join my creative journey</h2>
          <p className={styles.description}>
            Follow my new works, the process of creation and inspiration in my social networks
          </p>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://vk.com/annles" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.vk}`}
            >
              <FaVk className={styles.icon} />
              VKontakte
            </a>
            <a 
              href="https://t.me/annaloviagina" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.telegram}`}
            >
              <FaTelegram className={styles.icon} />
              Telegram
            </a>
            {/* <a 
              href="https://www.instagram.com/annaloviagina/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.instagram}`}
            >
              <FaInstagram className={styles.icon} />
              Instagram
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
} 