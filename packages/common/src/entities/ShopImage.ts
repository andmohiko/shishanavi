import type { Shop } from './Shop'

export type ShopImage = {
  id: string
  shopId: Shop['id']
  imagePath: string
  displayOrder: number
  isArchived: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
