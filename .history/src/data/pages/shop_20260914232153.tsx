import { useEffect, useState } from 'react';
import TopHeader from '../components/TopHeader';
import { Link } from 'react-router';

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
        <div>
            <TopHeader pageName='Shop' coverImage='https://png.pngtree.com/thumb_back/fh260/background/20240426/pngtree-a-cup-of-tea-on-the-wooden-table-tea-bag-in-image_15671847.jpg'></TopHeader>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 m-5'>
                {products.map((product) => (
                    <Link key={product.id} to={`/${product.id}`} >
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="h-72 w-full">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='h-full w-full object-cover' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center">{product.name}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-center">
                                    <button className="
                                                btn
                                                bg-[#1B5E20]
                                                text-white
                                                border-0
                                                rounded-xl
                                                px-6
                                                shadow-md
                                                transition-all
                                                duration-300
                                                hover:bg-[#2E7D32]
                                                hover:shadow-xl
                                                hover:-translate-y-1
                                        ">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
                )}
            </div>
        </div>


    );
};

export default Shop;