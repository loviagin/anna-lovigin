import styles from './AboutPreview.module.css';
import Image from 'next/image';

export default function AboutPreview() {
  return (
    <section className={styles.aboutPreview} id='about'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>О художнике</h2>
          <p className={styles.description}>
            Анна Ловягина — профессиональный художник. Закончила Ярославское художественное училище в 2000 году по специальности художник-педагог. Преподаватели – Серебряков В. М., Смагина Е. В. Пишет в разных стилях: реализм, импрессионизм. Работы находятся в частных коллекциях в России и за рубежом.
          </p>
          {/* <button className={styles.button}>Подробнее о художнике</button> */}
        </div>
        <div className={styles.imageWrapper}>
          <Image 
            src="/me.webp" 
            alt="Анна Ловягина" 
            width={500}
            height={600}
            className={styles.portrait}
          />
        </div>
      </div>
    </section>
  );
} 