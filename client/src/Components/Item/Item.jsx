import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';



const Item = (props) => {
  return (
    <div className='item'>
    <Link to={`/product/${props.id}`}>
  <img
    onClick={() => window.scrollTo(0, 0)} 
    src={`http://127.0.0.1:8000/storage/${props.image}`} 
    alt={`${props.name}`} 
    className="product-image" 
  />
</Link>

      <p>{props.name}</p>
        <div className='Item-prices'>
        <div className='Item-price-new'>
            ${props.new_price}
        </div>
        <div className='Item-price-old'>
            ${props.old_price}
        </div>


      </div>
    </div>
  )
}

export default Item;
