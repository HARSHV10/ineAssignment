import apiClient from '../../apiInstance/apiInstance'


export const removeFromCart =async (item_id)=>{

    apiClient.post('order/removeFromCart',
        {
            "menuItem":item_id,
        }
).then((data)=>{
    console.log("added to cart",data.data);
    alert("removed from cart")
    return data.data
}).catch(err=>{
    console.log(err);
})

    } 