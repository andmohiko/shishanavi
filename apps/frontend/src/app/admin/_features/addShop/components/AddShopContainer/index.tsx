'use client'
import type { ReactNode } from 'react'

import { EditAndAddShopForm } from '~/components/Admin/EditForm/EditAndAddForm'
import { ShopEditLayout } from '~/components/Admin/Layout/ShopEditLayout'

export const AddShopContainer = (): ReactNode => {
  return (
    <ShopEditLayout>
      {(currentId) => <EditAndAddShopForm currentId={currentId} />}
    </ShopEditLayout>
  )
}
