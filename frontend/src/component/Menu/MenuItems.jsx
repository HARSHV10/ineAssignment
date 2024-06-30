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
    <h1 className="text-center text-7xl font-bold text-red-600  p-5 ">
  Menu
</h1>
    <div className='p-10 flex justify-between flex-wrap space-bet'>
    
    <button className='text-white text-2xl bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded' onClick={()=>{filterItems("drinks")}}>Drinks</button>
    <button className='text-white text-2xl bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded' onClick={()=>{filterItems("appetizers")}}>appetizers</button>
    <button className='text-white text-2xl bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded' onClick={()=>{filterItems("desserts")}}>desserts</button>
    <button className='text-white text-2xl bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded' onClick={()=>{filterItems("main courses")}}>main courses</button>
    
    </div>
    <div className='flex justify-start  flex-row  flex-wrap space-bet'>
    {menuItems.map((item)=>{
        return (
            <MenuCard key={item.item_Id} item={item}/>
            )
            })}
            
    </div>
    </div>
  )
}
