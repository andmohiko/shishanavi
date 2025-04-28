import type { ReactNode } from 'react'
import dayjs from 'dayjs'

import styles from './styles.module.css'

type Props = {
  isOpen: boolean
  startTime: Date
  endTime: Date
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
        <span>{dayjs(startTime).format('HH:mm')}</span>〜
        <span>{dayjs(endTime).format('HH:mm')}</span>
      </p>
    </div>
  )
}
