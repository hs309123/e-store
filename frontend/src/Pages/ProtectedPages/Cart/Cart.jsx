import React, { useState, useEffect } from 'react';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items from local storage on component mount
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Function to calculate total price
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-500">${item.price} x {item.quantity}</p>
                            </div>
                            <button
                                className="text-red-500 hover:text-red-700 focus:outline-none"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-8 flex justify-between">
                        <p className="text-lg font-semibold">Total:</p>
                        <p className="text-lg font-semibold">${getTotalPrice().toFixed(2)}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
