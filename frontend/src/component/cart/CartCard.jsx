import React from 'react'
import {getMenu} from '../../utils/menuUtils/menuUtils'
import {useState, useEffect, useContext} from 'react';
import {removeFromCart} from '../../utils/orderUtil/removeFromCart.js'
import { AddtoCart } from '../../utils/orderUtil/addToCart.js'
import UserContext from '../../context/userContext.js'

export default function CartCard({item}) {

        const [display ,setdisplay ]=useState("");
        const [quantity, setquantity] = useState(item.quantity);
    // console.log(item);
        // {
    //     "_id": "667f17fe12b213b272f860c3",
    //     "item_Id": 3,
    //     "name": "Test Item3",
    //     "description": "This is a test item",
    //     "price": 10.99,
    //     "image": "https://www.google.com",
    //     "category": "Drinks",
    //     "__v": 0
    // }
  

  const [menu , setMenu]= useState();

  useEffect(()=>{
    getMenu(item.menuItem).then((data)=>{
      setMenu(data[0]);
    //   console.log(menu)
    })
  },[])


  if(!menu){
    return <h1>Loading ....</h1>
  }
  if(quantity==0)return "";

    return (
    <div className={`w-80 pb-2 pl-2 pr-2 border rounded-xl m-3 bg-gray-700 text-white ${display} `}>
        <div className="w-full flex justify-center align-middle overflow-hidden">
            <img src={menu.image} alt="item" className="rounded-t-lg scale-120" />
        </div>
        <div className="p-4 ">
            <p className="font-bold text-center text-4xl pb-3">{menu.name}</p>
            <p className='text-center'>{menu.description}</p>
            <div className='pl-3 pr-3 flex justify-evenly bg-slate-500 w-full p-2 rounded'>   
            <span className="font-semibold">${menu.price}</span>
            <span className="font-semibold"> | </span>
            <span className="italic" >{menu.category}</span>
            </div>
        </div>
        <div className="bg-gray-800  flex justify-center items-center gap-4 mb-4">
        <button className="text-2xl text-white rounded-full px-4 py-2 hover:bg-gray-600" onClick={()=>{
            AddtoCart(item.menuItem,quantity+1).then(()=>{
                console.log("added to cart");
                setquantity(quantity+1);
            }).catch((err)=>{
                alert("Something went wrong")
                console.log(err);
            });
        }}>+</button>
        <p>{quantity}</p>
        <button onClick={async ()=>{
            AddtoCart(item.menuItem,quantity-1>0?quantity-1:0).then(()=>{
                console.log("added to cart");
                setquantity(quantity-1>0 ? quantity-1 : 0);
            }).catch((err)=>{
                alert("Something went wrong")
                console.log(err);
            });
        }}>-</button>
        </div>
        <button onClick={async ()=>{
            removeFromCart(item.menuItem).then(data=>{
                console.log(data);
                setdisplay("hidden")
            }).catch(err=>{
                alert("Something went wrong")
                console.log(err)});
        }}>Remove item</button>
    </div>
  )
}
