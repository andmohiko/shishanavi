import { type Metadata } from 'next'

import { ShopListContainer } from '~/app/(site)/_features/shopList/components/ShopListContainer'
import { cardMock } from '~/app/(site)/_features/shopList/type'

export const metadata: Metadata = {
  title: '店舗一覧',
  description: '',
}

type Props = {
  searchParams: Promise<{ area?: string }>
}

const Page = async ({ searchParams }: Props) => {
  const { area } = await searchParams
  const areaId = area ? Number(area) : 1
  // areaMasterから取得したエリア情報を使用する
  const searchAreas = [
    { id: 1, name: '全て' },
    { id: 2, name: '池袋' },
    { id: 3, name: '渋谷' },
    { id: 4, name: '難波' },
  ].map((area) => ({
    ...area,
    isSelected: area.id === areaId,
  }))

  return <ShopListContainer shopList={cardMock} searchAreas={searchAreas} />
}

export default Page
