import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { BusinessHoursTag } from '~/components/BusinessHoursTag'
import { ShopName } from '~/components/ShopName'
import { Access } from '~/components/Access'
import { BudgetAndVacation } from '~/components/BudgetAndVacation'
import { SnsShare } from '~/components/SnsShare'
import type { Shop } from '~/app/(site)/_features/shopDetail/type'

type Props = {
  shop: Shop
}

export const ShopDetailTop = ({ shop }: Props): ReactNode => {
  return (
    <div className={styles.shopDetailTop}>
      <div className={styles.shopDetailHeader}>
        <BusinessHoursTag
          isOpen={true}
          startTime={shop.hours.open}
          endTime={shop.hours.close}
        />
        <ShopName name={shop.name} />
        <Access access={shop.access} address={shop.address} />
        <div className={styles.budgetWrap}>
          <BudgetAndVacation budget={shop.budget} vacation={shop.vacation} />
          <SnsShare
            instagramUrl={shop.sns.instagram}
            lineUrl={shop.sns.line}
            xUrl={shop.sns.x}
            googleMapUrl={shop.map}
          />
        </div>
      </div>
    </div>
  )
}
