import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col md:flex-row border p-4 rounded-lg hover:shadow-lg transition duration-200 bg-white cursor-pointer">

            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover rounded-md md:w-64 md:h-64" 
            />

            <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
                <div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-2 mt-4 lg:mt-8 font-semibold">{product.category}</p>
                <p className="text-gray-800 mb-2 mt-4 lg:mt-8 font-semibold">${product.price}</p>
                </div>
                <p className="text-sm text-gray-600 font-semibold">{product.description}</p>
            </div>
            
        </div>
    )
};

export default ProductCard


