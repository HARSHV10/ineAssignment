import React ,{useContext, useEffect , useState} from 'react'
import OrderDetails from '../OrderDetails/OrderDetails'
import { getActiveOrders } from '../../utils/StaffUtil/staffUtils';
import UserContext from '../../context/userContext';
import { useNavigate } from 'react-router-dom'; 


export default function ActiveOrders() {
    const navigate = useNavigate();
    const {role}= useContext(UserContext);
    if(role!='staff'){
        navigate('/');
    }
    const [order, setOrder] = useState();
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
    if(!order){
        return("No Active Order")
    }

  return (
    <div className=' border m-2'>
        <h1 className= "text-3xl text-center">Active Orders</h1>
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
