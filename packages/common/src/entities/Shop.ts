import type { ShopDetail } from './ShopDetail'
import type { ShopImage } from './ShopImage'
import type { ShopSocialMedia } from './ShopSocialMedia'

export type Shop = {
  id: string
  name: string
  userId: string
  isBanned: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}

export type ShopWithDetails = Shop & {
  detail: ShopDetail
  images: Array<ShopImage>
  socialMedias: Array<ShopSocialMedia>
}
