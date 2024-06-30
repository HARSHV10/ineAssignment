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

    <div>
    <h1>Menu  Items</h1>
    <div className='flex justify-between bg-slate-600 flex-wrap space-bet'>
    
    <button onClick={()=>{filterItems("drinks")}}>Drinks</button>
    <button onClick={()=>{filterItems("appetizers")}}>appetizers</button>
    <button onClick={()=>{filterItems("desserts")}}>desserts</button>
    <button onClick={()=>{filterItems("main courses")}}>main courses</button>
    
    </div>
    <div className='flex flex-row bg-slate-600 flex-wrap space-bet'>
    {menuItems.map((item)=>{
        return (
            <MenuCard key={item.item_Id} item={item}/>
            )
            })}
            
    </div>
    </div>
  )
}
