import React from 'react'
import Cart from '../../img/cart.png'
import Clases from '../../styles.css'

const CartWidget = () => {
  return (
    <div className="cart">
      <img src={Cart} className="nav__cart"/>
      <p className="nav__cart--cant">2</p>
    </div>
  )
}

export default CartWidget
