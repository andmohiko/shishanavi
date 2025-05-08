import type { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

type Props = {
  name: string
  size?: 'small' | 'medium' | 'large'
}

export const ShopName = ({ name, size = 'medium' }: Props): ReactNode => {
  return <h2 className={classNames(styles.shopName, styles[size])}>{name}</h2>
}
