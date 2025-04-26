import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  budget: number
  vacation: Array<string>
}

export const BudgetAndVacation = ({ budget, vacation }: Props): ReactNode => {
  return (
    <dl className={styles.budgetAndVacation}>
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
