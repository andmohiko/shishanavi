export type Shop = {
  id: number
  name: string // 店名
  access: string // アクセス
  address: string // 住所
  // 営業時間
  // 例: { open: '12:00', close: '03:00' }
  hours: {
    open: string
    close: string
  }
  // 予算
  budget: number
  // 定休日
  vacation: Array<string>
  // 機材ブランド
  brands: Array<string>
  // フレーバー
  flavors: string
  // おすすめフレーバー
  recommendedFlavors: Array<string>
  // 雰囲気
  mood: string
  // SNS
  // 例: { instagram: 'https://instagram.com/shop1', x: 'https://x.com/shop1' }
  sns: {
    instagram: string
    x: string
    line: string
  }
  // 地図
  // 例: 'https://maps.google.com/?q=shop1'
  map: string
  // 画像URL
  imageUrls: Array<string>
  // 予算詳細
  budgetDetail: {
    shisha: number
    charge: number
    another?: Array<{
      name: string
      price: number
    }>
  }
  // rules タグ
  rules: {
    smoking: boolean
    alcohol: boolean
    food: boolean
    wifi: boolean
    charge: boolean
    parking: boolean
    privateReservation: boolean
    reservation: boolean
    privateRoom: boolean
    goods: boolean
    annotation: string
  }
  // 決済方法 タグ
  paymentMethods: {
    cash: boolean
    creditCard: boolean
    qrCode: boolean
    electronicMoney: boolean
    annotation: string
  }
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
  budgetDetail: {
    shisha: 2000,
    charge: 1000,
    another: [
      {
        name: 'シェアチャージ',
        price: 1000,
      },
      {
        name: 'ボトルアイス',
        price: 500,
      },
      {
        name: 'アイスホース',
        price: 500,
      },
      {
        name: 'ソフトドリンク',
        price: 500,
      },
      {
        name: 'おつまみ',
        price: 500,
      },
    ],
  },
  rules: {
    smoking: true,
    alcohol: true,
    food: true,
    wifi: true,
    charge: true,
    parking: false,
    privateReservation: false,
    reservation: true,
    privateRoom: false,
    goods: false,
    annotation:
      'フード，ソフトドリンクは持ち込み可能ですがアルコール類だけお断りさせて頂いております。',
  },
  paymentMethods: {
    cash: true,
    creditCard: true,
    qrCode: true,
    electronicMoney: false,
    annotation: 'QRコード決済はPayPayのみ対応しています。',
  },
}
