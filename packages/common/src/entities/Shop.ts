import type { ShopBusinessHour } from './ShopBusinessHour'
import type { ShopDetail } from './ShopDetail'
import type { ShopFacilityRule } from './ShopFacilityRule'
import type { ShopFeature } from './ShopFeature'
import type { ShopImage } from './ShopImage'
import type { ShopPaymentMethod } from './ShopPaymentMethod'
import type { ShopPricing } from './ShopPricing'
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
  facilityRules: ShopFacilityRule
  features: ShopFeature
  images: Array<ShopImage>
  paymentMethods: ShopPaymentMethod
  pricing: ShopPricing
  socialMedias: Array<ShopSocialMedia>
}
