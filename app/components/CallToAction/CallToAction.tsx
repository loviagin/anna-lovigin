'use client';

import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.animatedCircle} />
      <div className={styles.animatedCircle} />
      <div className={styles.animatedCircle} />
      <div className={styles.container}>
        <div className={styles.quote}>
          <p className={styles.quoteText}>
          "Искусство смывает пыль повседневности с души."
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
              ВКонтакте
            </a>
            <a 
              href="https://t.me/annaloviagina" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.telegram}`}
            >
              Telegram
            </a>
            <a 
              href="https://instagram.com/anna_art" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.instagram}`}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 