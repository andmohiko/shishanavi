import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { SearchTextInput } from '~/app/admin/_features/shopList/components/SearchTextInput'
import { SearchResultArea } from '~/app/admin/_features/shopList/components/SearchResultArea'
import { mockShopList } from '~/app/admin/_features/shopList/type'

export const ShopListContainer = (): ReactNode => {
  return (
    <div className={styles.shopListContainer}>
      <SearchTextInput />
      <SearchResultArea shopList={mockShopList} />
    </div>
  )
}
