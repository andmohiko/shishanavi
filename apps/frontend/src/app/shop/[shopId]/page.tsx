import type { Metadata } from 'next'

import { ShopDetailContainer } from '~/app/_features/shopDetail/components/ShopDetailContainer'
import { cardMock } from '~/app/_features/shopList/components/ShopListContainer/type'

export const metadata: Metadata = {
  title: '店舗詳細',
  description: '',
}

type Props = {
  params: Promise<{
    shopId: string
  }>
}

const Page = async ({ params }: Props) => {
  const { shopId } = await params

  const shop = cardMock[0]
  return <ShopDetailContainer shopId={shopId} shop={shop} />
}

export default Page
