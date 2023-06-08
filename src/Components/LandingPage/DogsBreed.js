import React from 'react'
import Labrador from '../../Images/labrador-123.jpg';
import Germanshephard from '../../Images/GermanShephard.jpg';
import Goldenretriever from '../../Images/Golden-Retriever-600x600.jpg';
import Pug from '../../Images/Pug.jpg';
import Rottweiler from '../../Images/Rottweiler-600x600.jpg';
import Beagle from '../../Images/Beagle-600x600.jpg';
 

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

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
    const scrollToHome=(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })


    
    return (
        <>
            <div className='container-fluid py-5 px-0 my-5' style={{ backgroundColor: '#cf18c5' }}>

                <div className='container'>
                    <div className='row  dogbreed-heading-003 pb-4'>
                        <h1 className='text-center'>Choose the Breed</h1>
                    </div>
                    <Carousel responsive={responsive}>
                        <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Labrador} alt='' /></div>
                        <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Germanshephard} alt='' /></div>
                        <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Goldenretriever} alt='' /></div>
                        <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Pug} alt='' /></div>
                        <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Rottweiler} alt='' /></div>
                        <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Beagle} alt='' /></div>
                    </Carousel>
                    <div className='row viewMore-button'>
                          <Link onClick={scrollToHome} className='btn shadow-none' to='/buy-dogs'>View More</Link>
                    </div>
                </div>
            </div>



        </>
    )
}

export default DogsBreed