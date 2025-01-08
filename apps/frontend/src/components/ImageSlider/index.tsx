import Image from 'next/image'
import type { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  images: Array<string>
}

export const ImageSlider = ({ images }: Props): ReactNode => {
  return (
    <div className={styles.imageSlider}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div className={styles.image} key={index}>
            <Image
              width={560}
              height={315}
              quality={70}
              priority
              objectFit="cover"
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}
