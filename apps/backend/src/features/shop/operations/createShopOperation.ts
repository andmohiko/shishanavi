import type { ShopWithDetails } from '@shishanavi/common'
import { z } from 'zod'

import { prismaClient } from '~/lib/prisma'

/**
 * 店舗作成時のパラメータスキーマ
 * @property {string} name - 店舗名
 * @property {string} username - 店舗のユーザー名（一意）
 * @property {string} userId - 店舗を所有するユーザーID
 * @property {ShopBusinessHourParams[]} businessHours - 営業時間情報
 * @property {ShopDetailParams} detail - 店舗詳細情報
 * @property {ShopFacilityRuleParams} facilityRule - 設備・ルール情報
 * @property {ShopFeatureParams} feature - 店舗特徴情報
 * @property {ShopImageParams[]} images - 店舗画像情報
 * @property {ShopPaymentMethodParams} paymentMethod - 支払い方法情報
 * @property {ShopPricingParams} pricing - 料金情報
 * @property {ShopSocialMediaParams[]} socialMedias - SNS情報
 */
export const createShopParamsSchema = z.object({
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

export type CreateShopParamsType = z.infer<typeof createShopParamsSchema>

/**
 * 店舗とその関連データを一括で作成する
 * @param {CreateShopParamsType} params - 店舗作成に必要なパラメータ
 * @returns {Promise<ShopWithDetails>} 作成された店舗情報
 * @throws {Error} データベース操作に失敗した場合
 */
export const createShopOperation = async (
  params: CreateShopParamsType,
): Promise<ShopWithDetails> => {
  try {
    const prismaShop = await prismaClient.shop.create({
      data: {
        name: params.name,
        username: params.username,
        userId: params.userId,
        businessHours: {
          create: params.businessHours.map((hour) => ({
            day: hour.day,
            openTime: hour.openTime,
            lastOrderTime: hour.lastOrderTime,
            closeTime: hour.closeTime,
          })),
        },
        detail: {
          create: {
            country: params.detail.country,
            prefecture: params.detail.prefecture,
            city: params.detail.city,
            address: params.detail.address,
            googleMapUrl: params.detail.googleMapUrl,
            nearestStation: params.detail.nearestStation,
            walkingMinutesFromNearestStation:
              params.detail.walkingMinutesFromNearestStation,
            access: params.detail.access,
            phoneNumber: params.detail.phoneNumber,
            regularHoliday: params.detail.regularHoliday,
            openedAt: new Date(params.detail.openedAt),
            seats: params.detail.seats,
            note: params.detail.note,
          },
        },
        facilityRules: {
          create: {
            canSmoke: params.facilityRule.canSmoke,
            canAlcoholServe: params.facilityRule.canAlcoholServe,
            canBringFood: params.facilityRule.canBringFood,
            hasWifi: params.facilityRule.hasWifi,
            hasPowerTap: params.facilityRule.hasPowerTap,
            hasParking: params.facilityRule.hasParking,
            canCharter: params.facilityRule.canCharter,
            canReserve: params.facilityRule.canReserve,
            hasPrivateRoom: params.facilityRule.hasPrivateRoom,
            hasGoods: params.facilityRule.hasGoods,
          },
        },
        features: {
          create: {
            gearBrands: params.feature.gearBrands,
            flavors: params.feature.flavors,
            recommendedFlavors: params.feature.recommendedFlavors,
            atmosphere: params.feature.atmosphere,
          },
        },
        images: {
          create: params.images.map((image) => ({
            imagePath: image.imagePath,
            displayOrder: image.displayOrder,
          })),
        },
        paymentMethods: {
          create: {
            canCash: params.paymentMethod.canCash,
            canCreditCard: params.paymentMethod.canCreditCard,
            canQrCode: params.paymentMethod.canQrCode,
            canElectronicMoney: params.paymentMethod.canElectronicMoney,
          },
        },
        pricing: {
          create: {
            budget: params.pricing.budget,
            shishaFee: params.pricing.shishaFee,
            chargeFee: params.pricing.chargeFee,
            otherFee: params.pricing.otherFee,
            note: params.pricing.note,
          },
        },
        socialMedias: {
          create: params.socialMedias.map((socialMedia) => ({
            socialMediaType: socialMedia.socialMediaType,
            url: socialMedia.url,
          })),
        },
      },
      include: {
        businessHours: true,
        detail: true,
        facilityRules: true,
        features: true,
        images: true,
        paymentMethods: true,
        pricing: true,
        socialMedias: true,
      },
    })

    const shopWithDetails: ShopWithDetails = {
      id: prismaShop.id,
      name: prismaShop.name,
      userId: prismaShop.userId,
      isBanned: prismaShop.isBanned,
      isDeleted: prismaShop.isDeleted,
      createdAt: prismaShop.createdAt.toISOString(),
      updatedAt: prismaShop.updatedAt.toISOString(),
      businessHours: prismaShop.businessHours.map((hour) => ({
        ...hour,
        createdAt: hour.createdAt.toISOString(),
        updatedAt: hour.updatedAt.toISOString(),
      })),
      detail: prismaShop.detail
        ? {
            ...prismaShop.detail,
            openedAt: prismaShop.detail.openedAt.toISOString().split('T')[0],
            createdAt: prismaShop.detail.createdAt.toISOString(),
            updatedAt: prismaShop.detail.updatedAt.toISOString(),
          }
        : null,
      facilityRules: prismaShop.facilityRules
        ? {
            ...prismaShop.facilityRules,
            createdAt: prismaShop.facilityRules.createdAt.toISOString(),
            updatedAt: prismaShop.facilityRules.updatedAt.toISOString(),
          }
        : null,
      features: prismaShop.features
        ? {
            ...prismaShop.features,
            createdAt: prismaShop.features.createdAt.toISOString(),
            updatedAt: prismaShop.features.updatedAt.toISOString(),
          }
        : null,
      images: prismaShop.images.map((image) => ({
        ...image,
        createdAt: image.createdAt.toISOString(),
        updatedAt: image.updatedAt.toISOString(),
      })),
      paymentMethods: prismaShop.paymentMethods
        ? {
            ...prismaShop.paymentMethods,
            createdAt: prismaShop.paymentMethods.createdAt.toISOString(),
            updatedAt: prismaShop.paymentMethods.updatedAt.toISOString(),
          }
        : null,
      pricing: prismaShop.pricing
        ? {
            ...prismaShop.pricing,
            createdAt: prismaShop.pricing.createdAt.toISOString(),
            updatedAt: prismaShop.pricing.updatedAt.toISOString(),
          }
        : null,
      socialMedias: prismaShop.socialMedias.map((media) => ({
        ...media,
        createdAt: media.createdAt.toISOString(),
        updatedAt: media.updatedAt.toISOString(),
      })),
    }

    return shopWithDetails
  } catch (error) {
    console.error('Failed to create shop:', error)
    throw new Error(
      `createShopOperation: 店舗の作成に失敗しました: ${
        error instanceof Error ? error.message : '不明なエラー'
      }`,
    )
  }
}
