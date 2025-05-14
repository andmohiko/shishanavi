import type { ReactNode, SelectHTMLAttributes } from 'react'

import styles from './styles.module.css'

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  title?: string
}

export const Select = ({ title, children, ...rest }: Props): ReactNode => {
  return (
    <div className={styles.select}>
      {title && <span className={styles.placeholder}>{title}</span>}
      <select {...rest}>{children}</select>
    </div>
  )
}
