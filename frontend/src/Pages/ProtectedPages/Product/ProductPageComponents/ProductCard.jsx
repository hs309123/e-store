import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover object-center" src={product.image} alt={product.name} />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-800 font-semibold mb-2">${product.price}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
