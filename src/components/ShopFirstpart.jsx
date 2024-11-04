import React, { useContext, useEffect, useState } from 'react';
import Container from './Container';
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus, FaHeart,  FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";



import { Link } from 'react-router-dom';
import ShopFirstInner from './ShopFirstInner';
import { ApiData } from './ContextApi';
import Pagination from './Pagination';

const ShopFirstpart = () => {
    let {info, Loading} = useContext(ApiData)
    let [show, setShow] = useState(false);
    let [currentPage, setCurrentPage] = useState(1);
    let [perPage, setPerPage] = useState(6);
    let [activeGrid, setActiveGrid] = useState("")
    let [category, setCategory] = useState([])
    let [categoryFilter, setCategoryFilter] = useState([])

    let lastPage = currentPage * perPage
    let fistPage = lastPage - perPage

    let allPage = info.slice(fistPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(info.length / perPage); i++){
        pageNumber.push(i)

    }

    let paginate = (paginate) => {
    setCurrentPage(paginate + 1);
    };
   let next = () => {
    if (currentPage < pageNumber.length){
        setCurrentPage((state) => state + 1);
    }
   };
        
   let prev = () => {
    if (currentPage > 1){
        setCurrentPage((state) => state - 1);
    }
   };

   let handleMulti = () =>{
    setActiveGrid("active");
   };

   useEffect(()=>{
    setCategory([...new Set(info.map((item)=> item.category))])
   },[info])

   
   let handleCategory = (citem) => {
    let filterItem = info.filter((item)=> item.category == citem);
    setCategoryFilter(filterItem)
    
   }
   console.log(categoryFilter);
   
        

    

    
  
    
    
  
    


  
    
    
    return (
        <section>
            <Container>
                <div className="flex">
                    <div className="w-1/5">
                    <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Products</h2>
                            <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                                <Link to="/">Home</Link>
                                <li><IoIosArrowForward /></li>
                                <li>Products</li>
                            </ul>
                    
                    <div className="mt-[50px]">
                            <div className="flex justify-start gap-[20px] items-center cursor-pointer" onClick={() => setShow(!show)}>
                                <h2 className='text-[#262626] font-bold font-DMs text-[22px]'>Shop by Category</h2>
                                {show ? <FaMinus /> : <FaPlus />}
                            </div>
                            {show && (
                                // <ul className="mt-3">
                                //     {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map((category, index) => (
                                //         <li key={index} className='text-[16px] font-DMs font-normal text-[#767676] mt-3'>{category}</li>
                                //     ))}
                                // </ul>
                              
                              <ul>
                                {category.map((item)=>(
                                    <li 
                                    onClick={()=> handleCategory(item)} 
                                    className='text-[18px] text-[#767676] font-DMs font-normal cursor-pointer py-2 capitalize'>{item}</li>

                                ))}
                               
                               
                              </ul>
                            )}
                        </div>
                        </div>
                    <div className="w-4/5 mt-10">
                        <div className="mt-5">
                            <div className="flex items-center gap-5 text-[30px]">
                                <div onClick={()=>setActiveGrid("")} className="p-3 hover:bg-[#767676]">
                                    <IoGridSharp />
                                </div>
                                <div onClick={handleMulti} className="p-3 hover:bg-[#76767696]">

                                    <FaList />
                                </div>

                            </div>


                        </div>
                    <div className="flex justify-end gap-4 ">
                            <div>
                                <label className='pr-3' htmlFor="">Sort By:</label>
                                <select className="w-[80px] h-[30px] border-[2px] border-[#262626]">
                                    {['One', 'Two', 'Three', 'Four', 'Five'].map((option, index) => (
                                        <option key={index} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className='pr-3' htmlFor="">Show By:</label>
                                <select className="w-[80px] h-[30px] border-[2px] border-[#262626] rounded=[6px]">
                                    {['One', 'Two', 'Three', 'Four', 'Five'].map((option, index) => (
                                        <option key={index} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-5 flex-wrap w-full  mt-10">
                        <ShopFirstInner allPage={allPage} 
                        activeGrid={activeGrid}
                        categoryFilter={categoryFilter}
                        />
                         <div className="flex justify-center w-full">
                         <Pagination pageNumber={pageNumber} 
                         paginate={paginate}
                         next={next}
                         prev={prev}
                         currentPage={currentPage}
                         />
                         

                        </div>


                        </div>
                    </div>
                    </div>
                
                {/* <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/5">
                        <div>
                            <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Products</h2>
                            <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                                <Link to="/">Home</Link>
                                <li><IoIosArrowForward /></li>
                                <li>Products</li>
                            </ul>
                        </div>
                        <div className="mt-[80px]">
                            <div className="flex justify-start gap-[20px] items-center cursor-pointer" onClick={() => setShow(!show)}>
                                <h2 className='text-[#262626] font-bold font-DMs text-[20px]'>Shop by Category</h2>
                                {show ? <FaMinus /> : <FaPlus />}
                            </div>
                            {show && (
                                <ul className="mt-3">
                                    {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map((category, index) => (
                                        <li key={index} className='text-[16px] font-DMs font-normal text-[#767676] mt-3'>{category}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    

                    <div className="md:w-4/5 mt-[200px]">
                        <div className="flex justify-end items-center gap-[20px] mb-10">
                            <div>
                                <label className='pr-3' htmlFor="">Sort By:</label>
                                <select className="w-[120px] h-[30px] border-[2px] border-[#262626]">
                                    {['One', 'Two', 'Three', 'Four', 'Five'].map((option, index) => (
                                        <option key={index} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className='pr-3' htmlFor="">Show By:</label>
                                <select className="w-[120px] h-[30px] border-[2px] border-[#262626]">
                                    {['One', 'Two', 'Three', 'Four', 'Five'].map((option, index) => (
                                        <option key={index} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        </div>
                        </div> */}
                       
                        
                        {/* <div className="flex gap-5 flex-wrap w-full justify-center mt-10">
                         <ShopFirstInner allPage={allPage} />
                         <div className="flex justify-center w-full">
                         <Pagination pageNumber={pageNumber}/>

                         </div>
                         </div> */}
                       
                    
                
            </Container>
        </section>

        
    );
};

export default ShopFirstpart;
