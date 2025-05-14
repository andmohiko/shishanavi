import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { Input } from '~/components/Admin/Input'
import { TextArea } from '~/components/Admin/TextArea'

export const ShopBasicInfoForm = (): ReactNode => {
  return (
    <div className={styles.shopBasicInfoForm}>
      <h2>店舗情報</h2>
      <form>
        <div className={styles.formGroup}>
          <Input placeholder="店舗名" title="店舗名" />
          <Input placeholder="080********" title="電話番号" type="tel" />
        </div>
        <div className={styles.formGroup}>
          <h3>住所・アクセス</h3>
          <Input placeholder="郵便番号" title="郵便番号" />
          <Input placeholder="東京都" title="都道府県" />
          <Input placeholder="〇〇区1-1-1" title="住所1" />
          <Input placeholder="〇〇ビル2階" title="住所2" />
          <Input
            placeholder="[〇〇駅] C6出口より徒歩5分圏内"
            title="最寄駅からのアクセス"
          />
        </div>
        <div className={styles.formGroup}>
          <h3>席数</h3>
          <div className={styles.row}>
            <Input title="テーブル席" type="number" />
            <Input title="ソファー席" type="number" />
            <Input title="カウンター席" type="number" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <h3>その他</h3>
          <TextArea placeholder="備考" />
        </div>
      </form>
    </div>
  )
}
