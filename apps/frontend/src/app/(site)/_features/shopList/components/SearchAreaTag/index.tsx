import { type ReactNode } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './styles.module.css'

type Props = {
  searchAreas: Array<{ id: number; name: string; isSelected: boolean }>
}

export const SearchAreaTag = ({ searchAreas }: Props): ReactNode => {
  return (
    <ul className={styles.searchAreaTag}>
      {searchAreas.map((area) => (
        <li
          key={area.id}
          className={classNames(styles.searchAreaTagItem, {
            [styles.selected]: area.isSelected,
          })}
        >
          <Link href={`/?area=${area.id}`} className={styles.tag}>
            <span className={styles.tagText}>{area.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
