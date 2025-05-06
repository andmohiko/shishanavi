import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { ImageSlider } from '~/components/ImageSlider'
import { ShopDetailTop } from '~/app/_features/shopDetail/components/ShopDetailTop'
import type { Shop } from '~/app/_features/shopDetail/type'
import { ShopDetailFeatures } from '~/app/_features/shopDetail/components/ShopDetailFeatures'
import { ShopAboutTagList } from '~/app/_features/shopDetail/components/ShopAboutTagList'
import type { AboutTag } from '~/components/AboutTag/type'

type Props = {
  shopId: string
  shop: Shop
}

export const ShopDetailContainer = ({ shopId, shop }: Props): ReactNode => {
  const features = [
    {
      title: '機材ブランド',
      description: shop.brands.join(', '),
    },
    {
      title: 'フレーバー数',
      description: shop.flavors,
    },
    {
      title: 'おすすめのフレーバー',
      description: shop.recommendedFlavors.join('、 '),
    },
    {
      title: '雰囲気',
      description: shop.mood,
    },
  ]

  const priceTags: Array<AboutTag> = [
    {
      name: 'シーシャ',
      value: `¥ ${shop.budgetDetail.shisha}~`,
    },
    {
      name: 'チャージ',
      value: `¥ ${shop.budgetDetail.charge}~`,
    },
    ...(shop.budgetDetail.another
      ? [
          {
            name: 'その他',
            value: shop.budgetDetail.another.map((another) => {
              return `${another.name} ¥ ${another.price}~`
            }),
          },
        ]
      : []),
  ]

  const rulesTags: Array<AboutTag> = [
    {
      name: '喫煙',
      value: shop.rules.smoking ? '⚪︎' : '×',
    },
    {
      name: 'アルコール',
      value: shop.rules.alcohol ? '⚪︎' : '×',
    },
    {
      name: 'フード持ち込み',
      value: shop.rules.food ? '⚪︎' : '×',
    },
    {
      name: 'Wifi',
      value: shop.rules.wifi ? '⚪︎' : '×',
    },
    {
      name: '電源',
      value: shop.rules.charge ? '⚪︎' : '×',
    },
    {
      name: '駐車場',
      value: shop.rules.parking ? '⚪︎' : '×',
    },
    {
      name: '貸切',
      value: shop.rules.privateReservation ? '⚪︎' : '×',
    },
    {
      name: 'ご予約',
      value: shop.rules.reservation ? '⚪︎' : '×',
    },
    {
      name: '個室',
      value: shop.rules.privateRoom ? '⚪︎' : '×',
    },
    {
      name: 'グッズ販売',
      value: shop.rules.goods ? '⚪︎' : '×',
    },
  ]

  const paymentTags: Array<AboutTag> = [
    {
      name: '現金',
      value: shop.paymentMethods.cash ? '⚪︎' : '×',
    },
    {
      name: 'クレジットカード',
      value: shop.paymentMethods.creditCard ? '⚪︎' : '×',
    },
    {
      name: 'QRコード決済',
      value: shop.paymentMethods.qrCode ? '⚪︎' : '×',
    },
    {
      name: '電子マネー',
      value: shop.paymentMethods.electronicMoney ? '⚪︎' : '×',
    },
  ]

  return (
    <div className={styles.shopDetailContainer} key={shopId}>
      <ImageSlider images={shop.imageUrls} />
      <ShopDetailTop shop={shop} />
      <ShopDetailFeatures features={features} />
      <ShopAboutTagList title="料金" tags={priceTags} />
      <ShopAboutTagList
        title="設備・ルール"
        tags={rulesTags}
        annotation={shop.rules.annotation}
      />
      <ShopAboutTagList
        title="お支払い方法"
        tags={paymentTags}
        annotation={shop.paymentMethods.annotation}
      />
    </div>
  )
}
