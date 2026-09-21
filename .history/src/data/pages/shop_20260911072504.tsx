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
        <div className='h-96 bg-red-100'>
            <h1>Shop</h1>
            <div>
                {products.map((product) => {
                    <div key={product.it}>
                        <img src= {product.image} alt={product.name}></img>
                    <h2>{Product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Shop;