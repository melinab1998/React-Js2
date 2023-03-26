import React, { useContext } from 'react'
import Cart from '../../img/cart.png'
import Clases from '../../styles.css'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const {getTotalQuantity} = useContext(CartContext)
  
  return(
  <div> 
      <Link to={`/detalle`}><img src={Cart} className="nav__cart"/></Link>
      <span className="badge badge-pill badge-danger ml-1 counter">{getTotalQuantity()}</span>    
   </div>  
  )
}


export default CartWidget
