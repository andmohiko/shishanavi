'use client'

import { useState, type ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  initialPublish?: boolean
  onClickPublish: () => void
  onClickUnPublish: () => void
}

export const StatusButtons = ({
  initialPublish = true,
  onClickPublish,
  onClickUnPublish,
}: Props): ReactNode => {
  const [isPublish, setIsPublic] = useState(initialPublish)
  return (
    <div className={styles.statusButtons}>
      <button
        style={{ backgroundColor: isPublish ? 'var(--black-100)' : undefined }}
        onClick={() => {
          setIsPublic(true)
          onClickPublish()
        }}
      >
        公開中
      </button>
      <button
        style={{ backgroundColor: !isPublish ? 'var(--black-100)' : undefined }}
        onClick={() => {
          setIsPublic(false)
          onClickUnPublish()
        }}
      >
        非公開
      </button>
    </div>
  )
}
