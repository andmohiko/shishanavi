import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  features: Array<{
    title: string
    value: Array<string> | string
  }>
}

export const CardFeatures = ({ features }: Props): ReactNode => {
  return (
    <dl className={styles.cardFeatures}>
      {features.map((feature) => (
        <div className={styles.definitionWrap} key={feature.title}>
          <dt>{feature.title}</dt>
          <dd className={styles.vacation}>
            {typeof feature.value === 'string' ? (
              feature.value
            ) : (
              <span>{feature.value.join(', ')}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
