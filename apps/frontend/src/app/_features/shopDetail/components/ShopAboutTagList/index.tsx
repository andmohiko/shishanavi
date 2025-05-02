import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { AboutTag } from '~/components/AboutTag'
import type { AboutTag as AboutTagType } from '~/components/AboutTag/type'

type Props = {
  title: string
  tags: Array<AboutTagType>
}

export const ShopAboutTagList = ({ title, tags }: Props): ReactNode => {
  return (
    <div className={styles.shopAboutTagList}>
      <h3>{title}</h3>
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>
            <AboutTag name={tag.name} value={tag.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}
