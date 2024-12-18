import React from 'react'
import './Breadcrum.css'
import { MdArrowForwardIos } from "react-icons/md";


const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <MdArrowForwardIos /> SHOP <MdArrowForwardIos /> {product.category} <MdArrowForwardIos />{product.name}
    </div>
  )
}

export default Breadcrum
