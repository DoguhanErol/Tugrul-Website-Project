import React from 'react'

export default function AboutContent() {
  return (
    <>
    <div className="flex text-2xl sm:text-3xl flex-col bg-[url('./assets/bg-hakkinda.webp')] bg-cover bg-center items-center py-5 w-full justify-center bg-[#F8EDE3] h-auto">
        <section className='flex justify-center p-6 m-4 rounded-lg bg-[#69564cc8] shadow-2xl w-auto  md:w-[82%] lg:w-[80%]'>
            <article className='flex flex-col lg:flex-row w-full'>
                <section className='flex justify-center items-center'>
                    <figure className='w-72 text-[#FFF7F0]'>
                        {/*Storage Svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="full" viewBox="0 0 24 24" width="full" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>
                    </figure>
                </section>
                <section className='flex p-9 border-t lg:border-l lg:border-t-0 text-[#d8d2cd] border-stone-400 justify-start items-start'>
                    <p>
                    2002 yılında İstanbul’da faaliyete geçen firmamız Tuğrul Mobilya, faaliyete geçtiği ilk günden bu yana kaliteyi ve müşteri memnuniyetini bir prensip haline getirmiştir. İstanbul’un çeşitli semtlerinde, yurdumuzun çeşitli bölgelerinde farklı mimar ve mimari bürolarla çalışarak ve ayrıca kendi tasarladığı özgün proje konseptlerini uygulayarak birçok dekorasyon projelerine imza atmıştır.
                    </p>
                </section>
            </article>
        </section>
        <section className='flex flex-row flex-wrap justify-center'>
            <article className='flex flex-col justify-center items-center p-6 m-4  rounded-lg  bg-[#69564cc8]  shadow-2xl md:max-w-sm w-auto'>
                <section>
                    {/*Vizyon Svg */}

                </section>
                <section className='text-[#d8d2cd]  p-3 shadow-sm-light  justify-start items-start'>
                    <h2 className='flex justify-center text-3xl font-semibold my-2 text-[#c78b63]'>Vizyon</h2>
                    <p className='text-center'>Kalite ve müşteri memnuniyetinden ödün vermeden sektörün önde gelen uluslararası markalarından birisi olmak.</p>
                </section>
            </article>
            <article className='flex flex-col  justify-center items-center p-6 m-4  rounded-lg  bg-[#69564cc8]  shadow-2xl md:max-w-sm w-auto'>
                <section>
                    {/*Misyon Svg */}

                </section>
                <section className='text-[#d8d2cd]  p-3 shadow-sm-light  justify-start items-start'>
                    <h2 className='flex justify-center text-3xl font-semibold my-2 text-[#c78b63]'>Misyon</h2>
                    <p className='text-center'>Müşteri istek ve arzularına eksiksiz biçimde yanıt vererek, müşteri ve çalışan ilişkilerini her daim geliştirmek.</p>
                </section>
            </article>
        </section>
        </div>
    </>
  )
}
