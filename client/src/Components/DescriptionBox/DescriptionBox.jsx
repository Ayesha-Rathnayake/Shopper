import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>

      </div>
      <div className="descriptionbox-description">
        <p>  E-commerce is the convenience of shopping online, and our store brings you the best in clothing!
             Explore a range of stylish and affordable apparel for all occasions, all from the comfort of your 
             home. Shop easily, securely, and elevate your style effortlessly!</p>

             <p>Welcome to our clothing store! We offer a wide variety of stylish, comfortable, and affordable outfits for every occasion. From casual wear to formal attire, our collection is designed to suit every style and need.
            Discover fashion that fits you perfectly!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
