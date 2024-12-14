import React from 'react'
import './ProductDisplay.css';
import '../Assets/all_products.js';
import { IoIosStarOutline } from "react-icons/io";

const ProductDisplay = (props) => {
    const{all_product}=props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
           < div className="productdisplay-img-list">
           <img src={all_product.image} alt="" />
           <img src={all_product.image} alt="" />
           <img src={all_product.image} alt="" />
           <img src={all_product.image} alt="" />
</div>
    <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={all_product.image}/>
    </div>
        </div>

        <div className="productdisplay-right">
            <h1>{all_product.name}</h1>
            <div className="productdisplay-right-star">
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <p>(122)</p>

            </div>

        </div>

      
    </div>


  )
}

export default ProductDisplay;
