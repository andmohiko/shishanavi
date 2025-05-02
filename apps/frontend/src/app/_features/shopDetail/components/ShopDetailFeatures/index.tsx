import type { ReactNode } from 'react'

import styles from './styles.module.css'

import type { Shop } from '~/app/_features/shopDetail/type'

type Props = {
  shop: Shop
}

export const ShopDetailFeatures = ({ shop }: Props): ReactNode => {
  const features = [
    {
      title: '機材ブランド',
      description: shop.brands.join(', '),
    },
    {
      title: 'フレーバー数',
      description: shop.flavors,
    },
    {
      title: 'おすすめのフレーバー',
      description: shop.recommendedFlavors.join('、 '),
    },
    {
      title: '雰囲気',
      description: shop.mood,
    },
  ]

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
