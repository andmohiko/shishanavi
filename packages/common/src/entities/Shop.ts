import type { ShopDetail } from './ShopDetail'
import type { ShopImage } from './ShopImage'
import type { ShopSocialMedia } from './ShopSocialMedia'
import type { User } from './User'

export type Shop = {
  id: string
  name: string
  userId: User['id']
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
