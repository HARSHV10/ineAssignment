import apiClient from '../../apiInstance/apiInstance'

// export const MarkComplete = async (id) => {
//     return apiClient.post("order/markCompleted",{
//         "order_Id":id
//     }
//     ).then((data)=>{
//         return data.data
//     }).catch((err)=>(err));
// }

export const getActiveOrders = async () => {
    return apiClient.get('order/getActiveOrder').then((data)=>{
        return data.data
    }).catch((err)=>(
        // console.log(err)
        err
    ));
}