import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>Facundo Calabrese · {new Date().getFullYear()}</p>
        <p>Desarrollado con React + Vite</p>
      </div>
    </footer>
  )
}
