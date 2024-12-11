import type { Shop } from './Shop'

export type ShopPaymentMethod = {
  id: string
  shopId: Shop['id']
  canCash: boolean
  canCreditCard: boolean
  canQrCode: boolean
  canElectronicMoney: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
