import type { ShopWithDetails } from '@shishanavi/common'

import { prismaClient } from '~/lib/prisma'

export const findShopsOperation = async (): Promise<Array<ShopWithDetails>> => {
  const prismaShops = await prismaClient.shop.findMany({
    orderBy: {
      createdAt: 'desc',
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
  if (!prismaShops) {
    throw new Error('Shops not found')
  }
  const shops: Array<ShopWithDetails> = prismaShops.map((prismaShop) => ({
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
  }))
  return shops
}
