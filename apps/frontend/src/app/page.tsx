import { type Metadata } from 'next'

import { ShopListContainer } from './_features/shopList/components/ShopListContainer'
import { cardMock } from './_features/shopList/components/ShopListContainer/type'

export const metadata: Metadata = {
  title: '店舗一覧',
  description: '',
}

const Page = () => {
  return <ShopListContainer shopList={cardMock} />
}

export default Page
