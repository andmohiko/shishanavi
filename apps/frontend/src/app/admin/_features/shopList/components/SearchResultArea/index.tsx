import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

import type { Shop } from '~/app/admin/_features/shopList/type'

type Props = {
  shopList: Array<Shop>
}

export const SearchResultArea = ({ shopList }: Props): ReactNode => {
  return (
    <div className={styles.searchResultArea}>
      <p className={styles.title}>{shopList.length}件</p>
      <ul>
        {shopList.map((shop) => (
          <li key={shop.id}>
            <Link href={`/admin/shop/edit/${shop.id}`} target="_black">
              <div className={styles.linkWrap}>
                <Image src={shop.image} width={80} height={45} alt="" />
                <h2>{shop.name}</h2>
              </div>
              <Image
                className={styles.allowImage}
                src="/images/allow-right.png"
                alt=""
                height={28}
                width={28}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
