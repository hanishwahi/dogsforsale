import React from 'react'
import Labrador from '../Images/labrador-123.jpg';
import Germanshephard from '../Images/GermanShephard.jpg';
import Goldenretriever from '../Images/Golden-Retriever-600x600.jpg';
import Pug from '../Images/Pug.jpg';
import Rottweiler from '../Images/Rottweiler-600x600.jpg';
import Beagle from '../Images/Beagle-600x600.jpg';
import Boxer from '../Images/boxer.jpg';
import Shihtzu from '../Images/Shih Tzu.jpg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function DogsBreed() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 641
            },
            items: 3
        },
        phoneLandscape: {
            breakpoint: {
                max: 640,
                min: 577
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 576,
                min: 0
            },
            items: 1
        }

    };
    return (
        <>
            {/* <div className='container-fluid py-5 px-0 my-5' style={{ backgroundColor: '#cf18c5' }}>
                
                    <div className='container'>
                        <div className='row  gallery-heading-003 pb-4'>
                            <h1 className='text-center'>Gallery</h1>
                        </div>
                        <Carousel responsive={responsive}>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Labrador} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Germanshephard} alt=''/></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Goldenretriever} alt=''/></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Pug} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Rottweiler} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Beagle} alt='' /></div>
                             
                        </Carousel>
                    </div>
                </div> */}

            <div className='container-fluid py-5 my-md-5 mt-3' style={{backgroundColor: '#cf18c5'}}>
                <div className='container'>
                     <div className='row  dogbreed-heading-003 pb-4'>
                            <h1 className='text-center'>Choose the Breed</h1>
                        </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={Labrador} className="card-img-top"
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
                                <img src={Germanshephard } className="card-img-top"
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
                                <img src={Goldenretriever} className="card-img-top"
                                    alt="Los Angeles Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">GOLDEN RETRIEVER</h5>
                                    <p className="card-text">$1800</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Pug} className="card-img-top"
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
                                <img src={Rottweiler} className="card-img-top"
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
                                <img src={Beagle} className="card-img-top"
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
                                <img src={Boxer} className="card-img-top"
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
                                <img src={Shihtzu} className="card-img-top"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Shihtzu </h5>
                                    <p className="card-text">
                                        $1650
                                    </p>
                                </div>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>

        </>
    )
}

export default DogsBreed