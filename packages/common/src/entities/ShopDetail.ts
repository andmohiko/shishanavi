import type { Shop } from './Shop'

export type ShopDetail = {
  id: string
  shopId: Shop['id']
  // 住所
  country: string
  prefecture: string
  city: string
  address: string
  // Google Map URL
  googleMapUrl: string
  // 最寄駅
  nearestStation: string
  // 最寄駅からの徒歩時間
  walkingMinutesFromNearestStation: number
  // アクセス
  access: string
  // 電話番号
  phoneNumber: string
  // 定休日
  regularHoliday: string
  // 開店日
  openedAt: string
  // 席数
  seats: string
  // 備考
  note: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
