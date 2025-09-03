import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Mini E-Commerce</Link>
      <nav className="space-x-4">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
        {user ? (
          <>
            <Link to="/orders">Orders</Link>
            <button onClick={logout} className="ml-2 bg-red-500 px-2 py-1 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
