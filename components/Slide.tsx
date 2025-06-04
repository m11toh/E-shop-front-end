import React from 'react';
import Image from 'next/image'

interface propsType{
    img: string;
    title:string;
    maintitle:string;
    price: string;
}

const Slide:React.FC<propsType> = ({img, title, maintitle, price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%]
        -translate-y-[50%] space-y-2 lg:space-x-4 bg-[#5c9e35] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
            <h3 className='text-accent text-[24px] lg:text-[28px] '>{title}</h3>
            <h2 className='text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold  '>
                {maintitle}
            </h2>
            <h3 className='text-[24px] text-gray-500'>
                starting at{" "}
                <b className='text-[20px] lg:text-[30px] md:text-[24px]'>{price}</b>
            </h3>
            <div className='bg-green-300 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black'>
                SHOP NOW
            </div>

        </div>

        <Image 
            className='w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom'
            alt="Slide Image"
            src={img}
            width={900}
            height={900}
        />

    </div>
  )
}

export default Slide