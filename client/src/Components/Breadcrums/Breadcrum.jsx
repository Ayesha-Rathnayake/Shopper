// import React from 'react'
// import './Breadcrum.css'
// import { IoIosArrowForward } from "react-icons/io";
// const Breadcrum = (props) => {
//     const {product}=props;

//     return (
//     <div className='breadcrum'>
//       HOME <IoIosArrowForward /> SHOP <IoIosArrowForward />{product.category || "unknown product"} <IoIosArrowForward /> {product.name || "unknown product"}
//     </div>
//   );
// };

// export default Breadcrum;




import React from "react";
import "./Breadcrum.css";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = ({ product }) => {
  // Check if product is not undefined and has required properties
  if (!product || !product.category || !product.name) {
    return (
      <div className="breadcrum">
        HOME <IoIosArrowForward /> SHOP <IoIosArrowForward /> Unknown Category <IoIosArrowForward /> Unknown Product
      </div>
    );
  }

  return (
    <div className="breadcrum">
      HOME <IoIosArrowForward /> SHOP <IoIosArrowForward /> {product.category || "Unknown Category"} <IoIosArrowForward /> {product.name || "Unknown Product"}
    </div>
  );
};

export default Breadcrum;

