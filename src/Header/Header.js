import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
     <>
     <Navbar/>
     <div className='fixed-bottom m-3 m-sm-5'>
       <Link to="tel:+918772244075" ><i class="fa-solid fa-phone call-icon"></i></Link>
     </div>
     </>
  )
}

export default Header