import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
interface Product {
    id: number;
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
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch("/shopData.json")
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find(
                    (item: Product) => item.id === Number(id)
                );

                setProduct(foundProduct);
                console.log(foundProduct);
            })
    }, [id])
    if (!product) {
        return <div className='text-center py-20'>Product not found</div>
    }
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <img src={product.image} alt={product.name}
                        className='w-full h-96 object-cover rounded-2xl'
                    >
                    </img>
                    <div>
                        <p className="text-sm text-green-600 font-semibold uppercase">
                            {product.category}
                        </p>

                        <h1 className="text-4xl font-bold mt-2">
                            {product.name}
                        </h1>

                        <p className="text-gray-600 mt-4">
                            {product.description}
                        </p>
                        <div className="mt-6">
                            <span className="text-3xl font-bold text-green-700">
                                ${product.price}
                            </span>

                            {product.oldPrice && (
                                <span className="ml-3 line-through text-gray-400">
                                    ${product.oldPrice}
                                </span>
                            )}
                        </div>
                        <p className="mt-4">
                            ⭐ {product.rating} / 5
                        </p>

                        <p className="mt-2">
                            Size: {product.size}
                        </p>

                        <button className="btn bg-[#1B5E20] text-white border-0 rounded-xl px-8 mt-6 hover:bg-[#2E7D32] hover:-translate-y-1 transition-all duration-300">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;