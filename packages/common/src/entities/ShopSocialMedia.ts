import { z } from 'zod'
import type { Shop } from './Shop'

export const socialMediaTypeSchema = z.enum(['INSTAGRAM', 'LINE', 'X'])

export type SocialMediaType = z.infer<typeof socialMediaTypeSchema>

export type ShopSocialMedia = {
  id: string
  shopId: Shop['id']
  socialMediaType: SocialMediaType
  url: string
  isArchived: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
