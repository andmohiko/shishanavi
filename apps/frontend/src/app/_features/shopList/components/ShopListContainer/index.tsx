import type { ReactNode } from 'react'
import Link from 'next/link'

import styles from './styles.module.css'
import type { Card } from './type'

import { ImageGallery } from '~/components/ImageGallery'
import { Access } from '~/components/Access'
import { ShopName } from '~/components/ShopName'
import { BusinessHoursTag } from '~/components/BusinessHoursTag'
import { BudgetAndVacation } from '~/components/BudgetAndVacation'
import { CardFeatures } from '~/components/CardFeatures'
import { SnsShare } from '~/components/SnsShare'

type Props = {
  shopList: Array<Card>
}

export const ShopListContainer = ({ shopList }: Props): ReactNode => {
  return (
    <div className={styles.shopListContainer}>
      <ul className={styles.cardList}>
        {shopList.map((shop) => (
          <li key={shop.id} className={styles.card}>
            <Link href={`/shop/${shop.id}`} className={styles.cardLink}>
              <div className={styles.cardLeft}>
                <ImageGallery images={shop.imageUrls} />
              </div>
              <div className={styles.cardRight}>
                <BusinessHoursTag
                  isOpen={true}
                  startTime={new Date(shop.hours.open)}
                  endTime={new Date(shop.hours.close)}
                />
                <ShopName name={shop.name} />
                <Access access={shop.access} address={shop.address} />
                <BudgetAndVacation
                  vacation={shop.vacation}
                  budget={shop.budget}
                />
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
