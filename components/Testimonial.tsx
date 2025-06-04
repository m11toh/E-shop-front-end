import Image from 'next/image'
import React from 'react'

function Testimonial() {
  return (
    <div>
        <div className='container pt-6 pb-16 grid-cols-2 '>
            <h2 className='font-medium text-2xl pb-4'> Testimonial </h2>
            <div className="grid lg:grid-cols-[300px_1fr] gap-4">

                <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0 '>
                    <div className='text-center flex flex-col items-center gap-1'>
                        < Image
                            className='rounded-full inline-block'
                            src="/HeadshotPortrait.jpeg"
                            width={100}
                            height={100}
                            alt='dp'
                        />
                        <h2 className='text-[20px] text-gray-500 font-black'>Martin Doe</h2>
                        <p>Ceo and founder</p>
                        < Image
                            className='rounded-full inline-block text-shadow-amber-300'
                            src="/quote.svg"
                            width={70}
                            height={100}
                            alt='quotes'
                        />

                        <p className='text-gray-500 max-w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit fugit dignissimos perferendis architecto neque possimus nulla esse, tempore error facere repudiandae rem molestias quia at vero aut! Culpa, deleniti.</p>


                    </div>

                </div>

                <div className='bg-red-600 bg-[url(/CtaBanner.png)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                    <div className='bg-[rgba(67,158,45,0.5)] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-4 grid place-items-center gap-3'>
                        <button className='bg-black text-white p-2 rounded-md'>
                            25% DISCOUNT
                        </button>
                        <h2 className='font-extarbold text-2xl text-black '>Summmer collection</h2>
                        <p className='text-gray-500 text-[20px]'>Starting @ Ksh1000 <b>SHOP NOW</b></p>

                    </div>

                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Testimonial