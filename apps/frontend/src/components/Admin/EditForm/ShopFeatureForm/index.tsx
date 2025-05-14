import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { TextArea } from '~/components/Admin/TextArea'

export const ShopFeatureForm = (): ReactNode => {
  return (
    <div className={styles.shopFeatureForm}>
      <h2>特徴</h2>
      <form>
        <div className={styles.formGroup}>
          <TextArea title="機材ブランド" />
          <TextArea title="おすすめのフレーバー" />
          <TextArea title="お店の雰囲気" />
        </div>
      </form>
    </div>
  )
}
