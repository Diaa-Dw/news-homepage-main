import React, { useState } from 'react'
import './cart.style.scss';
import { data } from '../../data';
function Cart() {
  const [cartData,setCartData] = useState(data);
  console.log(cartData);
  return (
    <div className='cart-container'>
        {
          cartData.map((cart,idx)=>
          <div className='cart' key={idx}>
            <img src={cart.img} alt={cart.title}/>
            <div className='contant'> 
              <h3>{cart.number}</h3>
              <h3>{cart.title}</h3>
              <p>{cart.description}</p>
            </div>
          </div>
          )
        }
    </div>
  )
}

export default Cart;