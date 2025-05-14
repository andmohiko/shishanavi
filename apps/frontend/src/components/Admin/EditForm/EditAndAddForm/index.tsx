import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { ShopBasicInfoForm } from '~/components/Admin/EditForm/ShopBasicInfoForm'
import { ShopFeatureForm } from '~/components/Admin/EditForm/ShopFeatureForm'

type Props = {
  currentId: number
}

export const EditAndAddShopForm = ({ currentId }: Props): ReactNode => {
  return (
    <div className={styles.editAndAddShopForm}>
      {(() => {
        switch (currentId) {
          case 1:
            return <ShopBasicInfoForm />
          case 2:
            return <ShopFeatureForm />
        }
      })()}
    </div>
  )
}
