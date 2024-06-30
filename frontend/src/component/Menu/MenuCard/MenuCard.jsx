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
    <div className="border rounded-xl m-3 p-4 bg-gray-700 text-white" onClick={() => {
        console.log(item_Id);
    }}>
        <div className="flex">
            <img src={image} alt="item" className="rounded-t-lg" />
        </div>
        <div className="p-4">
            <p className="font-bold">Item Id  <span className='pl-3 pr-3'> {item_Id} </span></p>
            <p className="font-bold">{name}</p>
            <p>{description}</p>
            <p className="font-semibold">{price}</p>
            <p className="italic">{category}</p>
        </div>
    
        <div className="mb-4">
            Quantity : {quantity}
        </div>
        
        <div className="flex justify-center gap-4 mb-4">
            <button className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-600" onClick={() => {
                setQuantity(quantity + 1);
            }}>+</button>
            <button className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-600" onClick={() => {
                setQuantity(quantity - 1 > 0 ? quantity - 1 : 0);
            }}>-</button>
        </div>
        
        <div className='flex justify-center'>
            <button className="bg-green-500 text-white rounded-lg px-6 py-2 hover:bg-green-400" onClick={() => {
                AddtoCart(item_Id, quantity);
            }}>Add To Cart</button>
        </div>
    </div>
  )
}
