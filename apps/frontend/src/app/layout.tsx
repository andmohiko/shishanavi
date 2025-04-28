import type { Metadata } from 'next'

import '~/styles/reset.css'
import '~/styles/globals.css'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'

export const SITE_NAME = 'Shisha Navi'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: '',
  openGraph: {
    title: SITE_NAME,
    description: '',
    url: '',
    siteName: SITE_NAME,
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: '',
    images: [''],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
