import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <p className="section-label">Contacto</p>
        <h2 className="section-title">Hablemos</h2>
        <p className={styles.text}>
          Estoy buscando mi primera experiencia como desarrollador Java Junior.
          Si tenés una oportunidad o simplemente querés charlar sobre código, escribime.
        </p>

        <a href="mailto:facu.calabrese06@gmail.com" className={styles.emailBtn}>
          facu.calabrese06@gmail.com ↗
        </a>

        <div className={styles.socials}>
          <a href="https://linkedin.com/in/facundo-calabrese" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className={styles.dot}>·</span>
          <a href="https://github.com/Facus006" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
