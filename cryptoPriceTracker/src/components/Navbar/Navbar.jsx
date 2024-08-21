import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext.jsx'

const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)


  const currencyHandler=(e)=>{
    switch(e.target.value){
      case "usd":{
        setCurrency({name:"usd",symbol:"$"})
        break;
      }
      case "inr":{
        setCurrency({name:"inr",symbol:"₹"})
        break;
      }
      case "eur":{
        setCurrency({name:"eur",symbol:"€"})
        break;
      }

      default:{
        setCurrency({name:"inr",symbol:"₹"})
        break;
      }
    }
  }
  return (
    <div className='navbar'>
      <Link to="/">
        <img src={logo} alt="" className='logo' /></Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onClick={currencyHandler} >
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
            </select>

            <button>Sign up <img src={arrow_icon} alt="" /></button>
    </div>
    </div>
    
  )
}

export default Navbar