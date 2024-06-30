import { useState , useContext} from "react";
import UserContext from "../../context/userContext";
import apiClient from "../../apiInstance/apiInstance";
import { getUserinfo } from "../../utils/getUserinfo";
export default function Login() {
    const [username , setUserName]= useState();
    const [password , setPassword]= useState();
    const [loading, setloading]= useState(false);
    const {user  ,change, setChange} =useContext(UserContext);
    
    const loginUser = async ()=>{
        setloading(true);
        apiClient.post("auth/login",{
            username,
            password
        }).then(async (response)=>{
            const token = response.data;
            localStorage.setItem('token', token);
            setChange(!change)
            const data = await getUserinfo();
            // setUser(data);
            setloading(false);
            setUserName("");
            setPassword("");
        }).catch((error)=>{
            setloading(false);
            alert("something went wrong")
            console.log(error)
        })
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-4/12 flex flex-col justify-center items-center rounded-2xl border-2 border-slate-800 p-10">
    <h1 className="text-3xl">Login</h1>
    {loading ? "loading" : ""}
    
    <input className="w-full m-5 p-3 rounded-md border-solid border border-slate-800" type="text" placeholder="username" value={username} onChange={(e) => {
      setUserName(e.target.value)
    }} id="username"/>
    
    <input className="w-full m-5 p-3 rounded-md border-solid border border-slate-800" type="password" placeholder="password" value={password} onChange={(e) => {
      setPassword(e.target.value);
    }} id="password"/>
    
    <button className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded border-1 text-white  bg-slate-800 border-slate-800 p-5w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded border-1 text-white  bg-slate-800 border-slate-800 p-5" onClick={loginUser}>Login</button>
  </div>
</div>
        )
    }
