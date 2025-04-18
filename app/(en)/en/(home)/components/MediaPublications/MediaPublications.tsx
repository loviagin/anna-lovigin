import styles from './MediaPublications.module.css';
import Image from 'next/image';

const publications = [
  {
    id: 1,
    title: "On the paintings of Anapa, Novorossiysk, Sochi",
    source: "Van Gogh for a paint",
    date: "11 March 2025",
    description: "Canvas, oil, 50x70cm, last work 90x50cm Artist Anna Loviagina",
    image: "/vk1.webp",
    link: "https://vk.com/wall-120857236_1151541"
  },
  {
    id: 2,
    title: "Anapa is painted or the streets of the city in colors 🎨",
    source: "PVA | Anapa | Subtitled...",
    date: "3 April 2023",
    description: "Anapa embankment. Artist Anna Loviagina",
    image: "/vk2.webp",
    link: "https://vk.com/wall-88771274_2107073"
  },
  {
    id: 3,
    title: "Anapa is painted or the streets of the city in colors 🎨",
    source: "PVA | Anapa | Subtitled...",
    date: "19 February 2023",
    description: "House on Gogol. Artist Anna Loviagina",
    image: "/vk3.webp",
    link: "https://vk.com/wall-88771274_2084359"
  }
];

export default function MediaPublications() {
  return (
    <section className={styles.publications} id="publications">
      <div className={styles.container}>
        <h2 className={styles.title}>Media publications</h2>
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
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 