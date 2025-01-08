import React, { useState, useEffect, useContext } from 'react';
import './ProductDisplay.css';
import { IoStarSharp, IoStarOutline } from "react-icons/io5";
import { ShopContext } from '../../Contexts/ShopContext';
import axiosInstance from '../../axiosInstance';

const ProductDisplay = ({ productId }) => {
  const [product, setProduct] = useState(null); // Store a single product
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(""); // Track errors
  const { addToCart } = useContext(ShopContext); // Access `addToCart` from context

  // Fetch the product details when component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${productId}`); // Fetch single product by ID
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product. Please try again later.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Thumbnail 1" />
          <img src={product.image} alt="Thumbnail 2" />
          <img src={product.image} alt="Thumbnail 3" />
          <img src={product.image} alt="Thumbnail 4" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {Array.from({ length: 5 }).map((_, index) =>
            index < product.rating ? <IoStarSharp key={index} /> : <IoStarOutline key={index} />
          )}
          <p>({product.reviews_count})</p>
        </div>
        <div className="productdisplay-right-prices">
          {product.old_price && <div className="productdisplay-right-price-old">${product.old_price}</div>}
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {product.sizes.map((size, index) => (
              <div key={index}>{size}</div>
            ))}
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>Category :</span> {product.category}
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span> {product.tags.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
