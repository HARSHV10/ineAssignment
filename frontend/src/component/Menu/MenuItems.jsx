import React, { useEffect } from 'react'
import { useState } from 'react';
import MenuCard from './MenuCard/MenuCard';
import apiClient from '../../apiInstance/apiInstance'
export default function MenuItems() {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(()=>{
        apiClient.get('menu/menuItems').then((res)=>{
            console.log(res.data);
            setMenuItems(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const filterItems = (category)=>{
        apiClient.get(`menu/filterMenuItem?category=${category}`).then((res)=>{
            console.log(res.data);
            setMenuItems(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (

    <div className=''>
    <h1 className="text-center text-6xl font-bold text-slate-700  p-5 ">
  Menu
</h1>
<h2 className="text-center text-2xl ">Click on category to filter </h2>
<div className=' bg-gray-800  p-5 md:p-10 flex flex-wrap justify-center md:justify-between'>
    
    <button className='text-white text-xl md:text-2xl bg-gray-700 hover:bg-gray-600 px-2 md:px-3 py-1 md:py-2 m-2 rounded' onClick={()=>{filterItems("drinks")}}>Drinks</button>
    <button className='text-white text-xl md:text-2xl bg-gray-700 hover:bg-gray-600 px-2 md:px-3 py-1 md:py-2 m-2 rounded' onClick={()=>{filterItems("appetizers")}}>Appetizers</button>
    <button className='text-white text-xl md:text-2xl bg-gray-700 hover:bg-gray-600 px-2 md:px-3 py-1 md:py-2 m-2 rounded' onClick={()=>{filterItems("desserts")}}>Desserts</button>
    <button className='text-white text-xl md:text-2xl bg-gray-700 hover:bg-gray-600 px-2 md:px-3 py-1 md:py-2 m-2 rounded' onClick={()=>{filterItems("main courses")}}>Main Courses</button>
    
</div>
    <div className='flex justify-evenly flex-row  flex-wrap space-bet'>
    {menuItems.map((item)=>{
        return (
            <MenuCard key={item.item_Id} item={item}/>
            )
            })}
            
    </div>
    </div>
  )
}
