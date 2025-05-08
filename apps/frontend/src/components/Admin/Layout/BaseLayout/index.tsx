import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const BaseLayout = ({ children }: Props): ReactNode => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
