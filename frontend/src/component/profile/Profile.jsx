import React from 'react'
import {useContext, useState, useEffect} from 'react'
import {getMenu} from '../../utils/menuUtils/menuUtils'
import UserContext from '../../context/userContext'
import MenuCard from '../Menu/MenuCard/MenuCard'
import CartCard from '../cart/CartCard'
import { OrderItem } from '../../utils/orderUtil/orderItem'
import OrderDetails from '../OrderDetails/OrderDetails'

export default function Profile() {

    const {user , role , cart , orderHistory,change ,setChange} = useContext(UserContext);
    if(!user){
        return "You are not logged in "
    }
  const [table, setTable] = useState();  
//   const [user,setUser] = useState();
//   const [role,setRole] = useState();
//   const [cart,setCart] = useState();
//   const [orderHistory,setOrderHistory] = useState();
//   useEffect(()=>{
//     setUser(context.user);
//     setRole(context.role);
//     setCart(context.cart);
//     setOrderHistory(context.orderHistory);
//   },[])
  console.log(user,role,cart,orderHistory);
  return (
    <div>
        <h1>Profile</h1>
        <div>{user}</div>
        <div>{role}</div>
        {cart && cart.map((item)=>{
            console.log(item)
            return (
                <CartCard key={item._id} item={{"quantity":item.quantity , "menuItem":item.menuItem}}/>
            )
        })}
        <input type ="number" onChange={(e)=>{
            setTable(e.target.value);
        }}/>
        <button onClick={()=>{
            if(table){
                OrderItem(cart,table).then(()=>{
                    console.log("Order Placed");
                }).catch((err)=>{
                    console.log(err);
                })
            }
            else{
                alert("Please enter table number");
            }
            }}>OrderCart</button>
            
            <div>
            {orderHistory && orderHistory.map((order)=>( <OrderDetails key={order._id} order={order}/>))}
            </div>

            </div>
  )
}
