import React, { useContext } from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import images3 from "../assets/images3.png"
import { ApiData } from './ContextApi';
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ShopFirstInner = ({allPage, activeGrid, categoryFilter}) => {
    let {info, loading} = useContext(ApiData);
    
    
    
    
    
    
  return (
    
    <>
        {categoryFilter.length > 0 ? (
            
            <div className="flex flex-wrap gap-5">
                {categoryFilter.map((item) => (
                   
                   
                 <div className='w-[32%] sm:w-1/2 md:w-[32%]   lg:w-[32%] border-[1px] border-[#dddd] bg-[#f8f9fa] rounded-[8px] shadow-inner '>
            
                  
                 
            
                 <div className="relative group overflow-hidden w-full justify-between">
                 <Link to={`/shop/${item.id}`}>
                     <img className='w-full justify-between' src={item.thumbnail} alt="" />
                     </Link>
                    
                     <ul className='text-end bg-[#ffffffe0] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-180px] w-full group-hover:bottom-0 p-4'>
                         <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <FaHeart className='inline-block text-[25px] pl-1' /></li>
                         <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1' /></li>
                         <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1' /></li>
                     </ul>
                     <div className="absolute top-[20px] left-[20px]">
                         <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
                     </div>
            
                    
            
                     <div className="flex justify-between pl-2">
                                <div className="">
                                    <h3 className='text-[#262626] font-bold text-[20px] font-DMs'>{item.title}</h3>
                                    <h4 className='text-[#767676] font-normal text-[16px] font-DMs'>{item.brand}</h4>
                
                                </div>
                                <p className='text-[#767676] font-normal text-[16px] font-DMs pr-2'>${item.price}</p>
                                
                            </div>
                 </div>
                 
             </div>
                    
                    
            
                ))}
                
            </div>
        ):(    
            <div className={`${activeGrid == "active"  ? "w-[100%] flex flex-col gap-5" : "flex flex-wrap gap-5 "}`}> </div>
            
    
    )}

    
    </>
  )
}

export default ShopFirstInner
