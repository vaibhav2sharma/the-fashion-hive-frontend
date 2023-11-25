import { getDiscountedPricePercentage } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const ProductCard = ({data}) => {
  return (
    <Link href={`/product/${data.attributes.slug}`}
    
    // for hover effect

    className=' transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'
    
    
    >
      {/* image component */}
      <Image
        width={500}
        height={500}
        src={data.attributes.thumbnail.data.attributes.url}
        
        
      
      
      />
      {/* product card */}
      <div className='p-4 text-black/[0.9]'>
        {/* product name and disc */}
        <h2 className='text-lg font-medium'>
          {data.attributes.name}
        </h2>
        {/* product price */}
        {
          
        }

        <div className=' flex items-center text-black/[0.5]'>
          {/* original pricee */}
            <p className='mr-2 text-lg font-semibold'>₹{data.attributes.price}</p>
            {/* discounted price */}
            
            {/* show discount only when we have an original price */}

            {data.attributes.original_price && (
              <>
              <p className=' text-base font-medium line-through'>
              ₹{data.attributes.original_price}

              </p>

              {/* percentage  */}

              <p className=' ml-auto text-base font-medium text-green-500'>
               
                {/* method for our percentage */}

                {getDiscountedPricePercentage(data.attributes.original_price,data.attributes.price)}% off
                  
              </p>

              
              </>


            )}


            

        </div>





      </div>
    </Link>
  )
}

export default ProductCard
