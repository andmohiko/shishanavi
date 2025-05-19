import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { ShopBasicInfoForm } from '~/components/Admin/EditForm/ShopBasicInfoForm'
import { ShopFeatureForm } from '~/components/Admin/EditForm/ShopFeatureForm'
import { ShopPriceSystemForm } from '~/components/Admin/EditForm/ShopPriceSystemForm'
import { ShopEquipmentAndRulesForm } from '~/components/Admin/EditForm/ShopEquipmentAndRulesForm'
import { ShopPaymentMethodForm } from '~/components/Admin/EditForm/ShopPaymentMethodForm'

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
          case 3:
            return <ShopPriceSystemForm />
          case 4:
            return <ShopEquipmentAndRulesForm />
          case 5:
            return <ShopPaymentMethodForm />
        }
      })()}
    </div>
  )
}
