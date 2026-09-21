import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
interface Product {
    id:number;
}
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct]= useState <Product | null>(null);

    useEffect(()=>{
        fetch("/shopData.json")
        .then((res)=> res.json())
        .then((data)=> {
            const foundProduct = data.find(
            (item: Product) => item.id === Number(id)
            );

            setProduct(foundProduct);
            console.log(foundProduct)
        })
    },[id])
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;