'use client'
import { useState, type ReactNode } from 'react'

import styles from './styles.module.css'

import { YesNoSelector } from '~/components/Admin/YesNoSelector'

const items = [
  { key: 'smoking', label: '喫煙' },
  { key: 'alcohol', label: 'アルコール' },
  { key: 'food', label: 'フード持ち込み' },
  { key: 'wifi', label: 'Wifi' },
  { key: 'power', label: '電源' },
  { key: 'parking', label: '駐車場' },
  { key: 'rent', label: '貸切' },
  { key: 'reservation', label: 'ご予約' },
  { key: 'privateRoom', label: '個室' },
  { key: 'goods', label: 'グッズ販売' },
]

export const ShopEquipmentAndRulesForm = (): ReactNode => {
  const [values, setValues] = useState<Record<string, boolean>>({
    smoking: false,
    alcohol: false,
    food: false,
    wifi: false,
    power: false,
    parking: false,
    rent: false,
    reservation: false,
    privateRoom: false,
    goods: false,
  })
  return (
    <div className={styles.shopEquipmentAndRulesForm}>
      <h2 className={styles.title}>設備・ルール</h2>
      <form>
        {items.map(({ key, label }) => (
          <YesNoSelector
            key={key}
            name={key}
            title={label}
            value={values[key]}
            onChange={(val) => setValues({ ...values, [key]: val })}
          />
        ))}
      </form>
    </div>
  )
}
