import React from 'react'

const WishlistCard = ({ item }) => {

    // Function to remove an item from the wishlist
    const removeFromWishlist = (itemId) => {
        const updatedWishlistItems = wishlistItems.filter(item => item.id !== itemId);
        setWishlistItems(updatedWishlistItems);
        localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));
    };

    return (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
            <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
            </div>
            <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => removeFromWishlist(item.id)}
            >
                Remove
            </button>
        </div>
    )
}

export default WishlistCard
