import { AppShell, AppShellMain, AppShellNavbar } from '@mantine/core'
import type { ReactNode } from 'react'

import styles from './styles.module.css'

import { NavMenu } from '~/components/Admin/NavMenu'
import { FlexBox } from '~/components/Admin/Base/FlexBox'

type Props = {
  children: ReactNode
}

const headerHeight = 72

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
        <NavMenu />
      </AppShellNavbar>
      <AppShellMain
        bg="cyan.0"
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
