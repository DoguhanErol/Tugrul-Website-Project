import React from 'react'
import { Link } from 'react-router-dom'

export default function ImageCard({imageUrl, imageAlt, imageId }) {
  const imageIdStr = imageId;
  const imgId = '/galeri/'+imageIdStr;
  console.log(imgId);
  return (
<article className="max-w-[495px] m-1 shadow-md dark:bg-gray-900 dark:text-gray-100">
    {/*Image Card*/}
    <figure className="cursor-pointer space-y-2">
      <Link to={imgId}>
      <img src={imageUrl} alt={imageAlt} id={imageId} className="block object-cover object-center w-full rounded-md h-[340px] dark:bg-gray-500" />
      </Link>
    </figure>
</article>
  )
}
