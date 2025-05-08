import type { ReactNode } from 'react'

import styles from './styles.module.css'
import { locationNavItems } from './type'

import { MenuItem } from '~/components/Admin/NavItem'

export const NavMenu = (): ReactNode => {
  return (
    <div className={styles.menuItems}>
      {locationNavItems.map((item) => (
        <MenuItem
          key={item.label}
          {...item}
          // isCurrent={pathname.startsWith(item.href)}
        />
      ))}
    </div>
  )
}
