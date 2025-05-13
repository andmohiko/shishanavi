'use client'
import type { ReactNode } from 'react'

import { ShopEditLayout } from '~/components/Admin/Layout/ShopEditLayout'
import { EditShopForm } from '~/app/admin/_features/editShop/_components/EditShopForm'

type Props = {
  shopId: string
}

export const EditShopContainer = ({ shopId }: Props): ReactNode => {
  // fetch shop data
  // eslint-disable-next-line no-console
  console.log('shopId', shopId)
  return (
    <ShopEditLayout>
      {(currentId) => <EditShopForm currentId={currentId} />}
    </ShopEditLayout>
  )
}
