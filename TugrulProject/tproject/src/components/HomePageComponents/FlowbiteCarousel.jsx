import { Carousel } from 'flowbite-react'
import exm1 from '../../assets/mutfak_dolabi.png'
import exm2 from '../../assets/exm2.webp'
import exm4 from '../../assets/exm4.webp'
import exm7 from '../../assets/exm7.webp'

function FlowbiteCarousel() {
  return (
    
<div className=" h-[260px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] bg-[#FFE8D2]">
  
    {/*Slider*/}
  <Carousel className=''  slideInterval={5000}>
  <img
      width={'full'}
      height={'max'}
      src={exm4}
      alt="Slider Image 1"
    />
  <img
      width={'full'}
      height={'max'}
      src={exm2}
      alt="Slider Image 2"
    />
        <img
      width={'full'}
      height={'max'}
      src={exm1}
      alt="Slider Image 3"
    />
        <img
      width={'full'}
      height={'max'}
      src={exm7}
      alt="Slider Image 4"
    />
  </Carousel>
</div>
  );
}

export default FlowbiteCarousel;