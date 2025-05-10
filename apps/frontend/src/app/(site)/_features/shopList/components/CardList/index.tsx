import type { ReactNode } from 'react'

import styles from './styles.module.css'

import type { Card } from '~/app/(site)/_features/shopList/type'
import { ShopCard } from '~/components/ShopCard'

type Props = {
  shopList: Array<Card>
}

export const CardList = ({ shopList }: Props): ReactNode => {
  return (
    <ul className={styles.cardList}>
      {shopList.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
    </ul>
  )
}
