import React from 'react'
import Labrador from '../../Images/LABRADOR.jpg';
import Germanshephard from '../../Images/GermanShephard.jpg';
import Goldenretriever from '../../Images/Golden-Retriever-600x600.jpg';
import Pug from '../../Images/Pug.jpg';
import Rottweiler from '../../Images/Rottweiler-600x600.jpg';
import Beagle from '../../Images/Beagle-600x600.jpg';
import Boxer from '../../Images/boxer.jpg';
import Shihtzu from '../../Images/Shih Tzu.jpg';
import Siberian from '../../Images/Siberian.jpg';
import Chihuahua from '../../Images/Chihuahua.jpg';
import { Link } from 'react-router-dom';
 

function BuyDogs() {
 
    return (
        <>
            <div className='container-fluid py-5 mt-3'>
                <div className='container'>
                    <div className='row  dogbreed-heading-003 pb-4'>
                        <h1 className='text-center text-dark'>Choose the Breed</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={Labrador} className="card-img-top border-bottom"
                                    alt="Hollywood Sign on The Hill" />
                                <div className="card-body">
                                    <h5 className="card-title">LABRADOR</h5>
                                    <p className="card-text">
                                        $1500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Germanshephard} className="card-img-top border-bottom"
                                    alt="Palm Springs Road" />
                                <div className="card-body">
                                    <h5 className="card-title">GERMAN SHEPHERD</h5>
                                    <p className="card-text">
                                        $1700
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Goldenretriever} className="card-img-top border-bottom"
                                    alt="Los Angeles Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">GOLDEN RETRIEVER</h5>
                                    <p className="card-text">$1800</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Pug} className="card-img-top border-bottom"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">PUG</h5>
                                    <p className="card-text">
                                        $1800
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Rottweiler} className="card-img-top border-bottom"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">ROTTWEILER</h5>
                                    <p className="card-text">
                                        $1700
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Beagle} className="card-img-top border-bottom"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">BEAGLE </h5>
                                    <p className="card-text">
                                        $1950
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Boxer} className="card-img-top border-bottom"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Boxer </h5>
                                    <p className="card-text">
                                        $2000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Shihtzu} className="card-img-top border-bottom"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Shihtzu </h5>
                                    <p className="card-text">
                                        $1650
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Siberian} className="card-img-top border-bottom"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Siberian </h5>
                                    <p className="card-text">
                                        $1200
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Chihuahua} className="card-img-top border-bottom"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Chihuahua </h5>
                                    <p className="card-text">
                                        $1500
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
             <div className='container-fluid'>
           <div style={{ backgroundColor: '#cf18c5' }} className='row py-5 my-md-4'>
                <div className='col-lg-7 col-7 text-end call-now-002 align-self-center'>
                    <h1>Call To Get Your Dog</h1>
                </div>
                <div className='col-lg-5 col-5 text-start call-now-002 align-self-center buy-dogs-call-now'>
                    <Link to="tel:+1 8772244075" className='btn shadow-none'>Call Now</Link>
                </div>
            </div>
           </div>          
        </>
    )
}

export default BuyDogs