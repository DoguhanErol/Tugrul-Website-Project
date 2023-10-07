import React from 'react'

export default function WelcomeText() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#f8ede3] shadow-2xl rounded-b-[30%]">
    {/*Title*/}
    <h1 className="text-4xl xl:text-6xl text-neutral-500 m-4 mt-10 font-light">
        Tuğrul Mobilya
    </h1>
    <hr className="w-64 h-[80%] bg-gray-600 rounded-full m-3 text-center" />

    {/*Sub Text*/}
    <p className="text-lg xl:text-2xl text-gray-400 mb-6 font-semibold text-center">
    22 Yıllık Tecrübe ile Yaşam Alanlarınızı Ürünlerimizle Güzelleştiriyoruz
    </p>
</div>
  )
}
