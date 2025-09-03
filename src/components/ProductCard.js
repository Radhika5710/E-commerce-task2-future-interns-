import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const fallbackImage = 'https://via.placeholder.com/150?text=No+Image';

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image ? product.image : fallbackImage}
        alt={product.name}
        onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
        className="w-full h-48 object-contain mb-2"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-semibold">&#8377;{product.price}</p>
      <button
        onClick={() => addItem(product, 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
