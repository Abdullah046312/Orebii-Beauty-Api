import React, { useContext, useEffect, useState } from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

import images3 from "../assets/images3.png"
import { ApiData } from './ContextApi';
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


<<<<<<< HEAD
const ShopFirstInner = ({ allPage, activeGrid, categoryFilter, priceShow }) => {
    let { info, loading } = useContext(ApiData);
    let [filterShow, setFilterShow] = useState([]);
    let [count, setCount] = useState(true);
=======
const ShopFirstInner = ({allPage, activeGrid, categoryFilter}) => {
    let {info, loading} = useContext(ApiData);
    let [filterShow, setFilterShow] = useState([]);

    useEffect(()=> {
        let fiveFilter = categoryFilter.slice(0, 5);
        setFilterShow(fiveFilter);

    },[categoryFilter]);
    console.log(filterShow);
    
    
    
    
    
    
    
    
  return (
    
    <>
        {filterShow.length > 0 ? (
            
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
            <div className={`${activeGrid == "active"  ? "w-[100%] flex flex-col gap-5" : "flex flex-wrap gap-5 "}`}> 
              <div className="flex flex-wrap gap-5">
              
                {allPage.map((item) => (
                   
                   
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
            </div>
            
           
            
            
            
    
    )}
>>>>>>> 0f9bc54aa276bf5bac4f6fe45bca265860b8592c

    useEffect(() => {
        let fiveFilter = categoryFilter.slice(0, 5);
        setFilterShow(fiveFilter);

    }, [categoryFilter]);

    let handleSee = () => {
        setFilterShow(categoryFilter);
        setCount(false);
    };

    let handleSeeless = ()=>{
        let fiveFilter = categoryFilter.slice(0,5);
        setFilterShow(fiveFilter);
        setCount(true);
    }







    return (

        <>
        {filterShow.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-4 ">
              {filterShow.map((item) => (
                <div className="w-[32%] border-[1px] border-[#dddd] bg-[#f8f9fa] rounded-[8px] shadow-inner ">
                  <div className="">
                    <div className="relative group overflow-hidden">
                      <Link to={`/shop/${item.id}`}>
                        <img className="w-full" src={item.thumbnail} alt="" />
                      </Link>
                      <ul className='text-end bg-[#ffffffe0] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-180px] w-full group-hover:bottom-0 p-4'>
                        <li className="py-2">
                          Add to Wish List <FaHeart className="inline-block" />
                        </li>
                        <li className="py-2">
                          Compare <IoGitCompare className="inline-block" />
                        </li>
                        <li className="py-2">
                          Add to Cart <FaCartPlus className="inline-block" />
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <div className="flex justify-between p-5 ">
                    <div className="">
                      <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                        {item.title}
                      </h3>
                      <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                        {item.brand}
                      </h5>
                    </div>
                    <p className="text-[#262626] font-bold text-[16px] font-sans">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center w-full">
  {count
    ? categoryFilter.length > 5 && (
        <div onClick={handleSee} className="flex justify-center items-center w-full">
          <h2 className='text-[16px] text-[#262626] font-DMs font-semibold mt-10 border-2 border-[#262626] py-3 px-10 hover:bg-black hover:text-white duration-300 ease-out cursor-pointer'>
            Show-More
          </h2>
        </div>
      )
    : categoryFilter.length > 5 && (
        <div onClick={handleSeeless} className="flex justify-center items-center w-full">
          <h2 className='text-[16px] text-[#262626] font-DMs font-semibold mt-10 border-2 border-[#262626] py-3 px-10 hover:bg-black hover:text-white duration-300 ease-out cursor-pointer'>
            Show-Less
          </h2>
        </div>
      )}
</div>

          </>
        ) : (
          <div
            className={`${
              activeGrid == "active" ? "w-[100%] flex flex-col gap-4 " : "flex flex-wrap gap-4"
            }`}
          >
            {allPage.map((item) => (
              <div className="w-[32%] border-[1px] border-[#dddd] bg-[#f8f9fa] rounded-[8px] shadow-inner  ">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <Link to={`/shop/${item.id}`}>
                      <img className="w-full" src={item.thumbnail} alt="" />
                    </Link>
                    <ul className='text-end bg-[#ffffffe0] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-180px] w-full group-hover:bottom-0 p-4'>
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2">
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>
  
                <div className="flex justify-between p-5">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      {item.title}
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      {item.brand}
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

export default ShopFirstInner
