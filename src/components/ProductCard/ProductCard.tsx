import { Link } from "react-router-dom";

interface Product {
    id: string; // ❗ چون از API میاد '1' نه 1
    title: string;
    price: number;
    desc: string;
    imageUrl: string;
    rating: string | number
}


function ProductCard({ product }: { product: Product }) {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="h-full py-6 px-2 shadow-lg flex flex-col items-center justify-between bg-white rounded-lg">
                <div className="w-[90%] h-[60%] flex items-center justify-center">
                    <img className="w-[150px] h-[150px] rounded p-4" src={product.imageUrl} alt="1" />
                </div>
                <div className="h-[50px] w-full flex items-start justify-start px-7 mt-5">
                    <h3 className="w-full flex items-start justify-start text-[13px] ellipsis-multiline">{product.title}</h3>
                </div>
                <div className="h-[40px] flex items-center justify-between mt-2 px-7 w-full">
                    <p className="w-24 flex items-center justify-start text-[13px]">{product.price} $</p>
                    <p className="flex items-center gap-1 text-[13px]">{product.rating}<span>⭐</span></p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard