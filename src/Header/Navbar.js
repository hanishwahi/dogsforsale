import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
 const scrollToHome=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
 }

    return (
        <>
            <div className="container-fluid bg-white sticky-top  border-bottom">
                <div className="container-lg">
                    <div className="row align-items-center py-3">
                        <div className="col-lg-3 col-md-7 col-sm-7 col-9 navbar-001">
                            <Link onClick={scrollToHome} to="/">Dog For Sale</Link>
                        </div>
                        <div className="col-lg-8 col-md-1 desk-nav-main">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-2 fw-bold">
                                        <li className="nav-item desktop-nav">
                                            <Link onClick={scrollToHome} className="nav-link text-uppercase " to="/">Home</Link>
                                        </li>
                                        <li className="nav-item desktop-nav">
                                            <Link className="nav-link text-uppercase" to="/">About Us</Link>
                                        </li>
                                        <li className="nav-item desktop-nav">
                                            <Link className="nav-link text-uppercase" to="/">Buy Dogs</Link>
                                        </li>
                                        <li className="nav-item desktop-nav">
                                            <Link className="nav-link text-uppercase" to="/">Photos</Link>
                                        </li>
                                        <li className="nav-item desktop-nav">
                                            <Link to="tel:+1 8772244075" className="nav-link text-uppercase">Call Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="col-lg-1 col-md-3 col-sm-2 col-2 text-end desk-nav-main">
                            {/* <i className="fa-solid fa-magnifying-glass fw-bold search-icon"></i> */}
                            <Link to="tel:+1 8772244075" className="fw-bold"><i className="fa-solid fa-phone" style={{color:"green", fontSize:"22px"
                            }}></i></Link>
                            
                        </div>


                        {/* canwaoff */}


                        <div className='canwa-Menubar col-md-5 col-sm-5 col-3  text-end'>
                            <a className="btn shadow-none " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i style={{ color: "#052963" }} className="fa-solid fa-bars menu-bar"></i>
                            </a>


                            <div className=" offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header  border-bottom">
                                    <div className="col-lg-3 col-md-7 col-sm-7 col-9 navbar-001 text-start">
                                        <Link to="/">Dog For Sale</Link>
                                    </div>
                                    <button type="button" className="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body text-start">

                                    <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-2 fw-bold" style={{ color: "#052963" }}>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} className="nav-link text-dark text-uppercase" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">About Us</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">Buy Dogs</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">Photos</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
