import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
interface Product {
    id:number;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    rating: number;
    stock: number;
    description: string;
    image: string;
    size: string;
    featured: boolean;
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
            console.log(foundProduct);
        })
    },[id])
    if(!product){
        return <div className='text-center py-20'>Product not found</div>
    }
    return (
        <div>
            <div>
                <img src={product.image} alt={product.name}></img>
            </div>
        </div>
    );
};

export default ProductDetails;