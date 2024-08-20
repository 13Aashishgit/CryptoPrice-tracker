import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home.jsx'
import Coin from './pages/Coin/Coin.jsx'
import Footer from './components/Footer/Footer.jsx'



  
function App() {
  

  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:coinId' element={<Coin/>}/>
        </Routes>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
