'use client'
import type { ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

import styles from './styles.module.css'
import { locationNavItems } from './type'

import { NavItem } from '~/components/Admin/NavItem'

export const NavMenu = (): ReactNode => {
  const searchParams = useSearchParams()
  const areaParam = searchParams.get('area')

  return (
    <div className={styles.menuItems}>
      {locationNavItems.map((item) => {
        const url = new URL(item.href, 'http://localhost') //BaseURLは適当でOK
        const itemArea = url.searchParams.get('area') || null
        const isCurrent =
          areaParam === itemArea || (itemArea === null && areaParam === null) //「すべて」を選んだ場合の処理

        return <NavItem key={item.label} {...item} isCurrent={isCurrent} />
      })}
    </div>
  )
}
