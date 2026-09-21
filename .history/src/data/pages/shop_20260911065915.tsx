import { useEffect, useState } from 'react';



const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/shopData.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));

    }, []);
    return (
        <div>
            <p>products: {products}</p>
        </div>
    );
};

export default Shop;