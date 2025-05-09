import { AppShell, AppShellMain, AppShellNavbar } from '@mantine/core'
import type { ReactNode } from 'react'
import Image from 'next/image'

import styles from './styles.module.css'

import { NavMenu } from '~/components/Admin/NavMenu'
import { FlexBox } from '~/components/Admin/Base/FlexBox'

type Props = {
  children: ReactNode
}

const headerHeight = 0

export const BaseLayout = ({ children }: Props): ReactNode => {
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
        <h1>
          <a href="/admin">
            <Image
              src="/images/admin-logo.png"
              height={27}
              width={154}
              alt="管理画面"
            />
          </a>
        </h1>
        <NavMenu />
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
          {children}
        </FlexBox>
      </AppShellMain>
    </AppShell>
  )
}
