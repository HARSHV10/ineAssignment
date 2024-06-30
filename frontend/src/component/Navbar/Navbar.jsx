import React from 'react'
import UserContext from '../../context/userContext'
import { useState , useContext} from "react";

export default function Navbar() {
    const {user ,role} = useContext(UserContext);
    // console.log(context)
    // console.log(user , role)
    return (
        <div className='flex justify-between'>
        <div>{user?user : "Guest"}</div>
        <div>{role?role: "Login"}</div>
        </div>
    )
}
