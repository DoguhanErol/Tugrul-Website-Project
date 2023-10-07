import React from 'react'

export default function GoogleMaps() {
  return (
    <div className="relative text-right h-[500px] w-[100%]">
      {/*Google Maps*/}
      <div className=" bg-none h-[500px] w-[100%]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d750.9864613765127!2d28.627052269659227!3d41.157533007929935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA5JzI3LjEiTiAyOMKwMzcnMzkuNyJF!5e0!3m2!1str!2str!4v1687281793971!5m2!1str!2str"  width="100%" height="500" id="gmap_canvas"  frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}></iframe>
      </div>
    </div>
  )
}
