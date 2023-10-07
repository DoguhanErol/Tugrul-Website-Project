import React from 'react'

export default function AssuranceIcons() {
  return (
    <div className="flex flex-row  flex-wrap justify-center items-center m-24">
{/*Dayanıklılık */}
<div className="flex flex-col justify-center items-center border-gray-600 shadow-2xl p-5 m-5 bg-[#FFF7F0] w-96 group hover:scale-105">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-80 h-80 text-[#69564C] group-hover:text-green-700">
        <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
        <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
        <path fill-rule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clip-rule="evenodd" />
    </svg>
    <h3 className="text-3xl text-gray-500 m-5  group-hover:text-black">
        Dayanıklılık
    </h3>
    <p className="text-2xl text-center border-t-2 border-[#69564C] border-opacity-30 group-hover:border-green-600 pt-5">
    Ürünlerimiz usulüne uygun bir şekilde hazırlanır. Malzemelerimiz sektörün önde gelen markalarından temin edilir.
    </p>
</div>
{/*Estetiklik */}
<div className="flex flex-col justify-center items-center border-gray-600 shadow-2xl p-[50px] m-5 bg-[#FFF7F0] w-96 group hover:scale-105">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-80 h-80 text-[#69564C] group-hover:text-red-700">
      <path fill-rule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd" />
    </svg>
    <h3 className="text-3xl text-gray-500 m-5  group-hover:text-black">
        Estetiklik
    </h3>
    <p  className="text-2xl text-center border-t-2 border-[#69564C] border-opacity-30 group-hover:border-red-600 pt-5">
        Ürünleriniz tasarımsal olarak mantıklı ve istenilen kalıplarda üretilir.
    </p>
</div>
{/*Hesaplılık */}
<div className="flex flex-col justify-center items-center border-gray-600 shadow-2xl p-[50px] m-5 bg-[#FFF7F0] w-96 group hover:scale-105">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-80 h-80 text-[#69564C] group-hover:text-cyan-700">
      <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
    </svg>
    <h3 className="text-3xl text-gray-500 m-5  group-hover:text-black">
        Hesaplılık
    </h3>
    <p  className="text-2xl text-center border-t-2 border-[#69564C] border-opacity-30 group-hover:border-cyan-600 pt-5">
    Ürünleriniz için verdiğiniz her kuruş mobilyalarınıza değer katar.
    </p>
</div>
</div>
  )
}
