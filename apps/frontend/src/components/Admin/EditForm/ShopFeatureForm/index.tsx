import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { TextArea } from '~/components/Admin/TextArea'
import { Select } from '~/components/Admin/Select'

const budgetOptions = [
  { value: '', label: '選択してください' },
  { value: '1500', label: '1500円〜' },
  { value: '3000', label: '3000円〜' },
  { value: '5000', label: '5000円〜' },
]

const flavorOptions = [
  { value: '', label: '選択してください' },
  { value: '20', label: '20種類以上' },
  { value: '30', label: '30種類以上' },
  { value: '50', label: '50種類以上' },
  { value: '100', label: '100種類以上' },
  { value: '200', label: '200種類以上' },
]

export const ShopFeatureForm = (): ReactNode => {
  return (
    <div className={styles.shopFeatureForm}>
      <h2>特徴</h2>
      <form>
        <div className={styles.formGroup}>
          <Select title="予算" defaultValue="">
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <TextArea title="機材ブランド" />
          <Select title="フレーバー数" defaultValue="">
            {flavorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <TextArea title="おすすめのフレーバー" />
          <TextArea title="お店の雰囲気" />
        </div>
      </form>
    </div>
  )
}
