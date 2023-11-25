import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from './MenuMobile';
import { fetchDataFromapi } from '@/utils/api';
import { useSelector } from 'react-redux';




const Header = () => {
 
  const[mobileMenu,setMobileMenu]=useState(false);
  const[showCatMenu,setShowCatMenu]=useState(false);
  const[show,setShow]=useState('translate-y-0');
  const[lastScrollY,setLastScrollY]=useState(0);
  const[categories,setCategories]=useState(null);
  const {cartItems} = useSelector((state=>state.cart ))
 
 
 
  const controlNavbar = () => {
    if(window.scrollY > 200){

        if(window.scrollY > lastScrollY && !mobileMenu ){
          setShow('-translate-y-[80px]');

        }else{

          setShow('shadow-sm');

        }


    }else{
      setShow('translate-y-0');
    }
     setLastScrollY(window.scrollY);
  }

 
  useEffect(()=>{
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll" , controlNavbar);
    };
  },[lastScrollY])


  useEffect(()=>{
    fetchCategories();
  },[])


  const fetchCategories = async()=>{
    const {data} =  await fetchDataFromapi('/api/categories?populate=*')
    setCategories(data)
    
  } 



 
 
 
 
 
 
//  when we add  custom value in tailwind we add it in [] like h-[40px]
  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} `}>
 

    <Wrapper className='h-[60px] flex justify-between items-center ' > 
      <Link href='/'>
      <img src="/logo.png" alt=""  className='w-[65px]  md:w-[100px]'/>
      </Link>
      {/* desktop menu */}
      <Menu showCatMenu={showCatMenu} 
      setShowCatMenu={setShowCatMenu}
      categories={categories}
      />

      {/* mobile menu */}
      {mobileMenu && (<MenuMobile
      showCatMenu={showCatMenu} 
      setShowCatMenu={setShowCatMenu}
      setMobileMenu={setMobileMenu}
      categories={categories}

     
      
      />
      )}



      {/* for mobile interface */}
      <div className=' flex items-center gap-2 text-black pt-5'>
       {/* icon start */}
        {/* this is how we made  a cart icon showing 5 cart items hardcoded for now  */}
      <div className='w-8  md:w-12 h-8  md:h-12 rounded-full flex justify-center hover:bg-black/[0.05] cursor-pointer relative'>
        <IoMdHeartEmpty className=' text-[19px] md:text-[24px]'/>
        <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute  top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center  items-center
        px-[2px] md:px-[5px]
        '>54</div>
      </div>
      {/* icon end */}


      {/* icon start */}
        {/* this is how we made  a cart icon showing 5 cart items hardcoded for now  */}
        <div className='w-8  md:w-12 h-8  md:h-12 rounded-full flex justify-center hover:bg-black/[0.05] cursor-pointer relative'>
        <Link href='/cart'>
        <BsCart className=' text-[15px] md:text-[20px]'/>
        
        
        {  cartItems.length > 0&&   <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center  items-center 
        px-[2px] md:px-[5px]
        '>{cartItems.length}</div> }
        </Link>
      </div>
      {/* icon end */}


      {/* mobile icons start */}
      <div className='w-8  md:w-12 h-8  md:h-12 rounded-full flex justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
        {

          mobileMenu ? (

            <VscChromeClose className='text-[16px] md:hidden'
            onClick={()=> setMobileMenu(false)}
            />
          ):(
            <BiMenuAltRight className='text-[20px] md:hidden'
            onClick={()=> setMobileMenu(true)}
            />
          )

        }



      </div>

      {/* mobile icon end  */}






      </div>
      
      



    </Wrapper>
    </header>
  )
}

export default Header
