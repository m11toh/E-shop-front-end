import Image from 'next/image';
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiShoppingCart } from 'react-icons/hi'
// import logo from '@/public/Logo.png';



function HeaderMain() {
  return (
    <div className='border-b border-gray-200 py-2'>
        <div className='container sm:flex justify-between items-center'>
          <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-black'>
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
          </div>

          <div className='w-full sm:w-[300px] md:w-[70%] relative'>
            <input 
              type="text"
              className='border-gray-200 border p-2 px-4 rounded-lg w-full' 
              placeholder='Enter Product Name....'
            />

            <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />

          </div>

          <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
            <BiUser />

            <div className='relative'>
              <FiHeart />
              <div className='bg-red-600 rounded-full absolute top-0 right-0 h-[18px] w-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1 '>
                0
              </div>
            </div>

            <div className='relative'>
              <HiShoppingCart />
              <div className='bg-red-600 rounded-full absolute top-0 right-0 h-[18px] w-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1 '>
                0
              </div>
            </div>

          </div>

        </div>

    </div>
  )
}

export default HeaderMain