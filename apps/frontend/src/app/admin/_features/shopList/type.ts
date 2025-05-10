export type Shop = {
  id: number
  name: string
  image: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const mockShopList: Array<Shop> = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: 'SHISHA maya -cafe&Bar- 池袋東口店',
  image: '/test2.jpg',
}))
