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
    <div className={`bg-slate-700 border m-1 ${display} `}>
        <div>
            <img src={menu.image} alt="item" />
        </div>
        <div>
            <p>{menu.name}</p>
            <p>{menu.description}</p>
            <p>{menu.price}</p>
            <p>{menu.category}</p>
        </div>
        <div>
        <button onClick={()=>{
            AddtoCart(item.menuItem,quantity+1).then(()=>{
                console.log("added to cart");
                setquantity(quantity+1);
            }).catch((err)=>{
                console.log(err);
            });
        }}>+</button>
        <p>{quantity}</p>
        <button onClick={async ()=>{
            AddtoCart(item.menuItem,quantity-1>0?quantity-1:0).then(()=>{
                console.log("added to cart");
                setquantity(quantity-1>0 ? quantity-1 : 0);
            }).catch((err)=>{
                console.log(err);
            });
        }}>-</button>
        </div>
        <button onClick={async ()=>{
            removeFromCart(item.menuItem).then(data=>{
                console.log(data);
                setdisplay("hidden")
            }).catch(err=>console.log(err));
        }}>Remove item</button>
    </div>
  )
}
