import { Link } from 'react-router-dom'

const ItemList = (props) => {

  return (
    <div className="prod1">
    <div className="prod card">
    <img src={props.img} className="card-img-top productos__img"/>
    <h5 className="card-title">{props.name}</h5>
    <Link to={`/item/${props.id}`} className="btn btn-primary">Ver Detalles</Link>
    </div>
    </div>
 )
}

export default ItemList

