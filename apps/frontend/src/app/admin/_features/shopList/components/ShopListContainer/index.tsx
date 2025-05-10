import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { SearchTextInput } from '~/app/admin/_features/shopList/components/SearchTextInput'
import { SearchResultArea } from '~/app/admin/_features/shopList/components/SearchResultArea'
import { mockShopList } from '~/app/admin/_features/shopList/type'
import { HeadButtons } from '~/app/admin/_features/shopList/components/HeadButtons'

export const ShopListContainer = (): ReactNode => {
  return (
    <div className={styles.shopListContainer} key={Date.now()}>
      <HeadButtons />
      <SearchTextInput />
      <SearchResultArea shopList={mockShopList} />
    </div>
  )
}
