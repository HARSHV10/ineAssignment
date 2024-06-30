import apiClient from "../apiInstance/apiInstance";

export const getUserinfo =async ()=>{

    const {role ,user_name , cart,OrderHistory} = await apiClient.get("users/getUser_information").then((res)=>{
        console.log(res.data);
        return res.data;
    }).catch((error)=>{
    console.log(error);
});
return {"role":role ,"user_name":user_name , "cart":cart,"OrderHistory":OrderHistory} ;
}