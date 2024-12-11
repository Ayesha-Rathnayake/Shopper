import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Contexts/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../Components/Item/Item.jsx'


const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext); 
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-8</span> out of 16 products
        </p>
        <div className="shopcategory-sort">
          Sort by <IoIosArrowDropdown />

        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item
              key={i}
              id={item.id} 
              name={item.name} 
              image={item.image}
              new_price={item.new_price} 
              old_price={item.old_price}
              />
            }else{
              return null;
            }
        }) }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
