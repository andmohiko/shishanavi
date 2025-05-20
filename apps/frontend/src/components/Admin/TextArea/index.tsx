import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  title?: string
}

export const TextArea = ({ title, ...rest }: Props): ReactNode => {
  return (
    <div className={styles.textarea}>
      {title && <span className={styles.placeholder}>{title}</span>}
      <textarea type="text" {...rest} />
    </div>
  )
}
