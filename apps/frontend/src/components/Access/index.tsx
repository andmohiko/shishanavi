import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  address: string
  access: string
}

export const Access = ({ address, access }: Props): ReactNode => {
  return (
    <div className={styles.access}>
      <p className={styles.txt}>{address}</p>
      <p className={styles.txt}>{access}</p>
    </div>
  )
}
