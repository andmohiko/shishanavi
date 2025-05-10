'use client'
import type { ReactNode } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import styles from './styles.module.css'

import { StatusButtons } from '~/components/Admin/StatusButtons'

export const HeadButtons = (): ReactNode => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const publish = searchParams.get('publish')
  const area = searchParams.get('area')
  const url = `/admin/${area ? `?area=${area}` : ''}`

  return (
    <div className={styles.headButtons}>
      <StatusButtons
        initialPublish={publish && Number(publish) === 0 ? false : true}
        onClickPublish={() => router.push(url)}
        onClickUnPublish={() =>
          router.push(`${url}${area ? '&publish=0' : ''}`)
        }
      />
    </div>
  )
}
