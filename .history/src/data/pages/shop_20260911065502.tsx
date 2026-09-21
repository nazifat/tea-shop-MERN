import React, { useEffect, useState } from 'react';

const Products =()=>{

    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch("/shopData.json")
        .then((res)=> res.json())
        .then((data)=> setProducts(data))
        .catch((error)=> console.error(error));

    },[]);
}

console.log(Products)
const Shop = () => {
    return (
        <div>
            
        </div>
    );
};

export default Shop;