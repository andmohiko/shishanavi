'use client'
import type { ReactNode } from 'react'

import styles from './styles.module.css'
import type { ShopEditNavMenuType } from './type'

export type Props = ShopEditNavMenuType & {
  isCurrent?: boolean
  onClick: (id: number) => void
}

export const ShopEditNavItem = ({
  id,
  label,
  isCurrent = false,
  onClick,
}: Props): ReactNode => {
  return (
    <button
      className={styles.menuItem}
      style={{
        backgroundColor: isCurrent ? 'var(--black-100)' : undefined,
      }}
      value={id}
      onClick={() => {
        onClick(id)
      }}
    >
      {label}
    </button>
  )
}
