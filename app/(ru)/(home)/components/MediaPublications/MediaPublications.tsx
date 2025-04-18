import styles from './MediaPublications.module.css';
import Image from 'next/image';

const publications = [
  {
    id: 1,
    title: "На картинах Анапа, Новороссийск, Сочи",
    source: "Ван Гог за тушёнку",
    date: "11 марта 2025",
    description: "Холст, масло, 50х70см, последняя работа 90х50см Художник Анна Ловягина",
    image: "/vk1.webp",
    link: "https://vk.com/wall-120857236_1151541"
  },
  {
    id: 2,
    title: "Анапу рисуют или улицы города в красках 🎨",
    source: "ПВА | Анапа | Подслушано...",
    date: "3 апреля 2023",
    description: "Набережная в Анапе. Художник Анна Ловягина",
    image: "/vk2.webp",
    link: "https://vk.com/wall-88771274_2107073"
  },
  {
    id: 3,
    title: "Анапу рисуют или улицы города в красках 🎨",
    source: "ПВА | Анапа | Подслушано...",
    date: "19 февраля 2023",
    description: "Домик на Гоголя. Художник Анна Ловягина",
    image: "/vk3.webp",
    link: "https://vk.com/wall-88771274_2084359"
  }
];

export default function MediaPublications() {
  return (
    <section className={styles.publications} id="publications">
      <div className={styles.container}>
        <h2 className={styles.title}>Публикации в СМИ</h2>
        <div className={styles.grid}>
          {publications.map((publication) => (
            <article key={publication.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={publication.id === 1}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.source}>{publication.source}</span>
                  <span className={styles.date}>{publication.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{publication.title}</h3>
                <p className={styles.description}>{publication.description}</p>
                <a 
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Читать полностью →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 