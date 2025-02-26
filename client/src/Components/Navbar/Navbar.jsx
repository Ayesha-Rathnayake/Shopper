import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo3.png';
import { BsCart2 } from "react-icons/bs";
import { ShopContext } from '../../Contexts/ShopContext';


const Navbar = () => {

    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='navlogo'>
            <img src={logo} alt="logo"/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}to='women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>

        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><span className='cart-icon'><BsCart2 /></span></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
