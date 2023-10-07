import React from 'react'

export default function ContactInfo() {
  return (
    <div className="flex flex-col md:flex-row  justify-center bg-[#F8EDE3]">
    {/* Icon */}
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.6} stroke="currentColor" className="w-96 h-96">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    </div>

    {/* Contact Text */}
    <div className="flex flex-col max-w-5xl my-10 mx-5">
      <h2 className="text-2xl  lg:text-4xl font-bold text-neutral-400">Bizimle İletişime Geçiniz</h2>
      <p className="text-xl mt-4 lg:text-3xl">Sizlerle daha iyi hizmet sağlamak ve ihtiyaçlarınıza en iyi şekilde yanıt vermek için sabırsızlanıyoruz! Bizimle iletişime geçmek çok kolay. Aşağıda yer alan iletişim bilgilerimizden herhangi birini kullanarak bize ulaşabilir, randevu oluşturabilir veya istediğiniz bilgileri alabilirsiniz.</p>
    </div>

  </div>
  )
}
