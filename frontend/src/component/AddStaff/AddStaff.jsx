import React from 'react'
import {useState} from 'react'
import apiClient from '../../apiInstance/apiInstance';
export default function AddStaff() {
    const [username , setusername ]=useState();
    const [userpwd , setpwd ]=useState();
  return (
    <div  className="flex flex-col justify-center items-center  h-screen  " >
    <div className="w-4/12 flex flex-col justify-center items-center rounded-2xl border-2 border-slate-800 p-10 ">
    <h1 className = "text-3xl">Add staff </h1>
    <input className="w-full m-5 p-3 rounded-md border-solid border-1/2 border-slate-800" type="text" type='text' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} id='username'/>
    <input className="w-full m-5 p-3 rounded-md border-solid border-1/2 border-slate-800" type="text" type='text' placeholder='password' value={userpwd} onChange={(e)=>setpwd(e.target.value)} id='password'/>
    <button className="w-1/2 rounded-e border-1 border-slate-800 p-2 text-white bg-red-600 rounded-md text-2xl" onClick={async ()=>{
        const data = await apiClient.post('/addStaff',{
            "username":username,
            "password":userpwd
        }).then((data)=>{
            console.log(data);
            alert("Staff added successfully")
        }).catch(err=>{
            alert("Something went wrong")
            console.log(err)
            return err;
        })
        }}>Add Staff</button>
        </div>
        </div>
    )
}
