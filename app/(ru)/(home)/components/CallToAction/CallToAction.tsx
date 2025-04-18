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
            &ldquo;Искусство смывает пыль повседневности с души.&rdquo;
          </p>
          <p className={styles.quoteAuthor}>- Пабло Пикассо</p>
        </div>
        
        <div className={styles.social}>
          <h2 className={styles.title}>Присоединяйтесь к моему творческому пути</h2>
          <p className={styles.description}>
            Следите за новыми работами, процессом создания и вдохновением в моих социальных сетях
          </p>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://vk.com/annles" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.vk}`}
            >
              <FaVk className={styles.icon} />
              ВКонтакте
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