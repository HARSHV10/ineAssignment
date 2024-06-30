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
    <div className='text-center'>
    <div className='bg-gray-800 text-white'>
    <h1 className='text-3xl text-white'>Profile</h1>
    <div className="text-lg text-white">
        Hello! <span className="text-3xl font-bold">{user}</span>, welcome! You are logged in as a {role}.
    </div>
    </div>
    <p className='text-4xl font-bold text-gray-800 pt-10 pb-10 '>Cart Item</p>
    <div className='flex justify-evenly flex-wrap'>
    {cart && cart.map((item)=>{
        console.log(item)
        return (
                <CartCard key={item._id} item={{"quantity":item.quantity , "menuItem":item.menuItem}}/>
                // <MenuCard key={item.item_Id} item={item}/>
                )
                })}
        </div>
        <div className='flex justify-center'>
        <input className='border border-10 p-1' placeholder='Enter Table number ' type ="number" onChange={(e)=>{
            setTable(e.target.value);
            }}/>
            <button className='bg-green-500 pl-3 pr-3 font-bold text-white' onClick={()=>{
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
                                
                                </div>
            <div>
            <p className='text-4xl font-bold text-gray-800 pt-10 pb-10'>Order History</p>
            {orderHistory && orderHistory.map((order)=>( <OrderDetails key={order._id} order={order}/>))}
            </div>

            </div>
  )
}
