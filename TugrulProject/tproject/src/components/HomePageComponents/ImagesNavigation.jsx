import React from 'react'
import { Link } from 'react-router-dom'

import exm2 from '../../assets/exm2.webp'
import exm4 from '../../assets/exm4.webp'
import exm5 from '../../assets/exm5.webp'
import exm0 from '../../assets/exm0.webp'
import exm34 from '../../assets/mutfak_dolabi.png';


export default function ImagesNavigation() {
  return (
    <div className="flex flex-col justify-around border border-gray-300 p-1 m-1 my-20 lg:my-20 lg:m-10 lg:p-10 hover:bg-gray-50">
            <div className="flex flex-row flex-wrap justify-center items-center">
                  {/*Image Card 1*/}
                <article className="max-w-[495px] m-1 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <figure className=" space-y-2">
                      <img src={exm2} className="block object-cover object-center w-full rounded-md h-[340px] dark:bg-gray-500" />
                    </figure>
                </article>
                   {/*Image Card 2*/}
                <article className="max-w-[495px] m-1 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <figure className=" space-y-2">
                      <img src={exm4} className="block object-cover object-center w-full rounded-md h-[340px] dark:bg-gray-500" />
                    </figure>
                </article>
                  {/*Image Card 3*/}
                <article className="max-w-[495px] m-1 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <figure className=" space-y-2">
                      <img src={exm5} className="block object-cover object-center w-full rounded-md h-[340px] dark:bg-gray-500" />
                    </figure>
                </article>
                  {/*Image Card 4*/}
                <article className="max-w-[495px] m-1 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <figure className=" space-y-2">
                      <img src={exm0} className="block object-cover object-center w-full rounded-md h-[340px] dark:bg-gray-500" />
                    </figure>
                </article>
                  {/*Image Card 5*/}
                <article className="max-w-[495px] m-1 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <figure className=" space-y-2">
                      <img src={exm34} className="block object-cover object-center w-full rounded-md h-[340px] dark:bg-gray-500" />
                    </figure>
                </article>
            </div>
                   {/*Button*/}
            <div className="flex justify-end mr-[20%] mt-[5%] text-3xl">
                    <button className='border p-3 my-5 rounded-xl bg-[#4E4E4E] text-gray-300 hover:bg-[#69564C] hover:scale-105 hover:border-gray-500'>
                        <Link to={'/galeri'}>Galeri</Link>
                    </button>
            </div>
        </div>
  )
}
