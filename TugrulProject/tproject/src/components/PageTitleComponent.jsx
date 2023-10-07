import React from 'react'
import DarkWood from '../assets/DarkWood.webp'

export default function PageTitleComponent({ Title }) {
  return (
    <div className="h-[220px] sm:h-[390px] md:h-[460px] overflow-hidden">
    {/*Text - Page Title*/}
    <div className="flex w-full justify-center items-center h-0">
        <h1 className="relative mt-56 sm:mt-96 p-5 z-50 text-5xl sm:text-8xl bg-gray-800 bg-opacity-60 text-gray-400">
            { Title }
        </h1>
    </div>
    {/*Title Back Ground Image*/}
    <img src={ DarkWood } objectFit="cover"/>
</div>
  )
}
