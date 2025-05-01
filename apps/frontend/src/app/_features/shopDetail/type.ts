export type Shop = {
  id: number
  name: string
  access: string
  address: string
  hours: {
    open: string
    close: string
  }
  budget: number
  vacation: Array<string>
  brands: Array<string>
  flavors: string
  recommendedFlavors: Array<string>
  mood: string
  sns: {
    instagram: string
    x: string
    line: string
  }
  map: string
  imageUrls: Array<string>
}

export const mockShop: Shop = {
  id: 1,
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
  recommendedFlavors: [
    'Social Smoke Cigar（おすすめミックスはTangiers Kashimir）',
    'Trifecta Twice The Ice X（おすすめミックスはDeCloudレモンとAl Fakherココナッツ）',
  ],
  mood: '青を貴重とした落ち着いた内装。看板猫のフレッドとフレンドリーなスタッフがお出迎えします。シーシャが初めての人も丁寧にご案内するのでご安心ください！猫を愛でながらのんびりしたい方、お酒も交えてワイワイ楽しみたい方など、幅広いニーズに対応できます。カウンターをはじめとした1名様向きのお席から、4名様まで入れるソファ席までお席のサイズも複数ご用意してあります。',
  sns: {
    instagram: `https://instagram.com/shop1`,
    x: `https://x.com/shop1`,
    line: `https://line/shop1`,
  },
  map: `https://maps.google.com/?q=shop1`,
  imageUrls: [`/test.jpg`, `/images/x.png`, `/test.jpg`, `/test.jpg`],
}
