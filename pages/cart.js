import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import Wrapper from '../components/Wrapper'
import Cartitem from '@/components/Cartitem'
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js'
import { makePaymentRequest } from '@/utils/api'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)



const Cart = () => {
  const [loading, setLoading] =useState(false);
  
  const {cartItems} = useSelector((state=>state.cart ))

  const subTotal = useMemo(()=>{
    return cartItems.reduce((total , val)=> total + val.attributes.price,0)
  },[cartItems])

// method to handle stripe payment

const handlePayment = async ()=>{
  try {
    setLoading(true)
    const stripe = await stripePromise;
    const res = await makePaymentRequest('/api/orders',{
      products: cartItems
    })
    await stripe.redirectToCheckout({
      sessionId: res.stripeSession.id
    })
  } catch (error) {
      setLoading(false)
      console.log(error)
  }
}







  return (
    <div className='w-full md:py-20'>
      <Wrapper>
          {cartItems.length > 0 && (
              <>
              {/* Headding and paragraph start*/}
                    <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
    
              <div  className=' text-[20px] md:text-[32px] mb-5 font-semibold leading-tight'>
                Shopping Cart
              </div>
    
            </div>
            {/* HEading and paragraph end */}
    
            {/* cart content start */}
            <div className=' flex flex-col lg:flex-row gap-12 py-10'>
    
            {/* cart item start */}
              <div  className=' flex-[2]'>
    
                <div className='text-lg font-bold'>Cart Items</div>
                
                {cartItems.map((item)=>(
                  <Cartitem key={item.id} data={item}/>
                ))}
                
                
                {/*     
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
                 */}
    
    
    
              </div>
    
              {/* cart summary start */}
    
                <div className='flex-[1]'>
                  <div className='text-lg font-bold'>Summary</div>
    
                  <div className=' p-5 my-5 bg-black/[0.05] rounded-xl'>
                    <div className='uppercase text-md md:text-lg font-medium text-black'>
                        Subtotal
                    </div>
                    <div className='text-md md:text-lg font-medium text-black'>
                    ₹{subTotal}
                    </div>
                    <div className='text-sm md:text-md py-5 border-t mt-5'>
                    🌟 Welcome to The Fashion Hive! 🌟
                    <br></br>

            Discover style with ease as we simplify your shopping experience. At The Fashion Hive, your subtotal already includes duties and taxes, ensuring a seamless and transparent checkout. Please note that delivery charges and international fees are not included. We believe in making fashion accessible and delightful for you. Happy shopping! 🛍️👗.
            <br></br> #FashionHive #StyleSimplified
    
    
                  </div>
    
    
    
                  </div>
                  <button className=' w-full py-4 rounded-full bg-black  text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center'
                  onClick={handlePayment}
                  >
                    Checkout
                    {loading && <img src='/spinner.svg'
                    
                
                    />}
                  </button>
                  
                  
    
    
                </div>
              {/* cart summary end */}
    
    
    
            {/* cart item end */}
    
    
            </div>
    
            {/* cart content end */}
              
              </>
          )}
          
          
        
      
      
    {/* EMPTY SCREEN DATA  */}
    { cartItems.length < 1 &&     <div className=' flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>

      {/* empty cart image */}
      <Image
      src='/emptycart.jpg'
       width={300}
       height={300}
       className='w-[300px] md:w-[400px]'

      />
      <span className='text-xl font-bold'>
        Your cart is empty..
      </span>

      <span className='text-center mt-4'>
        Looks like you have not added anything in your cart
        <br></br>
        Go ahead and explore top categories
      </span>

      {/* link to products */}

      <Link
      href='/'
      className='py-4 px-8 rounded-full bg-black text-white text-left font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
      
      >
      
      Continue Shopping
      
      
      
      </Link>

      

    </div>}
      
      
      </Wrapper>
    </div>
  )
}

export default Cart
