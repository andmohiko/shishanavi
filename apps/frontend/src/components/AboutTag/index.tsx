import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  name: string
  value: Array<string> | string
}

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
