import Link from 'next/link';
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'


const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "DRESSES", doc_count: 11 },
    { id: 2, name: "TOPS", doc_count: 8 },
    { id: 3, name: "JEANS", doc_count: 64 },
    { id: 5, name: "KURTAS", doc_count: 107 },
    { id: 6, name: "SAREES", doc_count: 107 },
    { id: 7, name: "ETHNIC DRESSES", doc_count: 107 },
    { id: 8, name: "KURTA SETS", doc_count: 107 },
    { id: 9, name: "T-SHIRTS", doc_count: 107 },
    { id: 10, name: "HANDBAGS", doc_count: 107 },
    { id: 11, name: "JEWELLERY", doc_count: 107 },
];




const MenuMobile = ({showCatMenu, setShowCatMenu , setMobileMenu , categories }) => {
  
    return (
    <ul className=' flex flex-col  md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px) bg-white border-t text-black]'>

        {data.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                       
                       <li className=' cursor-pointer  py-4 px-5 border-b flex flex-col relative'
                       
                       onClick={()=>setShowCatMenu(!showCatMenu)}
                       >
                            <div className='flex justify-between items-center'>
                            {item.name}
                            <BsChevronDown size={14}/>
                            </div>
                            


                            {showCatMenu &&(

                                <ul className=' bg-black/[0.05] -mx-5 mt-2 -mb-4 '>
                                    {categories?.map(({attributes: c, id})=>{

                                        return(
                                            <Link key={id} href={`/category/${c.slug}`} onClick={()=>{
                                                setShowCatMenu(false)
                                                setMobileMenu(false)
                                                
                                            }} >
                                            <li className='py-2.5 px-8 border-t  flex justify-between '>
                                                {c.name}
                                                <span className='opacity-50 text-sm'>{`(${c.products.data.length})`}</span>
                                            
                                            </li>
                                            </Link>
                                        )

                                    })}
                                </ul>

                            )}
                       
                       </li>
                       
                    ): (

                        <li className='py-4 px-5 border-b '>
                            
                            <Link href={item.url} onClick={()=>setMobileMenu(false)}>
                                {item.name}
                            </Link>
                            
                        </li>

                    ) }
                </React.Fragment>

            )

        })}





    </ul>
  )
}

export default MenuMobile;
