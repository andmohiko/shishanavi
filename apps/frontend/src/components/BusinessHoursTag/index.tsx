import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  isOpen: boolean
  startTime: string
  endTime: string
}

export const BusinessHoursTag = ({
  isOpen,
  startTime,
  endTime,
}: Props): ReactNode => {
  return (
    <div className={styles.businessHoursTag}>
      <p className={styles.tag}>{isOpen ? '営業中' : '営業時間外'}</p>
      <p className={styles.time}>
        <span>{startTime}</span>〜<span>{endTime}</span>
      </p>
    </div>
  )
}
