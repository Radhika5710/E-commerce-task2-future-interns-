import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const OrderHistory = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5000/api/orders', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => setOrders(res.data))
        .catch(err => console.log(err));
    }
  }, [token]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map(order => (
          <div key={order._id} className="border p-4 mb-4 rounded">
            <p>Order ID: {order._id}</p>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
            <ul>
              {order.products.map(item => (
                <li key={item.product._id}>{item.product.name} x {item.quantity}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
