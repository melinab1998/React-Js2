import React from 'react'
import { useContext} from 'react'
import { CartContext } from './CartContext/CartContext'
import { Link } from 'react-router-dom'


const CartView = () => {

const {cart, getTotalQuantity, getTotal, clearCart, removeFromCart} = useContext(CartContext)

  return (
    <div>
    {cart.length <= 0 && (
        <div className="carrito-0">
        <h5 className="cart-0" role="alert">Aún no hay productos en su carrito</h5>
        <Link to={`/`} className="btn btn-sc">Seguir Comprando</Link>
        </div>
        )}
    {cart.length > 0 && (
    <div>
     <ul className="list-group"> 
    {cart.map((item) => (
    <li key={item.id} className="list-group-item item">
    <span>{item.title} | x{item.quantity} |  <b>Subtotal: </b>${item.price*item.quantity}</span><button type="button" class="btn btn-x btn-primary" onClick={() => removeFromCart(item.id)}>X</button>
    </li>   
))}
<span className="list-group-item  item">Cantidad de productos: {getTotalQuantity()}</span>
<span className="list-group-item  item"><b className="tap">Total a pagar: </b>${getTotal()}</span>
<div className="botones">
<Link to={`/formulario`} className="btn btn-primary btn-view">Realizar compra</Link>
<button type="button" class="btn btn-primary btn-view" onClick={() => clearCart()}>Vaciar Carrito</button>
</div>
</ul>
</div>
    )
    }
  </div>    
  )
}

export default CartView
