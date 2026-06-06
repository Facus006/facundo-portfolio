import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo}>FC</a>
        <div className={styles.links}>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
