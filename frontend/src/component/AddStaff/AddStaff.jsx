import React from 'react'
import {useState, useContext} from 'react'
import apiClient from '../../apiInstance/apiInstance';
import UserContext from '../../context/userContext';
import {useNavigate} from 'react-router-dom';

export default function AddStaff() {
    const [username , setusername ]=useState();
    const [userpwd , setpwd ]=useState();
    const navigate = useNavigate();
    const {role}= useContext(UserContext);
    if(role!='staff'){
        navigate('/');
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-4/12 flex flex-col justify-center items-center rounded-2xl border-2 border-slate-800 p-10">
    <h1 className="text-3xl">Add staff</h1>
    <input className="w-full m-5 p-3 rounded-md border-solid border border-slate-800" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} id='username'/>
    <input className="w-full m-5 p-3 rounded-md border-solid border border-slate-800" type='password' placeholder='password' value={userpwd} onChange={(e) => setpwd(e.target.value)} id='password'/>
    <button className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded border-1 text-white  bg-slate-800 border-slate-800 p-5" onClick={async () => {
        try {
            const data = await apiClient.post('/addStaff', {
                "username": username,
                "password": userpwd
            });
            console.log(data);
            alert("Staff added successfully");
        } catch (err) {
            alert("Something went wrong");
            console.log(err);
        }
    }}>Add Staff</button>
  </div>
</div>
    )
}
