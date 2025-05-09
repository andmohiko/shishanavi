import type { ReactNode } from 'react'

import styles from './styles.module.css'
import type { AboutTag as AboutTagType } from './type'

type Props = AboutTagType & {
  titleWidth?: string
}

export const AboutTag = ({ name, value, titleWidth }: Props): ReactNode => {
  return (
    <dl className={styles.aboutTag}>
      <div className={styles.aboutTagWrap}>
        <dt style={{ width: titleWidth }}>{name}</dt>
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
