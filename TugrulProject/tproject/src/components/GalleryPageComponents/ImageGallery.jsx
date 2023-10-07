import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import SliderGallery from './SliderGallery';

        {/*This Gallery Normal One*/}

export default function ImageGallery({ sliderVisibility }) {
  const [galleryData, setGalleryData] = useState([]);
  
  const domainName = 'https://www.backend.tugrulmobilya.com'
  const imageAlts ='Gallery Image '
  const lastIndexOfImages = galleryData.length -1
  console.log('Thats Last Image Index: ',lastIndexOfImages)

  useEffect(() => {
    fetch('https://www.backend.tugrulmobilya.com/api/galeri/')
      .then(response => response.json())
      .then(data => {setGalleryData(data);})
      .catch(error => console.log('Thats Fetch Error: ',error));
  }, []);

  return (
    <>
    {/*Normal Image Gallery*/}
    <section className='flex flex-row flex-wrap items-center justify-center my-16 '>
    {galleryData.map((filePath, index) => (
          <ImageCard
          imageUrl={domainName+filePath}
          imageAlt={imageAlts+index}
          imageId= {index}
          key={index}
          />
    ))}
    </section>
    {/*Thats Invinsible When User Click Activation*/}
    <SliderGallery
    imagesData={galleryData}
    lastId={lastIndexOfImages}
    visibility={sliderVisibility}
    />

    </>
  )
}
