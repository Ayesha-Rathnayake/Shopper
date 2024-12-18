import React,{createContext, useState} from "react";
import all_product from '../Components/Assets/all_products.js';



export const ShopContext=createContext(null);

   //add cart feature =>first step
   const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length+1;index++){
      cart[index]=0;
    }return cart;
  }

  //end of the changes

const ShopContextProvider=(props)=>{

    //second change to the code -add cart feature
    const [cartItems,setCartItems]=useState(getDefaultCart());
  
    
  // 3rd modification=>adding add to  cart function & removeFromCart
  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
  }

  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  }

  //end of 3rd modification


  //added in the end
  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=all_product.find((product)=>product.id===Number(item))
        totalAmount+=itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;

  }

  //function for cart icon 
  const getTotalCartItems=()=>{
      let totalItem=0;
      for(const item in cartItems ){
        if(cartItems[item]>0){
          totalItem+=cartItems[item];
        }
      }
      return totalItem;
  }

    //add cartItems to here => {all,product,cartItems}
    //after add addToCart & removeFromCart
    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

 

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
        )
}

export default ShopContextProvider;