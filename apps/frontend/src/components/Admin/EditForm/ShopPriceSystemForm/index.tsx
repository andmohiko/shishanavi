import type { ReactNode } from 'react'
import Image from 'next/image'

import styles from './styles.module.css'

import { Input } from '~/components/Admin/Input'
import { SimpleButton } from '~/components/Admin/SimpleButton'

export const ShopPriceSystemForm = (): ReactNode => {
  return (
    <div className={styles.shopPriceSystemForm}>
      <h2>料金システム</h2>
      <form>
        <div className={styles.formGroup}>
          <Input title="シーシャ料金" type="number" />
          <Input title="チャージ料金" type="number" />
        </div>
        <div className={styles.formGroup}>
          <h3>その他</h3>
          <div className={styles.row}>
            <Input title="項目名" />
            <Input title="料金" type="number" />
            <SimpleButton
              label={
                <Image
                  alt="削除"
                  src="/images/trash.png"
                  height={22}
                  width={22}
                />
              }
            />
          </div>
          <SimpleButton label="項目を追加" />
        </div>
      </form>
    </div>
  )
}
