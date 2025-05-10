import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'

import { SITE_NAME } from '~/app/layout'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: '',
  // 管理画面はnoindex
  robots: {
    index: false,
    follow: false,
    nocache: false,
  },
}

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: 0.4,
})

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
