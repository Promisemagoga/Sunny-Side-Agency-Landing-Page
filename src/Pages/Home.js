import React from 'react'
import NavBar from '../Components/NavBar'
import Testimonials from '../Data/Testimonials'
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'

function Home() {
    return (
        <>
            <header>
                <NavBar />
                <h1>WE ARE CREATIVES</h1>
                <div className='arrowDiv'>
                <img src={require("../assets/images/down-arrow.png")} alt='arrow down' style={{width:"60px",height:"100px"}} />
                </div>
            </header>
            <main className='wrapper'>
                <div className='wrapperCont'>
                    <div className='leftBox'>
                        <div className='innerLeftBox'>
                            <h1>Transform your brand</h1>
                            <p>We are a full-service creative agency specializing in helping brands grow fast.
                                Engage your clients through compelling visuals that do most of the marketing for you.
                            </p>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>
                    <div className='rightBox'>
                        <img alt='a white egg on top of a yellow background' src={require("../assets/images/desktop/image-transform.jpg")} />
                    </div>
                </div>
                <div className='wrapperCont2'>
                    <div className='rightBox'>
                        <img src={require("../assets/images/desktop/image-stand-out.jpg")} alt='A pink plastic glass'/>
                    </div>
                    <div className='leftBox'>
                        <div className='innerLeftBox'>
                            <h1>Stand out to the right audience</h1>
                            <p>Using a collaborative formula of designers, researchers, photographers, videographers,
                                and copywritters, we'll build and extend your brand in digital places.
                            </p>
                            <a href='#' className='learnmoreLink1'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='wrapperCont'>
                    <div className='leftBox belowLeft'>
                        <div className='innerBelow'>
                            <h1>Grapic Design</h1>
                            <p>Greate design makes you memorable. We deliver art work that underscores your
                                brand message and captures potential clients' attention.
                            </p>
                        </div>
                    </div>
                    <div className='rightBox belowRight'>
                        <div className='innerBelow'>
                            <h1>Photography</h1>
                            <p>Increase your credibility by getting the most stunning, high-quality
                                photos that improve your business imgae.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='testimonals'>
                    <h1>CLIENT TESTIMONIALS</h1>
                    <div className='testimonialCards'>
                        {
                            Testimonials.map((data) => (

                                <div className='testimonialContent'>
                                    <img src={require(`../assets/images/${data.img}`)} alt={data.alt}/>
                                    <p>{data.testimony}</p>
                                    <h2>{data.name}</h2>
                                    <h3>{data.designation}</h3>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='aboveFooterContainer'>
                    <div className='aboveFooterLeft'>
                        <img src={require("../assets/images/desktop/image-gallery-milkbottles.jpg")} alt='Milk Bottles'/>
                        <img src={require("../assets/images/desktop/image-gallery-orange.jpg")} alt='Orang Fruit'/>
                    </div>
                    <div className='aboveFooterRight'>
                        <img src={require("../assets/images/desktop/image-gallery-cone.jpg")} alt='IceCream Cone'/>
                        <img src={require("../assets/images/desktop/image-gallery-sugarcubes.jpg")} alt='Sugar Cubes'/>
                    </div>
                </div>
            </main>
            <footer>
                <h1>sunnyside</h1>
                <div className='footerLinks'>
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Projects</a>
                </div>
                <div className='footerIcons'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Pinterest />
                </div>
            </footer>
        </>

    )
}

export default Home