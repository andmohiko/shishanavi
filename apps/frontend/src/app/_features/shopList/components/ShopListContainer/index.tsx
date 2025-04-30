import type { ReactNode } from 'react'

import styles from './styles.module.css'
import type { Card } from './type'

import { CardList } from '~/app/_features/shopList/components/CardList'

type Props = {
  shopList: Array<Card>
}

export const ShopListContainer = ({ shopList }: Props): ReactNode => {
  return (
    <div className={styles.shopListContainer}>
      <CardList shopList={shopList} />
    </div>
  )
}
