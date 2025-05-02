export type Card = {
  id: number
  name: string
  access: string
  address: string
  hours: {
    open: string // 'HH:MM' 形式
    close: string // 'HH:MM' 形式
  }
  budget: number
  vacation: Array<string>
  brands: Array<string>
  flavors: string
  sns: {
    instagram: string
    x: string
    line: string
  }
  map: string
  imageUrls: Array<string>
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const cardMock: Array<Card> = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: 'SHISHA maya -cafe&Bar- 池袋東口店',
  access: '池袋駅から徒歩10分',
  address: '東京都豊島区',
  hours: {
    open: '12:00',
    close: '03:00',
  },
  budget: 2000,
  vacation: ['月曜日', '火曜日'],
  brands: ['Dschinni', 'Mamay Custom', 'NOMAD', 'Union hookah'],
  flavors: '100種類以上',
  sns: {
    instagram: `https://instagram.com/shop${i + 1}`,
    x: `https://x.com/shop${i + 1}`,
    line: `https://line/shop${i + 1}`,
  },
  map: `https://maps.google.com/?q=shop${i + 1}`,
  imageUrls: [`/test.jpg`, `/images/x.png`, `/test.jpg`, `/test.jpg`],
}))
