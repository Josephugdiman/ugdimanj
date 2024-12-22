// src/pages/Products.jsx

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-3xl mb-6">Products Page</h1>

      <div className="grid grid-cols-3 gap-2">
        {products.map((product) => (
          <div key={product.id} className="p-2 border-2 rounded-md">
            {/* Use the image URL directly */}
            <img
              src={`http://localhost:5000/images${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="truncate">{product.name}</div>
            <div className="text-lg font-medium text-orange-600">${product.price}</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Products;
