import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductPageComponents/ProductCard";
import { useFetchProducts } from "../../../RouterFunctions/product"
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductsPage = () => {


    const { fetchFunc, isSuccess, isLoading, data } = useFetchProducts();

    const [allProducts, setAllProducts] = useState([])

    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchFunc(page)
    }, [page]);



    useEffect(() => {
        if (isSuccess) {
            setAllProducts(prev => [...prev, ...data.products])
        }
    }, [isSuccess])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-4">All Products</h2>
            <InfiniteScroll
                dataLength={allProducts.length}
                next={() => setPage(prev => prev + 1)}
                hasMore={allProducts.length !== data.totalResults}
                loader={<h4>Loading...</h4>}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allProducts.length > 0 ?
                        allProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                        : <p>There are No Products</p>
                    }
                    {isLoading && <p>Loading ...</p>}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default ProductsPage;
