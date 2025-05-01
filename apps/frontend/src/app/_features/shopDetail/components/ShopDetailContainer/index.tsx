import type { ReactNode } from 'react'

import styles from './styles.module.css'

import type { Card } from '~/app/_features/shopList/components/ShopListContainer/type'
import { ImageSlider } from '~/components/ImageSlider'
import { ShopDetailTop } from '~/app/_features/shopDetail/components/ShopDetailTop'

type Props = {
  shopId: string
  shop: Card
}

export const ShopDetailContainer = ({ shopId, shop }: Props): ReactNode => {
  return (
    <div className={styles.shopDetailContainer} key={shopId}>
      <ImageSlider images={shop.imageUrls} />
      <ShopDetailTop shop={shop} />
    </div>
  )
}
