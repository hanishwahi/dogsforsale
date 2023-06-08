import React from 'react'
 
function CallNow() {
    return (
        <>
           {/* <div className='container-fluid'>
           <div style={{ backgroundColor: '#cf18c5' }} className='row py-5 my-md-4'>
                <div className='col-lg-6 col-7 text-end call-now-002 align-self-center'>
                    <h1>Call To Get Your Dog</h1>
                </div>
                <div className='col-lg-6 col-5 text-start call-now-002 align-self-center'>
                    <Link className='btn shadow-none'>Call Now</Link>
                </div>
            </div>
           </div> */}

            <div className='container-fluid py-md-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-6 health-check-002'>
                            <i class="fa-solid fa-house-chimney-medical"></i>
                            <h3>Free Health Check</h3>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-6 health-check-002'>
                        <i class="fa-regular fa-thumbs-up"></i>
                            <h3>100% Pure Breed</h3>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-6 health-check-002'>
                        <i class="fa-regular fa-face-smile"></i>
                            <h3>Reasonable Price</h3>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6  col-6 health-check-002'>
                        <i class="fa-solid fa-truck-fast"></i>
                            <h3>Safe Delivery</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallNow