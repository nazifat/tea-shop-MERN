import React, { useState } from 'react';
import { useParams } from 'react-router';
interface Product {
    id:number;
}
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct]= useState <Product | null>(null);
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;