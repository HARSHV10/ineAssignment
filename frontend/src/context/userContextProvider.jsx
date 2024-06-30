import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { getUserinfo } from "../utils/getUserinfo";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState();
    const [role, setRole] = useState();
    const [cart, setCartItem] = useState();
    const [orderHistory, setOrderHistory] = useState();
    const [change , setChange]= useState();

    useEffect(() => {
        const fetchUser = async () => {
            getUserinfo().then((data)=>{
                console.log(data);
                // {
                //     "role": "user",
                //     "user_name": "bot3",
                //     "cart": [
                //         {
                //             "menuItem": 1,
                //             "quantity": 3,
                //             "_id": "66811c277621d5f48348e176"
                //         },
                //         {
                //             "menuItem": 3,
                //             "quantity": 4,
                //             "_id": "66812a26dfa66245e96b26d9"
                //         }
                //     ],
                //     "OrderHistory": [
                //         1,
                //         2,
                //         3,
                //         4
                //     ]
                // }
                setUser(data.user_name);
                setRole(data.role);
                setCartItem(data.cart);
                setOrderHistory(data.OrderHistory);
            }).catch((err)=>{
                console.log(err);
            });
            
        }
        fetchUser();
    },[change]);

    return (
        <UserContext.Provider value={{
            "user":user,
            "role":role,
            "cart":cart,
            "orderHistory":orderHistory,
        "change":change,
        "setChange":setChange
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;