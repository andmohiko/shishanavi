'use client'
import Image from 'next/image'
import { useState, type ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  images?: Array<string>
}

export const ImageGallery = ({ images }: Props): ReactNode => {
  const [mainImage, setMainImage] = useState<string | null>(
    images ? images[0] : null,
  )

  return (
    <div className={styles.imageGallery}>
      {mainImage && (
        <Image
          src={mainImage}
          alt=""
          width={345}
          height={185}
          className={styles.mainImage}
          priority
        />
      )}

      {images && images.length > 0 && (
        <div className={styles.subImages}>
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              height={46}
              width={86}
              alt={`サブ画像${idx}`}
              className={styles.subImage}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
