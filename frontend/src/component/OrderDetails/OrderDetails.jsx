import React, { useEffect,useState, useContext } from 'react'
import { getOrderFromId } from '../../utils/orderUtil/getOrderFromID';
import UserContext from '../../context/userContext';
import { markComplete } from '../../utils/StaffUtil/markComplete';

export default function OrderDetails(order) {
    const [orderDetails, setOrderDetails] = useState();
    const {role}= useContext(UserContext);
    const {change, setChange}=useContext(UserContext);
    
    // {
    //     "_id": "668120a47621d5f48348e1d0",
    //     "order_Id": 3,
    //     "tableNumber": 1,
    //     "OrderStatus": "pending",
    //     "User": "bot3",
    //     "items": [
    //         {
    //             "menuItem": 1,
    //             "quantity": 3,
    //             "_id": "668120a47621d5f48348e1d1"
    //         }
    //     ],
    //     "createdAt": "2024-06-30T09:08:52.831Z",
    //     "__v": 0
    // }

    useEffect(()=>{
        const fetchOrder = async () => {
            const data = await getOrderFromId(order.order);

            setOrderDetails(data);
        }
        fetchOrder();
    },[])
   
    if(!orderDetails){return "No order Exist "}
    return (
    <div className='bg-slate-600 border m-2'>
        <h1>Order Details</h1>
        <div>
            <p>Order Id: {orderDetails.order_Id}</p>
            <p>Table Number: {orderDetails.tableNumber}</p>
            <p>Order Status: {orderDetails.OrderStatus}</p>
            <p>User: {orderDetails.User}</p>
            <p>Items: {orderDetails.items.map((item)=>(
                <>
                <div>menu Item ID :  {item.menuItem}</div> 
                <div>Quantity : {item.quantity}</div>
                </>
            ))}</p>
            <p>Created At: {orderDetails.createdAt}</p>
        </div>
        {role === 'staff' && <button onClick={
        ()=>{
            markComplete(orderDetails.order_Id);
            setChange(!change);
            }
        } className='bg-red-500'>Mark Complete</button>}
    </div>
  )
}
