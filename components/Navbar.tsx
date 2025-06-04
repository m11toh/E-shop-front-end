import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'>
                <Link className='cursor-pointer hover:text-amber-500 hover:underline hover:decoration-amber-500 hover:underline-offset-4 transition duration-200 hover:text-2xl' href="#">HOME</Link>
                <Link className='cursor-pointer hover:text-amber-500 hover:underline hover:decoration-amber-500 hover:underline-offset-4 transition duration-200 hover:text-2xl' href="#">CATEGORIES</Link>
                <Link className=' cursor-pointer hover:text-amber-500 hover:underline hover:decoration-amber-500 hover:underline-offset-4 transition duration-200 hover:text-2xl' href="#">MEN'S</Link>
                <Link className='cursor-pointer hover:text-amber-500 hover:underline hover:decoration-amber-500 hover:underline-offset-4 transition duration-200 hover:text-2xl' href="#">WOMEN</Link>
                <Link className='cursor-pointer hover:text-amber-500 hover:underline hover:decoration-amber-500 hover:underline-offset-4 transition duration-200 hover:text-2xl' href="#">SNEAKERS</Link>
                
                
            </div>

            

        </div>

    </div>
  )
}

export default Navbar