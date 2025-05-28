export default function ProductCard({ product }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">${product.price}</span>
                    {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Add to Cart
                    </button> */}
                </div>
            </div>
        </div>
    );
}