import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { ImageSlider } from '~/components/ImageSlider'
import { ShopDetailTop } from '~/app/_features/shopDetail/components/ShopDetailTop'
import type { Shop } from '~/app/_features/shopDetail/type'
import { ShopDetailFeatures } from '~/app/_features/shopDetail/components/ShopDetailFeatures'

type Props = {
  shopId: string
  shop: Shop
}

export const ShopDetailContainer = ({ shopId, shop }: Props): ReactNode => {
  return (
    <div className={styles.shopDetailContainer} key={shopId}>
      <ImageSlider images={shop.imageUrls} />
      <ShopDetailTop shop={shop} />
      <ShopDetailFeatures shop={shop} />
    </div>
  )
}
