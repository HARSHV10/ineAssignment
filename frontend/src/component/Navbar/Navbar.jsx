import React from 'react'
import UserContext from '../../context/userContext'
import { useState , useContext} from "react";
import { Link } from 'react-router-dom'; // Import Link


export default function Navbar() {
    const {user ,role} = useContext(UserContext);
    // console.log(context)
    // console.log(user , role)
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/register', name: 'Register' },
        { path: '/login', name: 'login' },
        { path: 'profile', name: 'profile' },
        { path: 'menu', name: 'menu' },
        
    ];
    if(role=='staff'){
        routes.push({ path: 'activeorders', name: 'active orders' } ,{ path: 'addStaff', name: 'addStaff' },);
    }
    return (
        <div className='flex flex justify-between items-center p-4 bg-gray-800 text-white'>
        <div className="text-white"> To signin as staff , username : "staff" , password:"staff"</div>   
        <div className='flex gap-4  flex-wrap'>
                {routes.map((route) => (
                    <Link key={route.path} to={route.path} className='bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded'>
                        {route.name}
                    </Link>
                ))}
            </div>
            <div>
            <div className="text-sm bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className='text-lg font-bold'>{user || "Guest"}</span>
            <span className="text-md font-semibold px-2 py-1 bg-blue-200 rounded-full">{role || "Login"}</span>
          </div>
            </div>
        </div>
    )
}
