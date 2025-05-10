import 'ress'

import '~/styles/globals.css'

export const SITE_NAME = 'Shisha Navi'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
