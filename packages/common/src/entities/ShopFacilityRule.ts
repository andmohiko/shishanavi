import type { Shop } from './Shop'

export type ShopFacilityRule = {
  id: string
  shopId: Shop['id']
  // 喫煙可能
  canSmoke: boolean
  // アルコール提供
  canAlcoholServe: boolean
  // フード持ち込み
  canBringFood: boolean
  // Wifi
  hasWifi: boolean
  // 電源
  hasPowerTap: boolean
  // 駐車場
  hasParking: boolean
  // 貸切
  canCharter: boolean
  // ご予約
  canReserve: boolean
  // 個室
  hasPrivateRoom: boolean
  // グッズ販売
  hasGoods: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
