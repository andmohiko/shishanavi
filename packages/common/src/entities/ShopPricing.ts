import type { Shop } from './Shop'

export type ShopPricing = {
  id: string
  shopId: Shop['id']
  // 予算
  budget: string
  // シーシャ料金
  shishaPrice: string
  // チャージ料金
  chargePrice: string
  // その他料金
  otherPrice: string
  // 備考
  note: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
