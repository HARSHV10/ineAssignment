import apiClient from '../../apiInstance/apiInstance'


export const getOrderFromId = async (orderId) => {
   return apiClient.get(`/order/GetOrder?order_Id=${orderId}`).then((data)=>{
        // console.log(data);
        return data.data;
    }).catch((err)=>{
        console.log(err);
    })
}