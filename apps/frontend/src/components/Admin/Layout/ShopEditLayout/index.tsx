'use client'
import { AppShell, AppShellMain, AppShellNavbar } from '@mantine/core'
import { useState, type ReactNode } from 'react'

import styles from './styles.module.css'

import { FlexBox } from '~/components/Admin/Base/FlexBox'
import { ShopEditNavMenu } from '~/components/Admin/ShopEditNavMenu'

type Props = {
  children: (currentId: number) => ReactNode
}

const headerHeight = 0

export const ShopEditLayout = ({ children }: Props): ReactNode => {
  const [currentId, setCurrentId] = useState(1)
  const handleClick = (id: number) => {
    setCurrentId(id)
  }
  return (
    <AppShell
      header={{ height: headerHeight }}
      navbar={{
        width: 240,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShellNavbar p="sm" className={styles.navBar}>
        <ShopEditNavMenu currentId={currentId} onClick={handleClick} />
      </AppShellNavbar>
      <AppShellMain
        style={{
          height: `calc(100dvh - ${headerHeight}px)`,
          overflow: 'scroll',
        }}
      >
        <FlexBox
          justify="flex-start"
          align="flex-start"
          style={{
            position: 'relative',
          }}
        >
          {children(currentId)}
        </FlexBox>
      </AppShellMain>
    </AppShell>
  )
}
