import apiClient from '../../apiInstance/apiInstance'


export const AddtoCart =async (item_id , quantity)=>{

    apiClient.post('order/updateCartQuantity',
        {
            "menuItem":item_id,
            "newQuantity":quantity
        }
).then((data)=>{
    console.log("cart updated",data.data);
    alert("cart updated")
    return data.data
}).catch(err=>{
    alert("something went wrong")
    console.log(err);
})

    } 