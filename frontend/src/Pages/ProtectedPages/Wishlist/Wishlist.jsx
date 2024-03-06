import React, { useState, useEffect } from 'react';
import WishlistCard from './WishlistComponents/WishlistCard';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    // Fetch wishlist items from local storage on component mount
    useEffect(() => {
        const storedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
        setWishlistItems(storedWishlistItems);
    }, []);



    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <>
                    {wishlistItems.map(item => (
                        <WishlistCard item={item} />
                    ))}
                </>
            )}
        </div>
    );
};

export default WishlistPage;
