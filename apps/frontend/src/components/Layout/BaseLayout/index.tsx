import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

type Props = {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: Props) => {
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
