import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  features: Array<{
    title: string
    description: string
  }>
}

export const ShopDetailFeatures = ({ features }: Props): ReactNode => {
  return (
    <dl className={styles.shopDetailFeatures}>
      {features.map((feature) => (
        <div key={feature.title} className={styles.futureWrap}>
          <dt>{feature.title}</dt>
          <dd>{feature.description}</dd>
        </div>
      ))}
    </dl>
  )
}
