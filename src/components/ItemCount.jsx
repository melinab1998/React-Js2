import React, {useContext} from 'react'
import { CartContext } from './CartContext/CartContext'



const ItemCount = (props) => {

const {addToCart, removeFromCart} = useContext(CartContext)

  return (
    <div>
      <button onClick={() => addToCart(props, 1)} type="button" className = "btn btn-outline-primary btn_count">Agregar al carrito</button>
      <button onClick={() => removeFromCart(props.id)} type="button" className = "btn btn-outline-primary btn_count">X</button>
    </div>
  )
}

export default ItemCount
