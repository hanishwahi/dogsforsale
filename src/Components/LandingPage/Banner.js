import React from 'react'
import Banner1 from '../../Images/Banner.jpg'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <>
            <div className='container-fluid pt-md-5 pt-4 position-relative px-0'>
                <div className='' >
                    <img className='img-fluid px-0' src={Banner1} alt='' />
                </div>
                <div className='call-Now-Button'>
                    <Link className='btn shadow-none' to="tel:+1 8772244075">Call Now</Link>
                </div>
            </div>
        </>
    )
}

export default Banner