import type { FormHTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

type Props = FormHTMLAttributes<HTMLInputElement>

export const SearchTextInput = (props: Props): ReactNode => {
  return (
    <input
      className={styles.searchTextInput}
      placeholder="検索"
      {...props}
      type="text"
    />
  )
}
