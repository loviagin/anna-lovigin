import styles from './AboutPreview.module.css';
import Image from 'next/image';

export default function AboutPreview() {
  return (
    <section className={styles.aboutPreview} id='about'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About the Artist</h2>
          <p className={styles.description}>
            Anna Loviagina is a professional artist. She graduated from Yaroslavl Art School in 2000 with a degree in painter-pedagogue. Her teachers were Sergeyev V. M. and Smagina E. V. She paints in different styles: realism, impressionism. Her works are in private collections in Russia and abroad.
          </p>
          {/* <button className={styles.button}>Подробнее о художнике</button> */}
        </div>
        <div className={styles.imageWrapper}>
          <Image 
            src="/me.webp" 
            alt="Anna Loviagina" 
            width={500}
            height={600}
            className={styles.portrait}
          />
        </div>
      </div>
    </section>
  );
} 