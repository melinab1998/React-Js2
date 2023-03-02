import React, {useEffect, useState} from 'react'
import { getProducts } from '../../../data/data';
import { useParams } from 'react-router-dom'
import ItemList from '../../ItemList';

const Marroquineria = () => {

  const {type} = useParams();
  const [cat, setCat] = useState([])
  
  useEffect(()=>{
      getProducts()
      .then(res => setCat(res.filter((item=>item.type.includes("Marroquineria"))))) 
    }, [type]);
  

    return (
      <div className="productos">
          {cat.map(prod => {
          return <ItemList id={prod.id} name={prod.name} img={prod.img} type={prod.type} price={prod.price} des={prod.des} key={prod.id}/>
          })}    
      </div>         
  )
}

export default Marroquineria
