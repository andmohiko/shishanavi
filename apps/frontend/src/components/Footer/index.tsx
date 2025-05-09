import type { ReactNode } from 'react'

import styles from './styles.module.css'

export const Footer = (): ReactNode => {
  return (
    <footer className={styles.footer}>
      <p>
        <small>&copy; 2025 Shisha Navi</small>
      </p>
    </footer>
  )
}
