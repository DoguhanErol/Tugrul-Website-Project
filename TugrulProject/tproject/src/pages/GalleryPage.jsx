import React from 'react'
import ImageGallery from '../components/GalleryPageComponents/ImageGallery'
import PageTitleComponent from '../components/PageTitleComponent'

export default function GallleryPage({ clickEventState }) {
  return (
    <>
    <PageTitleComponent Title={'Galeri'} />
    <ImageGallery sliderVisibility={ clickEventState } />
    </>
  )
}
