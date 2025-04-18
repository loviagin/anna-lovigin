import React from 'react'
import styles from './terms.module.css'

const Terms = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Пользовательское соглашение</h1>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Общие положения</h2>
            <p className={styles.paragraph}>
              Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между владельцем сайта annaloviagina.art (далее — Администрация сайта) и пользователем (посетителем сайта).
            </p>
            <p className={styles.paragraph}>Посещая сайт, вы соглашаетесь с условиями данного Соглашения.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Авторские права</h2>
            <p className={styles.paragraph}>
              Все материалы, размещённые на сайте, включая изображения, тексты, логотипы, графику и иные объекты (далее — Контент), являются интеллектуальной собственностью художника Анны Ловягиной (или соответствующих правообладателей) и охраняются законодательством об авторском праве.
            </p>
            <p className={`${styles.paragraph} ${styles.mediumText}`}>Без письменного разрешения запрещается:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>копировать, распространять, воспроизводить</li>
              <li className={styles.listItem}>использовать работы в коммерческих целях</li>
              <li className={styles.listItem}>модифицировать или создавать производные материалы</li>
            </ul>
            <p className={`${styles.paragraph} ${styles.mediumText}`}>Без письменного согласия разрешается:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>размещение материалов в публичных СМИ, с указанием авторства и ссылки на сайт</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Использование сайта</h2>
            <p className={`${styles.paragraph} ${styles.mediumText}`}>Пользователь обязуется:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>использовать сайт только в законных целях</li>
              <li className={styles.listItem}>не предпринимать действий, которые могут повредить сайту, его функциональности или безопасности</li>
            </ul>
            <p className={styles.paragraph}>Администрация сайта не несёт ответственности за возможный ущерб, возникший в результате использования сайта.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Ссылки на сторонние ресурсы</h2>
            <p className={styles.paragraph}>На сайте могут содержаться ссылки на сторонние ресурсы. Администрация не несёт ответственности за их содержание и политику конфиденциальности.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Ограничение ответственности</h2>
            <p className={styles.paragraph}>Контент сайта предоставляется «как есть», без каких-либо гарантий. Администрация не гарантирует точность, полноту или актуальность размещённой информации.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Обратная связь и контакты</h2>
            <p className={styles.paragraph}>По вопросам, связанным с использованием сайта и авторскими правами, вы можете связаться с администрацией по email: <a href='mailto:anna@lovigin.com'>anna@lovigin.com</a></p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Разработка сайта</h2>
            <p className={styles.paragraph}>Разработка сайта выполнена Великобританской IT-компанией <a href='https://lovigin.com' target='_blank'>LOVIGIN LTD</a>. Все вопросы, связанные с техническим функционированием сайта, вы можете направить на email: <a href='mailto:support@lovigin.com'>support@lovigin.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Изменения в Соглашении</h2>
            <p className={styles.paragraph}>Администрация оставляет за собой право изменять данное Соглашение без предварительного уведомления. Актуальная версия всегда доступна на этой странице.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Terms