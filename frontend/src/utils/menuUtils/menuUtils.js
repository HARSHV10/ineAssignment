import apiClient from '../../apiInstance/apiInstance'

export const getMenu = (item_id)=>{
    return apiClient.get(`menu/getMenuFromID?menu_id=${item_id}`).then((data)=>{
        return data.data;
    }).catch(err=>{
        console.log(err);
    })
}