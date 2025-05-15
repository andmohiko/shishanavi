import type { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

type Props = {
  name: string //ユニーク
  title: string
  value: boolean
  onChange: (value: boolean) => void
}

export const YesNoSelector = ({
  name,
  title,
  value,
  onChange,
}: Props): ReactNode => {
  return (
    <div className={styles.yesNoSelector}>
      <p className={styles.label}>{title}</p>
      <div className={styles.options}>
        <label
          className={classNames(styles.option, {
            [styles.checked]: value === true,
          })}
        >
          <input
            className={styles.input}
            type="radio"
            name={name}
            value="yes"
            checked={value}
            onChange={(e) => onChange(e.target.value === 'yes')}
          />
          <span className={styles.circle}>○</span>
        </label>
        <label
          className={classNames(styles.option, {
            [styles.checked]: value === false,
          })}
        >
          <input
            className={styles.input}
            type="radio"
            name={name}
            value="no"
            checked={!value}
            onChange={(e) => onChange(e.target.value === 'no')}
          />
          <span className={styles.cross}>✕</span>
        </label>
      </div>
    </div>
  )
}
