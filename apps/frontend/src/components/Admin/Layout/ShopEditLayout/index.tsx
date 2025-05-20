'use client'
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from '@mantine/core'
import { useState, type ReactNode } from 'react'

import styles from './styles.module.css'

import { FlexBox } from '~/components/Admin/Base/FlexBox'
import { ShopEditNavMenu } from '~/components/Admin/ShopEditNavMenu'
import { ShopEditLayoutHeader } from '~/components/Admin/ShopEditLayoutHeader'

type Props = {
  children: (currentId: number) => ReactNode
}

const headerHeight = 72

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
      <AppShellHeader>
        <ShopEditLayoutHeader
          currentId={currentId}
          onClickEdit={() => console.warn('hoge')}
        />
      </AppShellHeader>
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
            maxWidth: '720px',
            position: 'relative',
            margin: '0 auto',
          }}
        >
          {children(currentId)}
        </FlexBox>
      </AppShellMain>
    </AppShell>
  )
}
