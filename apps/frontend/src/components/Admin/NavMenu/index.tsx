'use client'
import type { ReactNode } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import styles from './styles.module.css'
import { locationNavItems } from './type'

import { MenuItem } from '~/components/Admin/NavItem'

export const NavMenu = (): ReactNode => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const fullPath = searchParams.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname

  return (
    <div className={styles.menuItems}>
      {locationNavItems.map((item) => (
        <MenuItem
          key={item.label}
          {...item}
          isCurrent={fullPath === item.href}
        />
      ))}
    </div>
  )
}
