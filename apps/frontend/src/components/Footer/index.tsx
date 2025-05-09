import type { ReactNode } from 'react'

import styles from './styles.module.css'

export const Footer = (): ReactNode => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Shisha Navi</p>
    </footer>
  )
}
