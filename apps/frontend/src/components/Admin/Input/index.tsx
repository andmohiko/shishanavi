import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  title?: string
}

export const Input = ({ title, ...rest }: Props): ReactNode => {
  return (
    <div className={styles.input}>
      {title && <span className={styles.placeholder}>{title}</span>}
      <input type="text" {...rest} />
    </div>
  )
}
