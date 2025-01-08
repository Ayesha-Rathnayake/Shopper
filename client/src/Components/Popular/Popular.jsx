import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Item/Item.jsx';
import axiosInstance from '../../axiosInstance'; // Import axios instance

const Popular = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axiosInstance.get('/products/latest/women'); // Backend endpoint for popular products
        setProducts(response.data); // Set fetched products
        setLoading(false); // Stop loading
      } catch (err) {
        setError('Failed to load popular products. Please try again later.');
        setLoading(false);
      }
    };

    fetchPopularProducts();
  }, []); // Fetch data when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.Name}
            image={item.image}
            new_price={item.Price - item.Price * item.Discount / 100}
            old_price={item.Price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
