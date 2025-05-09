import { z } from 'zod'

/**
 * 店舗を作成するためのリクエストボディのスキーマ
 * @property {string} name - 店舗名
 * @property {string} username - 店舗のユーザー名（一意）
 * @property {string} userId - 店舗を所有するユーザーID
 * @property {ShopBusinessHourReq[]} businessHours - 営業時間情報
 * @property {ShopDetailReq} detail - 店舗詳細情報
 * @property {ShopFacilityRuleReq} facilityRule - 設備・ルール情報
 * @property {ShopFeatureReq} feature - 店舗特徴情報
 * @property {ShopImageReq[]} images - 店舗画像情報
 * @property {ShopPaymentMethodReq} paymentMethod - 支払い方法情報
 * @property {ShopPricingReq} pricing - 料金情報
 * @property {ShopSocialMediaReq[]} socialMedias - SNS情報
 */
export const createShopReqSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  userId: z.string().min(1),
  businessHours: z.array(
    z.object({
      day: z.enum([
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ]),
      openTime: z.string(),
      lastOrderTime: z.string(),
      closeTime: z.string(),
    }),
  ),
  detail: z.object({
    country: z.string(),
    prefecture: z.string(),
    city: z.string(),
    address: z.string(),
    googleMapUrl: z.string(),
    nearestStation: z.string(),
    walkingMinutesFromNearestStation: z.number(),
    access: z.string(),
    phoneNumber: z.string(),
    regularHoliday: z.string(),
    openedAt: z.string(),
    seats: z.string(),
    note: z.string(),
  }),
  facilityRule: z.object({
    canSmoke: z.boolean(),
    canAlcoholServe: z.boolean(),
    canBringFood: z.boolean(),
    hasWifi: z.boolean(),
    hasPowerTap: z.boolean(),
    hasParking: z.boolean(),
    canCharter: z.boolean(),
    canReserve: z.boolean(),
    hasPrivateRoom: z.boolean(),
    hasGoods: z.boolean(),
  }),
  feature: z.object({
    gearBrands: z.string(),
    flavors: z.string(),
    recommendedFlavors: z.string(),
    atmosphere: z.string(),
  }),
  images: z.array(
    z.object({
      imagePath: z.string().min(1),
      displayOrder: z.number().min(0),
    }),
  ),
  paymentMethod: z.object({
    canCash: z.boolean(),
    canCreditCard: z.boolean(),
    canQrCode: z.boolean(),
    canElectronicMoney: z.boolean(),
  }),
  pricing: z.object({
    budget: z.string(),
    shishaFee: z.string(),
    chargeFee: z.string(),
    otherFee: z.string(),
    note: z.string(),
  }),
  socialMedias: z.array(
    z.object({
      socialMediaType: z.enum(['INSTAGRAM', 'LINE', 'X']),
      url: z.string().min(1),
    }),
  ),
})

export type CreateShopReq = z.infer<typeof createShopReqSchema>
