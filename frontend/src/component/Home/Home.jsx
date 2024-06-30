import React from 'react'

export default function Home() {
    const imgArr= [
        'https://cdn-icons-png.flaticon.com/256/7297/7297305.png',
    ]

  return (
    <div className='m-5 p-5 bg-gray-100 rounded-lg shadow'>
    <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
    
        <div className='w-full lg:w-1/2 p-5 bg-white rounded-lg shadow text-lg lg:text-xl text-gray-700'>
            <h2 className="text-2xl font-bold mb-3">Welcome, Customers!</h2>
            <p>All you need to do is to register and login to order your favorite food.</p>
            <p>To order the food, you need to add the order into your cart and then you can place the order.</p>
        </div>
        
        <div className='flex justify-center items-center w-full lg:w-1/2'>
            <img src='https://cdn.dribbble.com/users/1519660/screenshots/4421016/yumpic_food_02_v2.gif' alt="Food Order" className='w-2/3 lg:w-1/2 h-auto rounded-lg'/>
        </div>
        
    </div>
</div>
  )
}
