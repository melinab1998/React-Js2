import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (props) => {


  return (
    <div className="detalles">
    <div className="productos__detalles">
    <img src={props.imageId} className="card-img-top productos__img detalles__img"/>
    <h5 className="card-title productos__nombre">{props.title}</h5>
    <p className="productos__precio">${props.price}</p>
    <p>{props.description}</p>
    <ItemCount id={props.id} title={props.title} imageId={props.imageId} type={props.type} price={props.price} description={props.description} key={props.id}/>
    </div>
    </div>
  )
}

export default ItemDetail