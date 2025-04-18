import React from 'react'
import styles from './terms.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "User agreement – Anna Loviagina",
  description: "User agreement",
}

const Terms = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>User agreement</h1>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. General provisions</h2>
            <p className={styles.paragraph}>
              This User Agreement (hereinafter — Agreement) regulates the relationship between the owner of the annaloviagina.art website (hereinafter — Website Administrator) and the user (website visitor).
            </p>
            <p className={styles.paragraph}>By visiting the website, you agree to the terms of this Agreement.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Copyright</h2>
            <p className={styles.paragraph}>
              All materials posted on the website, including images, texts, logos, graphics, and other objects (hereinafter — Content), are the intellectual property of the artist Anna Loviagina (or the corresponding right holders) and are protected by copyright law.
            </p>
            <p className={`${styles.paragraph} ${styles.mediumText}`}>Without written permission, it is prohibited:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>copy, distribute, reproduce</li>
              <li className={styles.listItem}>use works for commercial purposes</li>
              <li className={styles.listItem}>modify or create derivative materials</li>
            </ul>
            <p className={`${styles.paragraph} ${styles.mediumText}`}>Without written consent, it is allowed:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>placement of materials in public media, with indication of authorship and a link to the website</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Using the website</h2>
            <p className={`${styles.paragraph} ${styles.mediumText}`}>The user is obliged to:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>use the website only for lawful purposes</li>
              <li className={styles.listItem}>not take actions that may damage the website, its functionality or security</li>
            </ul>
            <p className={styles.paragraph}>The Website Administrator is not responsible for any damage that may occur as a result of using the website.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Links to third-party resources</h2>
            <p className={styles.paragraph}>The website may contain links to third-party resources. The Administrator is not responsible for their content and privacy policy.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Limitation of liability</h2>
            <p className={styles.paragraph}>The content of the website is provided "as is", without any guarantees. The Administrator does not guarantee the accuracy, completeness or timeliness of the information provided.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Feedback and contacts</h2>
            <p className={styles.paragraph}>For questions related to the use of the website and copyright, you can contact the Administrator by email: <a href='mailto:anna@lovigin.com'>anna@lovigin.com</a></p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Website development</h2>
            <p className={styles.paragraph}>The website was developed by the British IT company <a href='https://lovigin.com' target='_blank'>LOVIGIN LTD</a>. All questions related to the technical functioning of the website can be directed to email: <a href='mailto:support@lovigin.com'>support@lovigin.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Changes to the Agreement</h2>
            <p className={styles.paragraph}>The Administrator reserves the right to change this Agreement without prior notice. The latest version is always available on this page.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Terms