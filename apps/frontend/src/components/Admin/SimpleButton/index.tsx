import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: ReactNode
}

export const SimpleButton = ({ label, ...rest }: Props): ReactNode => {
  return (
    <button {...rest} className={styles.simpleButton}>
      {label}
    </button>
  )
}
