import logo from '../../img/logo.png'
import clases from '../../styles.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import React from 'react'



const NavBar = () => {


return (
<nav className="navbar navbar-expand-lg bg-body-tertiary nav font">
  <div className="container-fluid">
    <a className="navbar-brand">
    <img src={logo} className="nav__logo"/>
      <h3 className="nav__titulo">PaperWorld</h3>
    </a>
    <div className="collapse navbar-collapse nav__list" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link nav__items" to={'/'}>Inicio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link nav__items" to={'/category/libreria'}>Libreria</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link nav__items" to={'/category/papeleria'}>Papeleria</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link nav__items" to={'/category/jugueteria'}>Jugueteria</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link nav__items" to={'/category/marroquineria'}>Marroquineria</Link>
        </li>
      </ul>
    </div>
    <div>
    <CartWidget/>
    </div>
  </div>
</nav>
)
}

export default NavBar
