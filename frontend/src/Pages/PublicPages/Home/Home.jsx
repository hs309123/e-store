import React from 'react';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-115px)] flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Store</h1>
                <p className="text-lg mb-8">Browse our collection of amazing products!</p>
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Products
                </Link>
            </div>
        </div>
    );
};

export default Home;