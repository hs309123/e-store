import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import About from '../Pages/PublicPages/About/About'
import Home from '../Pages/PublicPages/Home/Home'
import Login from '../Pages/PublicPages/Login/Login'
import Signup from '../Pages/PublicPages/SignUp/Signup'

const PublicRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default PublicRoute
