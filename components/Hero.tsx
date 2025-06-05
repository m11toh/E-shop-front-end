"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

function Hero() {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    }

    const slidedata = [
        {
            id:0,
            img: "/PerfumeBanner.png",
            title: "Smelling fine",
            maintitle: "Latest perfume",
            price: "Ksh1500"
        },
        {
            id:1,
            img: "/ShoeBanner.png",
            title: "Wear fine",
            maintitle: "Great Timber",
            price: "Ksh4000"
        },{
            id:2,
            img: "/WomenBanner.png",
            title: "Wear fine",
            maintitle: "Great Timber",
            price: "Ksh2500"
        },{
            id:3,
            img: "/WomenBanner.png",
            title: "Wear fine",
            maintitle: "Great Timber",
            price: "Ksh2500"
        }
    ]


  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider{...settings}>
                {slidedata.map((item) =>(
                    <Slide
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        maintitle={item.maintitle}
                        price={item.price}
                    />
                ))}

            </Slider>
        </div>

    </div>
  )
}

export default Hero