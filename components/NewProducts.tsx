import React from 'react'
import ProductsCard from './ProductsCard'

const ProductsData = [
    {
        img:"/Gucci.jpeg",
        title:"Gucci Perfume",
        desc:"Smell nice with gucci perfume",
        rating: 3,
        price:"1100"

    },{
        img:"/J1.jpeg",
        title:"Jordan 1",
        desc:"Sneakers for casual outfit",
        rating: 5,
        price:"3800"

    },{
        img:"/Fargeon Perfume.jpeg",
        title:"Fargeon Perfume",
        desc:"One of the best perfumes",
        rating: 4,
        price:"2000"

    },{
        img:"/Monk Strap Shoes.jpeg",
        title:"Monk Strap",
        desc:"Nice officisal shoe",
        rating: 4,
        price:"4000"

    },

]



function NewProducts() {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 ">
                {ProductsData.map((item, index) =>(
                    <ProductsCard 
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    
                    />
                ))}

            </div>
        </div>
    </div>
  )
}

export default NewProducts