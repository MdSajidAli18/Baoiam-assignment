import React from 'react';

const Modal = ({ product, onClose }) => {

    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">

            <div className="bg-sky-100 p-4 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md mb-4" />
                <p className="text-gray-800 mb-2 font-semibold">${product.price}</p>
                <p className="text-sm text-gray-600 font-semibold">{product.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>Close</button>
            </div>

        </div>
    )
};

export default Modal
