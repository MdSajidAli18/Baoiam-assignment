import React, { useState, useEffect } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import Modal from './Modal';

const ProductListing = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productsPerPage = 6;


    // Reset currentPage to 1 whenever searchTerm, category, or sortOrder changes
    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm, category, sortOrder]);



    const filteredProducts = products
    .filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true))
    .sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        if (sortOrder === 'desc') return b.price - a.price;
        return 0;
    });


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );


    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);


    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };


  return (
    <div className="p-2">

        <div className="flex flex-col mb-8 mt-2">

            <div className="flex justify-center mb-2">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="border p-2 rounded w-full md:w-80"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex justify-between">
                <select
                    className="border p-2 rounded mb-2 w-1/2 md:w-auto"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                </select>

                <select
                    className="border p-2 rounded mb-2 w-1/2 md:w-auto"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort by Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>

            </div>
        </div>


        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
                <ProductCard product={product} />
            </div>
            ))}
        </div>


        {/* Pagination */}
        <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    className={`mx-1 px-3 py-1 rounded ${
                    currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>


        {/* Modal */}
        {selectedProduct && <Modal product={selectedProduct} onClose={closeModal} />}

    </div>
  )
}

export default ProductListing

