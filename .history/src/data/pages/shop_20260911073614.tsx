import { useEffect, useState } from 'react';

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
        <div className='h-96 bg-red-100'>
            <h1>Shop</h1>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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