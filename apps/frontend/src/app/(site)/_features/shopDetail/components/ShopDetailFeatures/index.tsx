import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  title?: string
  features: Array<{
    title: string
    description: string
  }>
}

export const ShopDetailFeatures = ({ title, features }: Props): ReactNode => {
  return (
    <div className={styles.shopDetailFeatures}>
      {title && <h3>{title}</h3>}
      <dl className={styles.shopDetailFeatureWrap}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.futureWrap}>
            <dt>{feature.title}</dt>
            <dd>{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
