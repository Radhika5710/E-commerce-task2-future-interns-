const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: 'Laptop',
    description: 'High-performance laptop',
    price: 80000,
    image: '/images/laptop.png',
    category: 'Electronics'
  },
  {
    name: 'Phone',
    description: 'Smartphone',
    price: 75000,
    image: '/images/phone.png',
    category: 'Electronics'
  },
  {
    name: 'Book',
    description: 'Fiction book',
    price: 50,
    image: '/images/book.png',
    category: 'Books'
  },
  {
    name: 'Shoes',
    description: 'Running shoes',
    price: 850,
    image: '/images/shoes.png',
    category: 'Fashion'
  },
  {
    name: 'Headphones',
    description: 'Wireless headphones',
    price: 1200,
    image: '/images/headphones.png',
    category: 'Electronics'
  },
  {
    name: 'Tablet',
    description: '10-inch tablet',
    price: 20000,
    image: '/images/tab.png',
    category: 'Electronics'
  },
  {
    name: 'T-Shirt',
    description: 'Cotton t-shirt',
    price: 250,
    image: '/images/tshirt.png',
    category: 'Fashion'
  },
  {
    name: 'Watch',
    description: 'Smartwatch',
    price: 499,
    image: '/images/watch.png',
    category: 'Electronics'
  },
  {
    name: 'Novel',
    description: 'Bestselling novel',
    price: 350,
    image: '/images/novel.png',
    category: 'Books'
  },
  {
    name: 'Sneakers',
    description: 'Casual sneakers',
    price: 600,
    image: '/images/sneakers.png',
    category: 'Fashion'
  }
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded');
  mongoose.connection.close();
};

seedDB();
