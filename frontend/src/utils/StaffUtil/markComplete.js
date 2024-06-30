import apiClient from '../../apiInstance/apiInstance'


export const markComplete = async (orderId) => {    
    try{
        const response = await apiClient.post('order/markCompleted',{
            "order_Id" :orderId
        }).then((data)=>{
            console.log("from markComplete", data.data);
            alert("Order MArked Complete")
            return data.data;
        }).catch((err)=>{
            console.log(err);
        })
        return response;
    }
    catch(err){
        console.log(err);
    }
}