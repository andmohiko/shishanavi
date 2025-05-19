'use client'
import { useState, type ReactNode } from 'react'

import styles from './styles.module.css'

import { TextArea } from '~/components/Admin/TextArea'
import { YesNoSelector } from '~/components/Admin/YesNoSelector'

const items = [
  { key: 'cash', label: '現金' },
  { key: 'credit', label: 'クレジットカード' },
  { key: 'electricMoney', label: '電子マネー' },
  { key: 'qr', label: 'QRコード決済' },
]

export const ShopPaymentMethodForm = (): ReactNode => {
  const [values, setValues] = useState<Record<string, boolean>>({
    cash: false,
    credit: false,
    electricMoney: false,
    qr: false,
  })

  return (
    <div className={styles.shopPaymentMethodForm}>
      <h2 className={styles.title}>支払い方法</h2>
      <form>
        <div className={styles.paymentWrap}>
          {items.map(({ key, label }) => (
            <YesNoSelector
              key={key}
              name={key}
              title={label}
              value={values[key]}
              onChange={(val) => setValues({ ...values, [key]: val })}
            />
          ))}
        </div>
        <div className={styles.formGroup}>
          <TextArea title="備考" />
        </div>
      </form>
    </div>
  )
}
