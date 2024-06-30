import React ,{useContext, useEffect , useState} from 'react'
import OrderDetails from '../OrderDetails/OrderDetails'
import { getActiveOrders } from '../../utils/StaffUtil/staffUtils';
import UserContext from '../../context/userContext';


export default function ActiveOrders() {
    const [order, setOrder] = useState([]);
    const {role}= useContext(UserContext);
    // console.log(role);
    
    useEffect(() => {
        
        const fetchOrder = async () => {
            const data = await getActiveOrders();
            // console.log(data);
            setOrder(data);

        }
        fetchOrder();
    },[]);

    console.log(order)
    // if(order){
    //     return("No Active Order")
    // }

  return (
    <div className='bg-slate-600 border m-2'>
        <h1>Active Orders</h1>
        <div>
        {order && order.map((item)=>{
            return(
                <OrderDetails key={item._id} order={item}/>
            )
        })}
        </div>
    </div>
  )
}
