import React, { useEffect,useState, useContext } from 'react'
import { getOrderFromId } from '../../utils/orderUtil/getOrderFromID';
import UserContext from '../../context/userContext';
import { markComplete } from '../../utils/StaffUtil/markComplete';

export default function OrderDetails(order) {
    const [orderDetails, setOrderDetails] = useState();
    const {role}= useContext(UserContext);
    const [hidden,setHidden] =useState("")
    
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
        <div className={`bg-slate-600 border border-slate-400 m-4 p-4 rounded-lg ${hidden}`}>
        <h1 className="text-xl font-bold text-white mb-4">Order Details</h1>
        <div className="text-white">
            <p className="mb-2">Order Id: <span className="font-semibold">{orderDetails.order_Id}</span></p>
            <p className="mb-2">Table Number: <span className="font-semibold">{orderDetails.tableNumber}</span></p>
            <p className="mb-2">Order Status: <span className={`font-semibold ${orderDetails.OrderStatus === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>{orderDetails.OrderStatus}</span></p>
            <p className="mb-2">User: <span className="font-semibold">{orderDetails.User}</span></p>
            <div className="mb-2">
                <p className="font-semibold mb-1">Items:</p>
                {orderDetails.items.map((item, index) => (
                    <div key={index} className="ml-4">
                        <div>Menu Item ID: <span className="font-semibold">{item.menuItem}</span></div>
                        <div>Quantity: <span className="font-semibold">{item.quantity}</span></div>
                    </div>
                ))}
            </div>
            <p>Created At: <span className="font-semibold">{orderDetails.createdAt}</span></p>
        </div>
        {role === 'staff' && (
            <button 
                onClick={() => {
                    markComplete(orderDetails.order_Id).then(()=>{
                        setHidden("hidden");
                    }).catch((err)=>{
                        console.log(err);
                    });
                    
                }} 
                className='mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow'
            >
                Mark Complete
            </button>
        )}
    </div>
  )
}
