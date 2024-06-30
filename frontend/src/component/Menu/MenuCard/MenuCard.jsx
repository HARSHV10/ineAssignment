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
    <div className="border" onClick={()=>{
        console.log(item_Id)
    }}>
        <div >
            <img src={image} alt="item" />
        </div>
        <div>
        <p>{item_Id}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
        </div>

        {quantity}
        
        <div>
        <button onClick={()=>{
            setQuantity(quantity+1);
        }}>+</button>
        <button onClick={()=>{
            setQuantity(quantity-1>0 ? quantity-1 : 0);
        }}>-</button>
        </div>
        
        <div className='flex justify-between'>
    
        
        <button onClick={()=>{
            AddtoCart(item_Id,quantity);
        }}>add To Cart</button>
        </div>
    </div>
  )
}
