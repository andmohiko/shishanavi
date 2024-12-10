import type { ShopBusinessHour } from './ShopBusinessHour'
import type { ShopDetail } from './ShopDetail'
import type { ShopImage } from './ShopImage'
import type { ShopPaymentMethod } from './ShopPaymentMethod'
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
  businessHours: Array<ShopBusinessHour>
  detail: ShopDetail
  images: Array<ShopImage>
  paymentMethods: Array<ShopPaymentMethod>
  socialMedias: Array<ShopSocialMedia>
}
