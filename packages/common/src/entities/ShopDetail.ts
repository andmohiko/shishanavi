import type { Shop } from './Shop'

export type BusinessHour = {
  date: string
  openTime: string
  lastOrderTime: string
  closeTime: string
}

export type ShopDetail = {
  id: string
  shopId: Shop['id']
  address: string
  nearestStation: string
  businessHours: Array<BusinessHour>
  isDeleted: boolean
  openedAt: string
  createdAt: string
  updatedAt: string
}
