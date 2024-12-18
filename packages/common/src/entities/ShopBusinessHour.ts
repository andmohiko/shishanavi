import { z } from 'zod'

import type { Shop } from './Shop'

export const daySchema = z.enum([
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
])

export type Day = z.infer<typeof daySchema>

export type ShopBusinessHour = {
  id: string
  shopId: Shop['id']
  day: Day
  openTime: string
  lastOrderTime: string
  closeTime: string
  createdAt: string
  updatedAt: string
}
