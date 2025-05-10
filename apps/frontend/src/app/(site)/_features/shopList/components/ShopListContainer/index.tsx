import type { ReactNode } from 'react'

import styles from './styles.module.css'

import type { Card } from '~/app/(site)/_features/shopList/type'
import { CardList } from '~/app/(site)/_features/shopList/components/CardList'
import { SearchAreaTag } from '~/app/(site)/_features/shopList/components/SearchAreaTag'

type Props = {
  shopList: Array<Card>
  searchAreas: Array<{ id: number; name: string; isSelected: boolean }>
}

export const ShopListContainer = ({
  shopList,
  searchAreas,
}: Props): ReactNode => {
  return (
    <div className={styles.shopListContainer}>
      <SearchAreaTag searchAreas={searchAreas} />
      <CardList shopList={shopList} />
    </div>
  )
}
