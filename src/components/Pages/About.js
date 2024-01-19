import React, {useEffect, lazy, Suspense} from 'react'
import "./about.css"
import Navbar from '../navbarfiles/Navbar'
import user2 from "./../../assets/user2.png"
import user20 from "./../../assets/las23.jpeg"
import user3 from "./../../assets/user3.png"
import user4 from "./../../assets/user4.png"
import doubleline from "./../../assets/double.png"
import { FaArrowRight } from 'react-icons/fa'
import Footer from "../footerfiles/Footer"
import { Link } from 'react-router-dom'
import CallToAction from "./../common/CallToAction"
const About1= lazy(()=> import("../About1"))
const About2= lazy(()=> import("../About2"))
const About3= lazy(()=> import("../About3"))
const About4= lazy(()=> import("../About4"))
const About5= lazy(()=> import("../About5"))
const Video= lazy(()=> import("../common/Video"))
const Blogcard= lazy(()=> import("../common/Blogcard"))

function About({blogdata}) {


    useEffect(() => {
        window.scrollTo(0, 10)
      }, [])

    let pagedata = blogdata?.slice(0,3)

    return (
        <div className="about">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
            <div className="background p-5">
                <div className="container p-md-5">
                    <div className="row align-items-center ">
                        <div className="col-md-6">

                           <About1/>
                        </div>
                        <div className="col-md-6 position-relative ">
                        <About2/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container p-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-5 position-relative mx-3 mx-md-0">

                       <About3/>

                    </div>

                    <div className="col-md-2">
                       <About4/>
                    </div>
                    <div className="col-md-5 left">
                       <About5/>

                    </div>
                </div>
            </div>

             {/** our team  */}
            {/* <div className="team p-5">
                <div className="text-center">
                    <img src="./../../../images/ourteam.png" alt="our team" />
                </div>

               

                <div className="container info p-4">
                    <div className="row">
                        <div className="col-md-4 text-center my-2 my-md-1 ">
                            <img src="./../../../images/t1.png" alt="" />
                            <h6 className='name h5 my-2'>John Doe</h6>
                            <p className="h6 title">CEO, Lasop</p>
                        </div>
                        <div className="col-md-4 text-center my-2 my-md-1 ">
                            <img src="./../../../images/t2.png" alt="" />
                            <h6 className='name h5 my-2'>John Doe</h6>
                            <p className="h6 title">CEO, Lasop</p>
                        </div>
                        <div className="col-md-4 text-center my-2 my-md-1 ">
                            <img src="./../../../images/t3.png" alt="" />
                            <h6 className='name h5 my-2'>John Doe</h6>
                            <p className="h6 title">CEO, Lasop</p>
                        </div>
                        <div className="col-md-4 text-center my-2 my-md-1 ">
                            <img src="./../../../images/t4.png" alt="" />
                            <h6 className='name h5 my-2'>John Doe</h6>
                            <p className="h6 title">CEO, Lasop</p>
                        </div>
                        <div className="col-md-4 text-center my-2 my-md-1 ">
                            <img src="./../../../images/t5.png" alt="" />
                            <h6 className='name h5 my-2'>John Doe</h6>
                            <p className="h6 title">CEO, Lasop</p>
                        </div>
                        <div className="col-md-4 text-center my-2 my-md-1 ">
                            <img src="./../../../images/t6.png" alt="" />
                            <h6 className='name h5 my-2'>John Doe</h6>
                            <p className="h6 title">CEO, Lasop</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="video">
                <Video />
            </div>

            <div className="event p-5">
                <h5 className='text-center'>Upcoming Events, News and Blogs</h5>

                <img className='doubleline aboutlines' src={doubleline} alt="line" />

                <Blogcard  blogdata={pagedata} />

                <div className='d-flex justify-content-center bg-white viewall my-4 my-md-0  '>
                <Link to="/blog" className='me-3 nav-link logs'>View all blogs</Link>
                    <div className="mt-0"> <FaArrowRight /></div>
                </div>

            </div>
            {/* <CallToAction/> */}
            {/* <Footer/> */}
            </Suspense>
        </div>


    )
}

export default About