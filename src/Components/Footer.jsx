import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Designed & Built by <span className={styles.name}>Tshepo Sepatake</span>
      </p>
      <p className={styles.copy}>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}

export default Footer