import React from 'react'

export default function Home() {
    const imgArr= [
        'https://cdn-icons-png.flaticon.com/256/7297/7297305.png',
    ]

  return (
    <div className='m-5'>
    <div className='flex flex-wrap justify-center align-middle'>
    
    <div className='w-1/2 lg:w-full sm:h-14 lg:bg-blue-50 align-middle h-auto bg-red-50 text-2xl'>
    
    hello customers ,
    all you need to do is to register and login to order your favorite food
    to order the food you  need to add the order into your cart and then you can place the order.

    </div>
    <div>
    <img src='https://cdn-icons-png.flaticon.com/256/7297/7297305.png'></img>
    </div>
    </div>
    </div>
  )
}
