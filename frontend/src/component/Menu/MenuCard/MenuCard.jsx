import React from 'react'
import {OrderItem} from '../../../utils/orderUtil/orderItem'
import { AddtoCart } from '../../../utils/orderUtil/addToCart'
import {useState} from 'react'

export default function MenuCard({item}) {
    // console.log("item",item)
    const {name , description , price , image , category,item_Id} = item;
    const [quantity, setQuantity] = useState(0);
// {
//     "_id": "667f17f312b213b272f860bd",
//     "item_Id": 1,
//     "name": "Test Item2",
//     "description": "This is a test item",
//     "price": 10.99,
//     "image": "https://www.google.com",
//     "category": "Drinks",
//     "__v": 0
// }
  return (
    <div className="w-80 pb-2 pl-2 pr-2 border rounded-xl m-3 bg-gray-700 text-white" onClick={() => {
        console.log(item_Id);
    }}>
        <div className="w-full flex justify-center align-middle overflow-hidden">
            <img src={image} alt="item" className="rounded-t-lg scale-120" />
            </div>
            <div className="p-4 ">
            <p className="font-bold text-center text-4xl pb-3">{name}</p>
            <p className='text-center'>{description}</p>
            <div className='pl-3 pr-3 flex justify-evenly bg-slate-500 w-full p-2 rounded'>
            <span className=''> {item_Id}  </span>
            <span className=''> | </span>
            <span className="font-semibold">${price}</span>
            <span className="font-semibold">|</span>
            <span className="italic">{category}</span>
            </div>
        </div>
    
        
        <div className="bg-gray-800  flex justify-center items-center gap-4 mb-4">
            <button className="text-2xl text-white rounded-full px-4 py-2 hover:bg-gray-600" onClick={() => {
                setQuantity(quantity + 1);
            }}>+</button>
            <span className="text-2xl">
            {quantity}
            </span>
            <button className="text-2xl text-white rounded-full px-4 py-2 hover:bg-gray-600" onClick={() => {
                setQuantity(quantity - 1 > 0 ? quantity - 1 : 0);
            }}>-</button>
            
            <div className='flex justify-center'>
            <button className="bg-green-500 text-white rounded-lg px-6 py-2 hover:bg-green-400" onClick={() => {
                AddtoCart(item_Id, quantity);
            }}>Add To Cart</button>
            </div>
            </div>
    </div>
  )
}
