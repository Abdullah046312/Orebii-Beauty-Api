import React, { useContext, useEffect, useState } from 'react';
import Container from './Container';
import { FaPlus, FaMinus, FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import ShopFirstInner from './ShopFirstInner';
import Pagination from './Pagination';
import { ApiData } from './ContextApi'; // Import the context

const ShopFirstpart = () => {
  // Context hook to get data from the provider
  const { info, loading } = useContext(ApiData);
  
  const [show, setShow] = useState(false);  // Show/hide category list
  const [currentPage, setCurrentPage] = useState(1);  // Current page number
  const [perPage, setPerPage] = useState(6);  // Items per page
  const [activeGrid, setActiveGrid] = useState("");  // Grid/List view toggle
  const [category, setCategory] = useState([]);  // List of categories
  const [categoryFilter, setCategoryFilter] = useState([]);  // Filtered categories
  const [low, setLow] = useState(0);  // Low price filter
  const [high, setHigh] = useState(2000);  // High price filter

  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const filteredData = categoryFilter.length > 0 ? categoryFilter : info; // Use filtered or all data
  const allPage = filteredData.slice(firstPage, lastPage); // Paginated data

  // Calculate page numbers
  const totalPages = Math.ceil(filteredData.length / perPage);
  const pageNumber = Array.from({ length: totalPages }, (_, index) => index);

  // Pagination functions
  const paginate = (paginate) => {
    setCurrentPage(paginate + 1);
  };

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage((state) => state + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  // Toggle grid/list view
  const handleMulti = () => {
    setActiveGrid("active");
  };

  // Fetch categories from the product data
  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
  }, [info]);

  // Filter products by category
  const handleCategory = (citem) => {
    if (citem) {
      const filterItem = info.filter((item) => item.category === citem);
      setCategoryFilter(filterItem);
    }
  };

  // Show all products
  const handleAll = () => {
    setCategoryFilter([]);  // Reset filter
  };

  // Filter by price range
  const handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    const priceRange = info.filter((item) => item.price >= value.low && item.price <= value.high);
    setCategoryFilter(priceRange.length > 0 ? priceRange : []);  // Set filtered or reset filter
  };

  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
            <div className="pr-6 pt-8">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <h2 className='text-[#262626] font-bold font-DMs text-[22px]'>
                  Shop by Category
                </h2>
                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (
                <ul>
                  <li
                    onClick={handleAll}
                    className="capitalize text-[#262626] font-DMs font-semibold cursor-pointer py-1 text-[20px] mt-4 border-b-4 pb-3"
                  >
                    All Products
                  </li>
                  {category.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleCategory(item)}
                      className="text-[18px] text-[#767676] font-DMs font-normal cursor-pointer py-1 capitalize border-b"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h2 className="text-[#262626] font-bold text-[22px] font-DMs cursor-pointer mt-10">Shop by Price</h2>
              <ul className='text-[18px] text-[#767676] font-DMs font-normal cursor-pointer py-1 capitalize mt-3'>
                <li onClick={() => handlePrice({ low: 0, high: 5 })}>$0 - $5</li>
                <li className='py-2' onClick={() => handlePrice({ low: 5, high: 10 })}>$5 - $10</li>
                <li className='pb-2' onClick={() => handlePrice({ low: 10, high: 15 })}>$10 - $15</li>
                <li onClick={() => handlePrice({ low: 15, high: 2000 })}>$15 - All</li>
              </ul>
            </div>
          </div>

          <div className="w-4/5 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div
                  onClick={() => setActiveGrid("")}
                  className="p-3 hover:bg-[gray] text-[#222]"
                >
                  <IoGrid className='text-[30px]' />
                </div>
                <div
                  onClick={handleMulti}
                  className="p-3 hover:bg-[gray] text-[#222]"
                >
                  <FaList className='text-[30px]' />
                </div>
              </div>

              <div className="flex justify-end items-center gap-x-10 pb-10">
                <div>
                  <label className="pr-3">Sort By:</label>
                  <select
                    onChange={(e) => setPerPage(parseInt(e.target.value))}
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                  >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between flex-wrap">
              <ShopFirstInner
                allPage={allPage}
                activeGrid={activeGrid}
                categoryFilter={categoryFilter}
              />

              <div className="py-10 flex justify-center w-full">
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ShopFirstpart;
