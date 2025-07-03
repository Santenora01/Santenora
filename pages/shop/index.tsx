import React, { useState } from 'react'
import fs from 'fs'
import path from 'path'
import styles from './shop.module.css'
import PageTemplate from '@/components/PageTemplate/PageTemplate'

type Props = {
  images: string[]
}

const Shop: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <PageTemplate>
      <div className={styles.grid}>
        {images.map((filename, index) => (
          <img
            key={index}
            src={`/img/shop/${filename}`}
            alt={`Shop image ${index + 1}`}
            className={styles.image}
            onClick={() => setSelectedImage(`/img/shop/${filename}`)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Selected"
            className={styles.lightboxImage}
          />
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            ×
          </button>
        </div>
      )}
    </PageTemplate>
  )
}

export const getStaticProps = async () => {
  const dir = path.join(process.cwd(), 'public', 'img', 'shop')
  const files = fs.readdirSync(dir)
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  )

  // Numerinis rūšiavimas pagal 'shop' + skaičius, pvz. shop1.jpg, shop2.jpg
  imageFiles.sort((a, b) => {
    const aNum = parseInt(a.replace('shop', '').replace(/\D/g, ''), 10)
    const bNum = parseInt(b.replace('shop', '').replace(/\D/g, ''), 10)
    return aNum - bNum
  })

  return {
    props: {
      images: imageFiles,
    },
  }
}

export default Shop
