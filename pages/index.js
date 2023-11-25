import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper"
import { fetchDataFromapi } from "@/utils/api";
import { useEffect, useState } from "react"






export default function Home({products}) {

  // const[data, setData]= useState(null);
  
  // useEffect(()=>{
  //   fetchproducts()
  // },[])


  // const fetchproducts = async() =>{

  //   const {data} = await fetchDataFromapi('/api/products')
  //    setData(data)
  // }








  return (
    <>
      <main>
        
        <HeroBanner/>
        {/* <h1>{products?.data?.[1]?.attributes?.name}</h1> */}
        <Wrapper>
        {/* heading and paragraph start */}
      
       

        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[30px] md:text-[40px] mb-5 font-semibold leading-tight">
                Mid-Season-Sale
          </div>


          <div className="text-md md:text-xl">
            Shop Now
          </div>



        </div>

        {/* heading and paragraph end */}


          {/* product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
        px-5 md:px-0
        ">

        {products?.data?.map((product)=>( 
        <ProductCard key ={product?.id} data={product}/>)

        )}

        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}

        </div>

        {/* product grid end */}








        </Wrapper>

      </main>
    </>
  )
}

// servee side props always added after our main component

export async function getStaticProps(){
  const products = await fetchDataFromapi('/api/products?populate=*')

  // this method returns propsof object

  return{
    props:{products}
  }


}
