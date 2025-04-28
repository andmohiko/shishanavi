import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

type Props = {
  instagramUrl?: string
  xUrl?: string
  lineUrl?: string
  googleMapUrl?: string
}

export const SnsShare = ({
  instagramUrl,
  xUrl,
  lineUrl,
  googleMapUrl,
}: Props): ReactNode => {
  const snsList = [
    {
      name: 'Instagram',
      url: instagramUrl,
      icon: '/images/instagram.png',
    },
    {
      name: 'X',
      url: xUrl,
      icon: '/images/x.png',
    },
    {
      name: 'LINE',
      url: lineUrl,
      icon: '/images/line.png',
    },
  ]

  const activeSnsList = snsList.filter((sns) => sns.url)

  return (
    <ul className={styles.snsShare}>
      {activeSnsList.map((sns) => (
        <li key={sns.name} className={styles.snsShare}>
          <Link href={sns.url!} target="_blank" rel="noopener noreferrer">
            <Image
              src={sns.icon}
              alt={`${sns.name}でシェア`}
              height={36}
              width={36}
              objectFit="contain"
            />
          </Link>
        </li>
      ))}

      {googleMapUrl && activeSnsList.length > 0 && (
        // 区切り線を入れる
        <li className={styles.divider} aria-hidden="true" />
      )}

      {googleMapUrl && (
        <li>
          <Link
            href={googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleMap}
          >
            <Image
              src="/images/google-map.png"
              alt="Google Map"
              className={styles.googleMapIcon}
              width={64}
              height={36}
              objectFit="contain"
            />
          </Link>
        </li>
      )}
    </ul>
  )
}
