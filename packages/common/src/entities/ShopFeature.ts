import type { Shop } from './Shop'

export type ShopFeature = {
  id: string
  shopId: Shop['id']
  gearBrands: string
  flavors: string
  recommendedFlavors: string
  atmosphere: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
