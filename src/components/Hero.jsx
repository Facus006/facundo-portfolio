import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className="container">
        <p className={styles.greeting}>Hola, soy</p>
        <h1 className={styles.name}>Facundo Calabrese</h1>
        <h2 className={styles.role}>
          Desarrollador <span className={styles.accent}>Backend Java</span>
        </h2>
        <p className={styles.description}>
          Especializado en APIs REST con Spring Boot, Spring Security y JWT.
          Autodidacta, apasionado por el código limpio y las buenas prácticas.
          Buscando mi primera experiencia laboral formal en desarrollo de software.
        </p>
        <div className={styles.actions}>
          <a href="#proyectos" className={styles.btnPrimary}>Ver proyectos</a>
          <a href="#contacto" className={styles.btnSecondary}>Contacto</a>
        </div>
        <div className={styles.stack}>
          {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React', 'Docker'].map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
