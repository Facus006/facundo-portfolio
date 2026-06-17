import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre-mi" className={styles.about}>
      <div className="container">
        <p className="section-label">Sobre mí</p>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className="section-title">Developer autodidacta de Buenos Aires</h2>
            <p>
              Empecé en el mundo de la programación con un curso full stack de un año en EGG Live,
              pero la mayoría de lo que sé lo aprendí por mi cuenta — construyendo proyectos reales,
              rompiendo cosas y entendiéndolas de vuelta.
            </p>
            <p>
              Me especializo en el desarrollo backend con Java y Spring Boot. Me gusta escribir código
              limpio, bien estructurado, con buenas prácticas de seguridad y documentación clara.
              También tengo conocimientos de frontend en React para construir aplicaciones completas.
            </p>
            <p>
              Actualmente busco mi primera experiencia laboral formal como desarrollador Java Junior,
              donde pueda seguir creciendo y aportar valor desde el primer día.
            </p>

            <div className={styles.photoMobile}>
              <div className={styles.photoFrame}>
                <img src="/foto.jpg" alt="Facundo Calabrese" className={styles.photo} />
              </div>
            </div>

            <div className={styles.skills}>
              <div className={styles.skillGroup}>
                <h3>Backend</h3>
                <ul>
                  <li>Java 17</li>
                  <li>Spring Boot</li>
                  <li>Spring Security</li>
                  <li>JWT</li>
                  <li>Spring Data JPA</li>
                  <li>MySQL</li>
                  <li>Swagger / OpenAPI</li>
                  <li>JUnit & Mockito</li>
                </ul>
              </div>
              <div className={styles.skillGroup}>
                <h3>Frontend & DevOps</h3>
                <ul>
                  <li>React</li>
                  <li>Vite</li>
                  <li>HTML / CSS</li>
                  <li>Docker</li>
                  <li>Git / GitHub</li>
                  <li>Maven</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <img
                src="/foto.jpg"
                alt="Facundo Calabrese"
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
