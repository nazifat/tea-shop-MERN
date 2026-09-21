import  { useEffect, useState } from 'react';



const Shop = () => {
     const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch("/shopData.json")
        .then((res)=> res.json())
        .then((data)=> console.log(data))
        .catch((error)=> console.error(error));

    },[]);
    return (
        <div>
            <p></p>
        </div>
    );
};

export default Shop;