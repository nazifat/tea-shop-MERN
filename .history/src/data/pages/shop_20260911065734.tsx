import  { useEffect, useState } from 'react';

const Products =()=>{

    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch("/shopData.json")
        .then((res)=> res.json())
        .then((data)=> console.log(data))
        .catch((error)=> console.error(error));

    },[]);
}


const Shop = () => {
    return (
        <div>
            
        </div>
    );
};

export default Shop;