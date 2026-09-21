import { useEffect, useState } from 'react';



const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/shopData.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));

    }, []);
    console.log(data)
    return (
        <div className='h-96 bg-red-100'>
            <h1>hellow

            </h1>
            <p>products: {products}</p>
        </div>
    );
};

export default Shop;