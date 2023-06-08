import React, {useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [menuBar, setMenuBar] = useState(false)

  
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (menuBar) {
            setMenuBar(false);
            console.log("false")
        }
    };

    const showMe = () => {
        if (!menuBar) {
            setMenuBar(true);
            console.log("true")
        }

        else {
            setMenuBar(false);
            console.log("false")
        }
    }

    const cross = () => {
        if (menuBar) {
            setMenuBar(false);
            console.log("false")
        }
    }
     return (
        <>
            <div className="container-fluid bg-white sticky-top  border-bottom">
                <div className="container-lg">
                    {menuBar && <>
                        <div className='newMenuMain'>
                            <div className="offcanvas-body newMenu p-0">
                                <div className="navbar-001 p-3 row align-items-center">
                                    <div className='col-10'>
                                        <Link onClick={scrollToHome} to="/" style={{ fontSize: "18px" }}>WT Dog Seller</Link>
                                    </div>
                                    <div className='col-2 h3 mb-0'><i onClick={cross} class="fa-solid fa-xmark"></i></div>
                                </div>
                                <div className='border-top px-3'>
                                    <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-2 fw-bold" style={{ color: "#052963" }}>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} className="nav-link text-dark text-uppercase" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} className="nav-link text-dark text-uppercase" to="/about-us">About Us</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} className="nav-link text-dark text-uppercase" to="/buy-dogs">Buy Dogs</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} to="tel:+1 8772244075" className="nav-link text-uppercase">Call Now</Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div></>}
                    <div className="row align-items-center py-2">
                        <div className="col-lg-3 col-md-7 col-sm-7 col-10 navbar-001">
                            <Link onClick={scrollToHome} to="/">WT Dog Seller</Link>
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
                                            <Link onClick={scrollToHome} className="nav-link text-uppercase" to="/about-us">About Us</Link>
                                        </li>
                                        <li className="nav-item desktop-nav">
                                            <Link onClick={scrollToHome} className="nav-link text-uppercase" to="/buy-dogs">Buy Dogs</Link>
                                        </li>

                                        <li className="nav-item desktop-nav">
                                            <Link to="tel:+1 8772244075" className="nav-link text-uppercase">Call Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        {/* <div className="col-lg-1 col-md-3 col-sm-2 col-2 text-end desk-nav-main">
                             <Link to="tel:+1 8772244075" className="fw-bold"><i className="fa-solid fa-phone" style={{
                                color: "green", fontSize: "22px"
                            }}></i></Link>

                        </div> */}
                        <div className='col-2 text-end px-0 '>
                            <button className='btn shadow-none new-menu m-0' onClick={showMe}><i className="fa-solid fa-bars h2 "></i></button>
                        </div>


                        {/* canwaoff */}
                        {/* <div className='canwa-Menubar col-md-5 col-sm-5 col-3  text-end'>
                            <a className="btn shadow-none " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i style={{ color: "#052963" }} className="fa-solid fa-bars menu-bar"></i>
                            </a>


                            <div className=" offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header  border-bottom">
                                    <div className="col-lg-3 col-md-7 col-sm-7 col-9 navbar-001 text-start">
                                        <Link to="/">WT Dog Seller</Link>
                                    </div>
                                    <button type="button" className="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body text-start">

                                    <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-2 fw-bold" style={{ color: "#052963" }}>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} className="nav-link text-dark text-uppercase" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} className="nav-link text-dark text-uppercase" to="/about-us">About Us</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link onClick={scrollToHome} className="nav-link text-dark text-uppercase" to="/buy-dogs">Buy Dogs</Link>
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
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar
