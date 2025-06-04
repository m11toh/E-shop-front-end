import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block justify-center items-center '>
        <div className='container  py-3'>
            <div className='flex items-center justify-between'>
                <div className='hidden lg:flex gap-2'>
                    <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-amber-500 hover:text-white">
                        <BsFacebook />
                    </div>
                     <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-amber-500 hover:text-white">
                        <BsTwitterX />
                    </div>
                     <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-amber-500 hover:text-white">
                        <BsInstagram />
                    </div>
                     <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-amber-500 hover:text-white">
                        <BsLinkedin />
                    </div>
                </div>

                <div className='text-gray-500 text-[12px] '>
                    <b> FREE SHIPPING </b> THIS WEEK ORDER OVER - KSH1000
                </div>

                <div className='flex gap-4'>
                    <select 
                        className='text-gray-600 text-[12px] w-[80px]'
                        name="currency"
                        id="currency">
                            <option value="USD">$USD</option>
                            <option value="USD">KSH</option>
                            <option value="USD">euro</option>

                    </select>

                    <select 
                        className='text-gray-600 text-[12px] w-[80px]'
                        name="Language"
                        id="Language">
                            <option value="English">English</option>
                            <option value="English">Kiswahili</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop