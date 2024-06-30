import apiClient from '../../apiInstance/apiInstance'

export const OrderItem = async (item, tableNumber) => {
    const itemArray = [];
    item.map((data) => {
        itemArray.push({"menuItem":data.menuItem ,"quantity": data.quantity})
    })
    console.log(itemArray)
    try{
        const orderId = await apiClient.post('order/placeOrder',{
            "tableNumber" :tableNumber,
            "items":itemArray
        }).then((data)=>{
            // console.log("from orderitem", data.data);
            alert("Order Placed")
            return data.data;
        })
        return orderId;
    }
    catch(err){
        console.log(err);
    }
}


