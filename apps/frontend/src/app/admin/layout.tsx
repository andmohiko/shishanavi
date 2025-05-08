import type { Metadata } from 'next'

import { SITE_NAME } from '~/app/layout'
import { BaseLayout } from '~/components/Admin/Layout/BaseLayout'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: '',
  robots: {
    index: false,
    follow: false,
    nocache: false,
  },
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <BaseLayout>{children}</BaseLayout>
}
