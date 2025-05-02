import type { ReactNode } from 'react'

import styles from './styles.module.css'
import type { AboutTag as AboutTagType } from './type'

type Props = AboutTagType

export const AboutTag = ({ name, value }: Props): ReactNode => {
  return (
    <dl className={styles.aboutTag}>
      <div className={styles.aboutTagWrap}>
        <dt>{name}</dt>
        <dd>
          {Array.isArray(value) ? (
            <ul>
              {value.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            value
          )}
        </dd>
      </div>
    </dl>
  )
}
