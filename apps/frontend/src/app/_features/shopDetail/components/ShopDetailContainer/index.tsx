import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { ImageSlider } from '~/components/ImageSlider'
import { ShopDetailTop } from '~/app/_features/shopDetail/components/ShopDetailTop'
import type { Shop } from '~/app/_features/shopDetail/type'
import { ShopDetailFeatures } from '~/app/_features/shopDetail/components/ShopDetailFeatures'
import { ShopAboutTagList } from '~/app/_features/shopDetail/components/ShopAboutTagList'
import type { AboutTag } from '~/components/AboutTag/type'

type Props = {
  shopId: string
  shop: Shop
}

export const ShopDetailContainer = ({ shopId, shop }: Props): ReactNode => {
  const priceTags: Array<AboutTag> = [
    {
      name: 'シーシャ',
      value: `¥ ${shop.budgetDetail.shisha}~`,
    },
    {
      name: 'チャージ',
      value: `¥ ${shop.budgetDetail.charge}~`,
    },
    ...(shop.budgetDetail.another
      ? [
          {
            name: 'その他',
            value: shop.budgetDetail.another.map((another) => {
              return `${another.name} ¥ ${another.price}~`
            }),
          },
        ]
      : []),
  ]

  return (
    <div className={styles.shopDetailContainer} key={shopId}>
      <ImageSlider images={shop.imageUrls} />
      <ShopDetailTop shop={shop} />
      <ShopDetailFeatures shop={shop} />
      <ShopAboutTagList title="料金" tags={priceTags} />
    </div>
  )
}
