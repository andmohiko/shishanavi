import { z } from 'zod'
import type { Shop } from './Shop'

export const paymentMethodTypeSchema = z.enum([
  'cash',
  'creditCard',
  'qrCode',
  'electronicMoney',
])

export type PaymentMethodType = z.infer<typeof paymentMethodTypeSchema>

export type ShopPaymentMethod = {
  id: string
  shopId: Shop['id']
  paymentMethodType: PaymentMethodType
  isSupported: boolean
  createdAt: string
  updatedAt: string
}
