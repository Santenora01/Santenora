import React, { useState } from 'react'
import fs from 'fs'
import path from 'path'
import styles from './gallery.module.css'
import PageTemplate from '@/components/PageTemplate/PageTemplate'

type Work = {
  image: string
  description: string
}

type Props = {
  works: Work[]
}

const Gallery: React.FC<Props> = ({ works }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <PageTemplate>
      <div className={styles.grid}>
        {works.map((work, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => setSelectedImage(`/img/gallery/${work.image}`)}
          >
            <img
              src={`/img/gallery/${work.image}`}
              alt={`Atliktas darbas ${index + 1}`}
            />
            <p>{work.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Padidinta nuotrauka"
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
  const dir = path.join(process.cwd(), 'public', 'img', 'gallery')
  const files = fs.readdirSync(dir)

  const images = files.filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  )

  const works = images.map(image => {
    const txtFile = image.replace(/\.(jpg|jpeg|png|webp)$/i, '.txt')
    const txtPath = path.join(dir, txtFile)

    let description = ''
    if (fs.existsSync(txtPath)) {
      description = fs.readFileSync(txtPath, 'utf8')
    }

    return {
      image,
      description,
    }
  })

  return {
    props: {
      works,
    },
  }
}

export default Gallery
