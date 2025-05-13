import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { ShopBasicInfoForm } from '~/app/admin/_features/editShop/_components/ShopBasicInfoForm'

type Props = {
  currentId: number
}

export const EditShopForm = ({ currentId }: Props): ReactNode => {
  return (
    <div className={styles.editShopForm}>
      {(() => {
        switch (currentId) {
          case 1:
            return <ShopBasicInfoForm />
        }
      })()}
    </div>
  )
}
