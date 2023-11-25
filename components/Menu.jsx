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




const Menu = ({showCatMenu, setShowCatMenu , categories }) => {
  
    return (
    <ul className=' hidden md:flex items-center gap-8 font-medium text-black'>

        {data.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                       
                       <li className=' cursor-pointer flex items-center gap-2  relative'
                       
                       onMouseEnter={()=>setShowCatMenu(true)}
                       onMouseLeave={()=>setShowCatMenu(false)}
                       >
                            {item.name}
                            <BsChevronDown size={14}/>


                            {showCatMenu &&(

                                <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>
                                    {categories?.map(({attributes: c, id})=>{

                                        return(
                                            <Link key={id} href={`/category/${c.slug}`} onClick={()=>setShowCatMenu(false)}>
                                            <li className=' h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
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

                        <li className='cursor-pointer '>
                            
                            <Link href={item.url}>
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

export default Menu
