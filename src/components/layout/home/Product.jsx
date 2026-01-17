import React from 'react';
// import products from '@/data/toys.json'
import ProductCard from '../../cards/ProductCards';
import { getProduct } from '@/app/actions/server/product';

const Product = async() => {
    const products = await getProduct()
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>
            <div className='grid grid-cols-3 gap-4'>
                { products.map(product=> 
           <ProductCard key={product.title} product={product}></ProductCard>
        
           )}
            </div>
           
        </div>
    );
};

export default Product;