import styles from './Projects.module.css'

const projects = [
  {
    name: 'TurnoFlow',
    type: 'Fullstack',
    description: 'Sistema de gestión de turnos con autenticación JWT y control de acceso por 3 roles (Admin, Negocio, Cliente). Los negocios crean servicios y gestionan sus turnos; los clientes reservan con validación de horarios en tiempo real.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React', 'Docker', 'JUnit'],
    github: 'https://github.com/Facus006/TurnoFlow',
    githubFront: 'https://github.com/Facus006/TurnoFlow-Front',
    highlight: true,
  },
  {
    name: 'TradeHub',
    type: 'Backend · API REST',
    description: 'API de marketplace con autenticación JWT, manejo de roles (Admin/User), CRUD de publicaciones con subida de imágenes, paginación y ordenamiento dinámico. Documentada con Swagger.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Swagger'],
    github: 'https://github.com/Facus006/TradeHub',
  },
  {
    name: 'LCR Mods',
    type: 'Fullstack',
    description: 'Plataforma para compartir y gestionar mods de simuladores de carreras (rFactor, Assetto Corsa). Primer proyecto fullstack completo, desarrollado de forma independiente hace más de 2 años.',
    tech: ['Java', 'Spring Boot', 'JWT', 'React', 'Vite', 'MySQL', 'Docker'],
    github: 'https://github.com/Facus006/Api-Lcr',
  },
]

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="container">
        <p className="section-label">Proyectos</p>
        <h2 className="section-title">Lo que construí</h2>
        <p className={styles.subtitle}>
          Proyectos personales desarrollados de forma autodidacta para aprender y demostrar habilidades técnicas.
        </p>

        <div className={styles.list}>
          {projects.map((p) => (
            <article key={p.name} className={`${styles.card} ${p.highlight ? styles.featured : ''}`}>
              <div className={styles.cardHeader}>
                <div>
                  <span className={styles.type}>{p.type}</span>
                  <h3 className={styles.projectName}>{p.name}</h3>
                </div>
                <div className={styles.links}>
                  {p.githubFront && (
                    <a href={p.githubFront} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      Frontend ↗
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub ↗
                  </a>
                </div>
              </div>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.tech}>
                {p.tech.map(t => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
