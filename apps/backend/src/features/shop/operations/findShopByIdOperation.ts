import type { ShopWithDetails } from '@shishanavi/common'
import { z } from 'zod'

import { prismaClient } from '~/lib/prisma'

export const findShopSchema = z.object({
  id: z.string().min(1),
})

export type FindShopParams = z.infer<typeof findShopSchema>

/**
 * 指定されたIDのショップ情報を取得する
 * @param params - 検索パラメータ
 * @param params.id - ショップID
 * @returns ショップ情報と関連する詳細情報
 * @throws Error - ショップが見つからない場合
 */
export const findShopByIdOperation = async (params: FindShopParams) => {
  const shop = await prismaClient.shop.findFirst({
    where: {
      id: params.id,
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
  if (!shop) {
    throw new Error('Shop not found')
  }
  if (
    !shop.detail ||
    !shop.facilityRules ||
    !shop.features ||
    !shop.paymentMethods ||
    !shop.pricing
  ) {
    throw new Error('Shop details are incomplete')
  }

  const shopWithDetails: ShopWithDetails = {
    id: shop.id,
    name: shop.name,
    userId: shop.userId,
    isBanned: shop.isBanned,
    isDeleted: shop.isDeleted,
    createdAt: shop.createdAt.toISOString(),
    updatedAt: shop.updatedAt.toISOString(),
    businessHours: shop.businessHours.map((hour) => ({
      ...hour,
      createdAt: hour.createdAt.toISOString(),
      updatedAt: hour.updatedAt.toISOString(),
    })),
    detail: {
      ...shop.detail,
      openedAt: shop.detail.openedAt.toISOString().split('T')[0],
      createdAt: shop.detail.createdAt.toISOString(),
      updatedAt: shop.detail.updatedAt.toISOString(),
    },
    facilityRules: {
      ...shop.facilityRules,
      createdAt: shop.facilityRules.createdAt.toISOString(),
      updatedAt: shop.facilityRules.updatedAt.toISOString(),
    },
    features: {
      ...shop.features,
      createdAt: shop.features.createdAt.toISOString(),
      updatedAt: shop.features.updatedAt.toISOString(),
    },
    images: shop.images.map((image) => ({
      ...image,
      createdAt: image.createdAt.toISOString(),
      updatedAt: image.updatedAt.toISOString(),
    })),
    paymentMethods: {
      ...shop.paymentMethods,
      createdAt: shop.paymentMethods.createdAt.toISOString(),
      updatedAt: shop.paymentMethods.updatedAt.toISOString(),
    },
    pricing: {
      ...shop.pricing,
      createdAt: shop.pricing.createdAt.toISOString(),
      updatedAt: shop.pricing.updatedAt.toISOString(),
    },
    socialMedias: shop.socialMedias.map((media) => ({
      ...media,
      createdAt: media.createdAt.toISOString(),
      updatedAt: media.updatedAt.toISOString(),
    })),
  }
  return shopWithDetails
}
