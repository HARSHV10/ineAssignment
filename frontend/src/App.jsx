import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register/Register'
import Login from './component/Login/Login'
import UserContextProvider from './context/userContextProvider'
import Navbar from './component/Navbar/Navbar'
import MenuItems from './component/Menu/MenuItems'
import Profile from './component/profile/Profile'
import ActiveOrders from './component/Staff/ActiveOrders'
import Home from './component/Home/Home';
import AddStaff from './component/AddStaff/AddStaff';
import './App.css'

function App() {


  return (
    <UserContextProvider>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/activeorders" element={<ActiveOrders/>}/>
    <Route path="/menu" element={<MenuItems/>}/>
    <Route path="/addstaff" element={<AddStaff/>}/>
    </Routes>
    </Router>
    </UserContextProvider>

  )
}

export default App
