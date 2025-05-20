'use client'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import styles from './styles.module.css'

import { shopEditMenuNavItems } from '~/components/Admin/ShopEditNavMenu/type'

type Props = {
  currentId: number
  onClickEdit: () => void
}

export const ShopEditLayoutHeader = ({
  currentId,
  onClickEdit,
}: Props): ReactNode => {
  const title = shopEditMenuNavItems.find((item) => item.id === currentId)
  const router = useRouter()
  return (
    <div className={styles.shopEditLayoutHeader}>
      <div className={styles.backButtonWrap}>
        <button onClick={() => router.back()}>
          <Image
            src="/images/arrow-left.png"
            alt="前のページに戻る"
            height={32}
            width={32}
          />
        </button>
        <h2>{title?.label ?? ''}</h2>
      </div>
      <div className={styles.settingButtonWrap}>
        <h3>公開中</h3>
        <button className={styles.editButton} onClick={onClickEdit}>
          更新する
        </button>
      </div>
    </div>
  )
}
