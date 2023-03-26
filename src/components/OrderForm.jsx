import React, { useState} from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useContext} from 'react'
import { CartContext } from './CartContext/CartContext'
import Swal from 'sweetalert2';


const OrderForm = () => {

    const {getTotal, cart} = useContext(CartContext)

    const [buyerName, setBuyerName] = useState('');
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
   
    

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders')

    const handleSubmit = (e) => {

    e.preventDefault();

    const order = {
        buyer: {
          name: buyerName,
          phone: buyerPhone,
          email: buyerEmail
        },
        items: cart,
        total: getTotal()
    };

    addDoc(ordersCollection, order)
      .then((docRef) => {
        console.log('Documento enviado. ID:', docRef.id);
        mostrarAlerta(); 
        resetForm();
      })
      .catch((e) => {
        console.log('Error al agregar el documento', e);
      });
  };


  const resetForm = () => {
    setBuyerName('');
    setBuyerPhone('');
    setBuyerEmail('');
  };

  const mostrarAlerta=()=>{
    Swal.fire(
      '¡Gracias por tu compra!',
      '',
      'success'
    )
  }
 
  return (
    <div className="formulario">
    <span className="formulario-tit"><u>Ingrese sus datos para finalizar la compra:</u></span>
       <form className="formulario" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input className="formulario-inp" type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
        </label>
        <br />
        <label>
          Teléfono:
          <input className="formulario-inp" type="text" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input className="formulario-inp" type="text" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
        </label>
        <br />

        <h3 className="formulario-tot">Total a pagar: ${getTotal()}</h3>
        <button type="submit" className="btn btn-primary">Finalizar compra</button>
      </form>
    </div>
  )
}

export default OrderForm
