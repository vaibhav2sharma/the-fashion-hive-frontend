import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import { addToCart } from '@/store/cartSlice'
import { fetchDataFromapi } from '@/utils/api'
import { getDiscountedPricePercentage } from '@/utils/helper'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdHeartEmpty } from 'react-icons/io'
import ReactMarkdown from 'react-markdown'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = ({product, products}) => {
  
  const [selectedSize,setSelectedSize] =useState();
  const [showError,setShowError] = useState(false)
  const p = product?.data?.[0]?.attributes;
  let name= p.name;
  // redux use dispatch instance
  const dispatch = useDispatch();
  // methodd for toast to work
  const notify = ()=>{
    toast.success('Great news! 🎉 Your selected item has been successfully added to your cart. Check it out now to review your choices and proceed to a seamless checkout experience. Happy shopping! 🛒✨' , {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }

  
  return (
    <div className=' w-full md:py-20'>
     <ToastContainer/>
     <Wrapper>
       
       <div className=' flex flex-col  lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

         {/* creating two coloumn div left and right */}
        {/* left div start */}
        <div className=' w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel images={p.image.data}/>
        </div>
             {/* left div end */}


            {/* right dicv start */}
        <div className=' flex-[1] py-3'>
           {/* title */}
           <div className=' text-[34px] font-semibold mb-4 leading-[40px] '>
              {p.name}
           </div>
            {/* subtitle */}

            <div className='text-lg font-semibold mb-5'>
              {p.subtitle}
            </div>

            {/* price */}

              <div className='flex items-center'>
                <p className='mr-2 text-lg font-semibold'>
                  MRP : ₹{p.price}
                </p>
                {p.original_price&&(
                  <>
                  <p className=' text-base font-medium line-through'>
                  ₹{p.original_price}
                  </p>
                  <p className=' ml-auto text-base font-medium text-green-500'>
                      {getDiscountedPricePercentage(
                        p.original_price,p.price
                      )}
                      % off
                  </p>
                  
                  
                  
                  </>
                )}

              </div>

            {/* inclussive of tax message  */}
            <div className='text-md font-medium text-black/[0.5]'>
              incl. of taxes 
            </div>
            <div className='text-md font-medium text-black/[0.5] mb-20'>
              {`(also includes all applicable duties)`}
            </div>


          {/* product size range start */}

          <div className='mb-10'>
            {/* heading start */}
            <div className=' flex justify-between mb-2'>
              <div className='text-md font-semibold'>
                Select Size

              </div>

              <div className='text-md font-semibold text-black/[0.5] cursor-pointer'>
                Select Guide
              </div>

            </div>
            {/* heading end */}


            {/* size chart start */}

              <div  id='sizesGrid' className='grid grid-cols-3 gap-2'>

                  {p.size.data.map((item , i)=>(<div key={i} className={` border rounded-md text-center py-3 font-medium ${item.enabled ? 'hover:border-black cursor-pointer' : 'cursor-not-allowed bg-black/[0.1] opacity-50'} ${selectedSize === item.size ? 'border-black' : ''}`}
                  onClick={()=>{
                    setSelectedSize(item.size)
                    setShowError(false)
                   }}
                  >
                      
                      

                      {item.size}
                    </div>))}





                    {/* <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      XS
                    </div>
                    <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      S
                    </div>
                    <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      M
                    </div>
                    <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      L
                    </div>
                    <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      XL
                    </div>
                    <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50'>
                      XXL
                    </div> */}

              </div>




            {/*Size chart end  */}

            {/* show error message */}
            {showError && (<div className=' text-red-600 mt-1'>
              Size selection is required.

            </div>) }








          </div>
          {/* product size range end */}

            {/* buttons  */}

            <button className=" w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75" onClick={()=>{
               if(!selectedSize){
                  setShowError(true)
                  document.getElementById('sizesGrid').scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                  })
               }else{
                dispatch(addToCart({
                  ...product?.data?.[0],
                  selectedSize,
                  oneQuantityPrice: p.price,
                }));
                notify();
               }
                
            }}>
              Add To Cart
            </button>

            {/* wishlist button */}
            <button className=" w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95  flex items-center justify-center gap-2 hover:opacity-75 mb-4">
              Whishlist
              <IoMdHeartEmpty size={20}/>
            </button>


            { selectedSize && <Link href={`https://wa.me/9818866257/?text=Want to buy product:${name.toString()} price:${p.price} size: ${selectedSize}`  }  target="_blank"  >
            

            <button  className=" w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95  flex items-center justify-center gap-2 hover:opacity-75 hover:text-green-400 mb-10" 

            >

                
                
                Buy Through WhatsApp
              <FaWhatsapp className='text-green-500' size={20}/>
            </button>
            </Link>
              
            }
              
              
           

            {/* Product detail start */}

            <div>
              <div className='text-lg font-bold mb-5'>
                Product Details
              </div>

              <div className='markdown text-md mb-5'>
              
                <ReactMarkdown>
                {p.description}
                </ReactMarkdown>
                

                

              </div>

            </div>






        </div>

        
            {/* right dicv end */}


       </div>
       <RelatedProducts products={products}/>









     </Wrapper>
    </div>
  )
}

export default ProductDetails




export async function getStaticPaths() {
  const products =   await fetchDataFromapi('/api/products?populate=*')

  const paths = products.data.map((p)=>({
      params:{
        slug:p.attributes.slug
      }
  }))

  return{
    paths,
    fallback: false
  }

}



export async function getStaticProps({params :{slug}}){
  const product = await fetchDataFromapi(`/api/products?populate=*&filters[slug][$eq]=${slug}`)
  // this is for related products
  const products = await fetchDataFromapi(`/api/products?populate=*&[filters][slug][$ne] = ${slug} `)
  return{
    props:{
      product,
      products,
    },
  }

} 
