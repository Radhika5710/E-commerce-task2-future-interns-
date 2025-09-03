import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to checkout');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/orders', {
        products: cartItems.map(item => ({ product: item.product._id, quantity: item.quantity })),
        total,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      clearCart();
      alert('Order placed successfully!');
      navigate('/orders');
    } catch (err) {
      console.log(err);
      alert('Error placing order');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
