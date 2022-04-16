import React from 'react'
import './Header.scss'
import logo from '../../assets/logo/logo.png'
import Habsida from '../../assets/logo/HABSIDA.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-light">
      <div className="container">
        <div className='d-flex justify-content-between w-100'>
          <Link className="navbar-brand d-flex align-items-center" to='/'>
            <img src={logo} className='logo me-2'/>
            <img src={Habsida} className="habsida"/>
          </Link>
          <button className='btn btn-outline-primary'>
            user@gmail.com
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header