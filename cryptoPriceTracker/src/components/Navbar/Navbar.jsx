import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select >
                <option value="INR">INR</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
            </select>

            <button>Sign up <img src={arrow_icon} alt="" /></button>
    </div>
    </div>
    
  )
}

export default Navbar