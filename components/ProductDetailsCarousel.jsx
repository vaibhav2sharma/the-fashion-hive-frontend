import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = ({images}) => {
  {console.log(images)}
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
        // options
        
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
        
        >

        {images.map((img)=>(
          <img key={img.id} src={img.attributes.url} alt={img.attributes.name} />
        ))}


{/* 
            <img src="/product1.webp" alt="" />
            <img src="/logo.png" alt="" />
            <img src="/slide2.jpg" alt="" /> */}

        
        
        </Carousel>    
      
    </div>
  )
}

export default ProductDetailsCarousel
