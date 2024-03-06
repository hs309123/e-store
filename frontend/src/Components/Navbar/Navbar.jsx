import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ login }) => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <NavLink to="/" className="text-white text-lg font-semibold">E-Store App</NavLink>
                    </div>
                    {!login && <div className="flex space-x-4">
                        <NavLink to="/" className={({ isActive }) => (`${isActive && "underline"} text-white hover:text-gray-300`)}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (`${isActive && "underline"} text-white hover:text-gray-300`)}>About Us</NavLink>
                        <NavLink to="/login" className={({ isActive }) => (`${isActive && "underline"} text-white hover:text-gray-300`)}>Login</NavLink>
                        <NavLink to="/signup" className={({ isActive }) => (`${isActive && "underline"} text-white hover:text-gray-300`)}>Signup</NavLink>
                    </div>}
                    {login && <div className="flex space-x-4">
                        <NavLink to="/product" className={({ isActive }) => (`text-white hover:text-gray-300 ${isActive && "underline"}`)}>Product</NavLink>
                        <NavLink to="/wishlist" className={({ isActive }) => (`text-white hover:text-gray-300 ${isActive && "underline"}`)}>Wish List</NavLink>
                        <NavLink to="/cart" className={({ isActive }) => (`text-white hover:text-gray-300 ${isActive && "underline"}`)}>Cart</NavLink>
                    </div>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
