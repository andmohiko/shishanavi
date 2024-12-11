import type { Shop } from './Shop'

export type ShopPricing = {
  id: string
  shopId: Shop['id']
  // 予算
  budget: string
  // シーシャ料金
  shishaFee: string
  // チャージ料金
  chargeFee: string
  // その他料金
  otherFee: string
  // 備考
  note: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
