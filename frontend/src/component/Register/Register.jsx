import UserContext from "../../context/userContext"
import apiClient from '../../apiInstance/apiInstance'
import {useState } from "react"

export default function Register(){
  const [userName , setUserName]=useState();
  const [password , setPassword]=useState();
  const [loading, setloading]= useState(false);

  const registerUser = async ()=>{
    setloading(true);
    apiClient.post("auth/register",{
      "username":userName, 
      "password":password
  }).then((response)=>{
      console.log(response.data)
      setUserName("");
      setPassword("");
      setloading(false)
      alert("You are registered successfully")
      
    }).catch((error)=>{
      setloading(false)
      setUserName("");
      setPassword("");
      alert("Something went wrong")
      console.log(error)
    })
  }

  return(
    <div className="flex flex-col justify-center items-center  h-screen  ">
    <div className="w-4/12 flex flex-col justify-center items-center rounded-2xl border-2 border-slate-800 p-10 ">
    {loading? "loading": ""}
    <input className="w-full m-5 p-3 rounded-md border-solid border-1/2 border-slate-800" type="text" placeholder="username" value={userName} onChange={(e)=>setUserName(e.target.value)} id="username"/>
    <input className="w-full m-5 p-3 rounded-md border-solid border-1/2 border-slate-800" type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="username"/>
    <button className="w-1/2 rounded-e border-1 border-slate-800 p-5" onClick={()=>{
      registerUser();
      }}>Register</button>
      </div>
    </div>
  )
}