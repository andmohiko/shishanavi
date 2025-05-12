import { EditShopContainer } from '~/app/admin/_features/editShop/_components/EditShopContainer'

type Props = {
  params: Promise<{
    shopId: string
  }>
}

const Page = async ({ params }: Props) => {
  const { shopId } = await params

  return <EditShopContainer shopId={shopId} />
}
export default Page
