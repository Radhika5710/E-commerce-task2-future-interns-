import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeItem, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.product._id} className="flex justify-between items-center border-b py-2">
              <div>
                <h3>{item.product.name}</h3>
                <p>${item.product.price}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.product._id, item.quantity - 1)} className="px-2">-</button>
                <span className="px-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)} className="px-2">+</button>
                <button onClick={() => removeItem(item.product._id)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
