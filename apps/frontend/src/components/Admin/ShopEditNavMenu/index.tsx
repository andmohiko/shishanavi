'use client'
import type { ReactNode } from 'react'

import styles from './styles.module.css'
import { shopEditMenuNavItems } from './type'

import { ShopEditNavItem } from '~/components/Admin/ShopEditNavItem'

type Props = {
  currentId: number
  onClick: (id: number) => void
}

export const ShopEditNavMenu = ({ currentId, onClick }: Props): ReactNode => {
  return (
    <div className={styles.menuItems}>
      {shopEditMenuNavItems.map((item) => (
        <ShopEditNavItem
          key={item.label}
          {...item}
          isCurrent={item.id === currentId}
          onClick={() => {
            onClick(item.id)
          }}
        />
      ))}
    </div>
  )
}
