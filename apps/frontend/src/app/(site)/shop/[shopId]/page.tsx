import type { Metadata } from 'next'

import { ShopDetailContainer } from '~/app/_features/shopDetail/components/ShopDetailContainer'
import { mockShop } from '~/app/_features/shopDetail/type'

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

  const shop = mockShop
  return <ShopDetailContainer shopId={shopId} shop={shop} />
}

export default Page
