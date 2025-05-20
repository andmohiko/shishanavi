'use client'
import type { ReactNode } from 'react'

import { EditAndAddShopForm } from '~/components/Admin/EditForm/EditAndAddForm'
import { ShopEditLayout } from '~/components/Admin/Layout/ShopEditLayout'

type Props = {
  shopId: string
}

export const EditShopContainer = ({ shopId }: Props): ReactNode => {
  // fetch shop data
  // eslint-disable-next-line no-console
  console.log('shopId', shopId)
  return (
    <ShopEditLayout>
      {(currentId) => <EditAndAddShopForm currentId={currentId} />}
    </ShopEditLayout>
  )
}
