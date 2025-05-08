import { AppShell, AppShellMain } from '@mantine/core'
import type { ReactNode } from 'react'

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
      <AppShellMain
        bg="cyan.0"
        style={{
          height: `calc(100dvh - ${headerHeight}px)`,
          overflow: 'scroll',
        }}
      >
        {children}
      </AppShellMain>
    </AppShell>
  )
}
