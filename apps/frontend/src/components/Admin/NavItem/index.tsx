import Link from 'next/link'
import type { ReactNode } from 'react'

import styles from './styles.module.css'
import type { NavMenuType } from './type'

export type Props = NavMenuType & {
  isCurrent?: boolean
}

export const MenuItem = ({
  icon,
  label,
  href,
  isCurrent = false,
}: Props): ReactNode => {
  return (
    <Link
      href={href}
      className={styles.menuItem}
      style={{
        backgroundColor: isCurrent ? '#999' : undefined,
        color: isCurrent ? '#fff' : undefined,
      }}
    >
      {icon}
      {label}
    </Link>
  )
}
