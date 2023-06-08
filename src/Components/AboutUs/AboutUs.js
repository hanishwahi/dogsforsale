import React from 'react'
import AboutusBanner from '../../Images/AboutUsBanner.jpg'
import Aboutus002 from '../../Images/aboutus-002.jpg'

function AboutUs() {
    return (
        <>
            <div className='container-fluid position-relative px-0'>
                <div className='' >
                    <img className='img-fluid px-0' src={AboutusBanner} alt='' />
                </div>
                <div className='container'>
                    <div className='row  py-5'>
                        <div className='col-lg-8 aboutUs-Content'>
                            <h1>About Us</h1>
                            <p>Dogs for sale was founded out of the need to provide an ethical and convenient alternative to enable dog lovers in INDIA to find world-class purebred puppies.<br/><br/>

                                Too often we have seen horrific breeding practices in this part of the world; dominated by pet markets.  Dams are over bred, often too young, and puppies are unhealthy and brought up in sub-standard living conditions. They are usually separated from their mother too early resulting in all sorts of health conditions, a lower quality of life and a shorter life span.<br/><br/>

                                At Dogs for sale we believe in the ethical treatment of animals and insist that dog breeding must be carried out in the most humane manner possible.  We will never deal with unethical breeders under any circumstances.<br/><br/>

                                We have an extensive network of Kennel Club breeders, small family breeders and breed enthusiasts. We personally visit the breeder of every puppy that we supply where we examine the living conditions, verify the health and well being, and confirm the temperament, appearance and breed standards of their dogs.  We are constantly travelling to international dog shows, renewing old acquaintances and making new ones!<br/><br/>

                                </p>
                        </div>
                        <div className='col-lg-4 px-0'>
                            <img className='img-fluid px-0' src={Aboutus002} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs