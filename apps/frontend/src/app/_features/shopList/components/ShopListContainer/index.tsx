import type { ReactNode } from 'react'
import styles from './styles.module.css'
import { Card } from './type'

type Props = {
  shopList: Array<Card>
}

export const ShopListContainer = ({ shopList }: Props): ReactNode => {
  console.log(shopList)
  return <div>hoge</div>
}
