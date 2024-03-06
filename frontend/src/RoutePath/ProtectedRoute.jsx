import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Product from "../Pages/ProtectedPages/Product/Product"
import Cart from "../Pages/ProtectedPages/Cart/Cart"
import Wishlist from "../Pages/ProtectedPages/Wishlist/Wishlist"

const ProtectedRoute = () => {
    return (
        <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<Navigate to="/product" />} />
        </Routes>
    )
}

export default ProtectedRoute
