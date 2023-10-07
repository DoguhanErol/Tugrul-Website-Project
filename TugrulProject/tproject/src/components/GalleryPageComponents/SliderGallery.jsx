import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

        {/*This Gallery Then User Click Activation*/}

export default function SliderGallery({imagesData , lastId, visibility }) {
  const { id } = useParams();
  const [nextImageId, setNextImageId] = useState(id);
  const [prevImageId, setPrevImageId] = useState(id);

  useEffect(() => {
    setNextImageId(handleNext())
    setPrevImageId(handlePrev())
  }, [id])
  
        {/*Next Button Function*/}
  const handleNext = () => {
    console.log('Handle Next Is Click')
    const nextId = parseInt(id) + 1;
    console.log('Next Id Is',nextId)
    if (nextId <= lastId) {
      console.log('Validation Complete')
      return nextId
    }else{
      return 0
    }
  };

          {/*Prev Button Function*/}
  const handlePrev = () => {
    console.log('Handle Prev Is Click')
    const nextId = parseInt(id) - 1;
    console.log('Prev Id Is',nextId)
    if (nextId >= 0) {
      console.log('Validation Complete')
      return nextId
    }else{
      return lastId
    }
  };

        {/*Next Button Function*/}
  console.log('Thats Selected Id:',id)
  const domainName = 'https://www.backend.tugrulmobilya.com'//Burayi Degistirmeyi Unutma Ancak Once SubDomain AC
  const imageAlts ='Gallery Image '+id
  const filePath = imagesData[id];
  console.log('Thats My Selected Image Alone: ',filePath)

  return (
    <div className='fixed top-0 left-0 z-[90] w-full h-full bg-[#000000da]' style={{ display: visibility}}>
        {/*Close Button*/}
        <Link to={'/galeri'} className='fixed top-0 right-0 m-2 hover:border-gray-50 hover:text-gray-50 z-[91] cursor-pointer border border-gray-500 text-gray-500 rounded-full w-12 h-12'>
          <svg className='' fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="full" viewBox="0 -960 960 960" width="full"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
        </Link>

        {/*Next Button*/}
          <Link  to={'/galeri/'+nextImageId}>
          <div onClick={handleNext} className='fixed justify-center items-center h-full top-1/2 right-0 m-2 z-[91] text-cyan-50'>
            <button className=' hover:border-gray-50 hover:text-gray-50  z-[91] cursor-pointer border border-gray-500 text-gray-500 rounded-full w-16 h-16 p-4 ' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="full" viewBox="0 -960 960 960" width="full"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
            </button>
          </div>
          </Link>

        {/*Prev Button*/}
          <Link  to={'/galeri/'+prevImageId}>
          <div onClick={handlePrev} className='fixed justify-center items-center h-full top-1/2 left-0 m-2 z-[91] text-cyan-50'>
          <button className=' hover:border-gray-50 hover:text-gray-50  z-[91] cursor-pointer border border-gray-500 text-gray-500 rounded-full w-16 h-16 p-3 ' >
          <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" height="full" fill="currentColor" viewBox="0 -960 960 960" width="full"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
            </button>
          </div>
          </Link>

        {/*Image*/}
        <div className='flex justify-center items-center md:p-16 w-full h-full'>
              <figure className='flex justify-center items-center w-full h-auto'>
                <img className='h-auto w-auto ' src={domainName+filePath} alt={imageAlts+id} id={id} />
              </figure>
        </div>
    </div>
  )
}
