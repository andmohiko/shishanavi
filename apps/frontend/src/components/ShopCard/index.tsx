'use client'
import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

import styles from './styles.module.css'

import { ImageGallery } from '~/components/ImageGallery'
import type { Card } from '~/app/_features/shopList/components/ShopListContainer/type'
import { BusinessHoursTag } from '~/components/BusinessHoursTag'
import { ShopName } from '~/components/ShopName'
import { Access } from '~/components/Access'
import { BudgetAndVacation } from '~/components/BudgetAndVacation'
import { CardFeatures } from '~/components/CardFeatures'
import { SnsShare } from '~/components/SnsShare'

type Props = {
  shop: Card
}

export const ShopCard = ({ shop }: Props): ReactNode => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/shop/${shop.id}`)
  }

  return (
    <li key={shop.id} className={styles.shopCard}>
      <div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick()
          }
        }}
        className={styles.cardButton}
      >
        <div className={styles.cardLeft}>
          <ImageGallery images={shop.imageUrls} />
        </div>
        <div className={styles.cardRight}>
          <BusinessHoursTag
            isOpen={true}
            startTime={shop.hours.open}
            endTime={shop.hours.close}
          />
          <ShopName name={shop.name} />
          <Access access={shop.access} address={shop.address} />
          <BudgetAndVacation vacation={shop.vacation} budget={shop.budget} />
          <CardFeatures
            features={[
              {
                title: '機材ブランド',
                value: shop.brands,
              },
              {
                title: 'フレーバー',
                value: shop.flavors,
              },
            ]}
          />
          <SnsShare
            instagramUrl={shop.sns.instagram}
            xUrl={shop.sns.x}
            lineUrl={shop.sns.line}
            googleMapUrl={shop.map}
          />
        </div>
      </div>
    </li>
  )
}
