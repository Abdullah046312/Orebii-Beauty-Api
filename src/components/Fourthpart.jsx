import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Fourthpart = () => {
  return (
   <section className='py-8'>
    <Container className="bg-fourthpart bg-cover bg-no-repeat w-full h-[370px] pt-[61px] lg:pl-[681px] md:pl-[400px] sm:pl-[200px] pl-5 flex flex-col items-start">
        <div className="text-left max-w-full">
            <h2 className='text-[32px] sm:text-[32px] md:text-[36px] lg:text-[39px] text-black font-DMs font-bold'>
              Phone of the year
            </h2>
            <p className='text-[14px] sm:text-[15px] md:text-[16px] text-black font-DMs font-medium max-w-full lg:pr-[350px] py-[20px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
            </p>
            <div className="mt-3">
              <Link to="/shop">
                <button className='h-[50px] w-[150px] sm:w-[185px] bg-[#262626] text-white text-[14px] sm:text-[16px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>
                  Shop Now
                </button>
              </Link>
            </div>
        </div>
    </Container>



    
   </section>
  )
}

export default Fourthpart
