import Image from 'next/image'
import type { ReactNode } from 'react'

import styles from './styles.module.css'

export const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <h1>
        <Image
          src="/images/logo.png"
          alt="Shisha Navi"
          width={130}
          height={36}
          objectFit="contain"
          priority
        />
      </h1>
    </header>
  )
}
