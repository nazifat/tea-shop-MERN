import { useEffect, useState } from 'react';
import TopHeader from '../components/TopHeader';

interface Shop {
    id: number;
    name: String;
    category: string;
    price: number;
    oldPrice: number;
    rating: number;
    stock: number;
    description: number;
    image: string;
    size: string;
    featured: boolean;
    alt: string;
}
const Shop = () => {
    const [products, setProducts] = useState<Shop[]>([]);

    useEffect(() => {
        fetch("/shopData.json")
            .then((res) => res.json())
            .then((data: Shop[]) => setProducts(data))
            .catch((error) => console.error(error));

    }, []);
    return (
        <div className=''>
            <TopHeader pageName='Shop'></TopHeader>
            <div className='grid grid-cols-3 gap-4 m-5'>
                {products.map((product) => (
                    <div key={product.id}  >
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='h-72' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>

        </div>


    );
};

export default Shop;