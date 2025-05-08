import type { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

type Props = {
  budget: number
  vacation: Array<string>
  size?: 'small' | 'medium' | 'large'
}

export const BudgetAndVacation = ({
  budget,
  vacation,
  size = 'medium',
}: Props): ReactNode => {
  return (
    <dl className={classNames(styles.budgetAndVacation, styles[size])}>
      <div className={styles.definitionWrap}>
        <dt>予算</dt>
        <dd>¥{budget.toLocaleString()} 〜</dd>
      </div>
      <div className={styles.definitionWrap}>
        <dt>定休日</dt>
        <dd className={styles.vacation}>
          {vacation.map((vacation) => (
            <span key={vacation}>{vacation}</span>
          ))}
        </dd>
      </div>
    </dl>
  )
}
