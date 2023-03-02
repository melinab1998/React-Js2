import React, {useEffect, useState} from 'react'
import { getProducts } from '../data/data'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {

const {id} = useParams();
const [prod, setProd] = useState({})

useEffect(()=>{
    getProducts()
    .then(res => setProd(res.find((item)=>item.id === parseInt(id))))
  }, [id]);

  return (
    <div className="detalles">
        <div className="productos__detalles">
        <img src={prod.img} className="card-img-top productos__img detalles__img"/>
        <h5 className="card-title productos__nombre">{prod.name}</h5>
        <p className="productos__precio">${prod.price}</p>
        <p>{prod.des}</p>
    </div>
    </div>
  )
}

export default ItemDetail
