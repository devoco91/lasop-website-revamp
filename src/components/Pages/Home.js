import React, { lazy, Suspense,useEffect} from 'react'
import Navbar from './../navbarfiles/Navbar'
import Footer from './../footerfiles/Footer'
import bannerImg from "./../../assets/Image.svg"
import line from "./../../assets/Line 12.svg"
import outline from "./../../assets/outline.png"
import { BiCalendar } from 'react-icons/bi'
import { RxDividerVertical } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom'
import { TbMathGreater } from "react-icons/tb"
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import doubleline from "./../../assets/double.png"
import {TfiEmail } from "react-icons/tfi"
import { BsWhatsapp } from "react-icons/bs"
import "./home.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { infoCtrl } from '../../Redux/Slices/userSlice'


const CallToAction= lazy(()=> import("./../common/CallToAction"))
const Herosection1= lazy(()=> import("../Herosection1"))
const Herosection2= lazy(()=> import("../Herosection2"))
const Herosection3= lazy(()=> import("../Herosection3"))
const Herosection4= lazy(()=> import("../Herosection4"))
const Blogcard= lazy(()=> import("../common/Blogcard"))
const LearnEarn= lazy(()=> import("../common/LearnEarn"))
const OurProgram= lazy(()=> import("../common/OurProgram"))
const Advert= lazy(()=> import("../common/Advertsection"))
const Testimony= lazy(()=> import("../common/Testimony"))
const FaqHome= lazy(()=> import("../common/FaqHome"))
const Getstarted= lazy(()=> import("../common/Getstarted"))

const Home = ({data}) => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

let blogdatas = data.slice(0,3)
 

 


  return (
    <div className="home">
      <Navbar />

      <div className="home">
      <Suspense fallback={<div>Loading...</div>}>
        <Herosection1/>
        <Herosection2/>
        <Herosection4/>
        <Herosection3/>


        
        {/* <Herosection3/> */}



       <div data-aos="zoom-in-down" className="learn_earn">
       <LearnEarn/>
       </div>

       <div className="ourprogram" data-aos="zoom-up">
          <OurProgram/>
       </div>

        <div className="advert p-5" data-aos="zoom-down">
     <Advert/>
     </div>



     <div className="testimony" data-aos="zoom-in-up">
      <Testimony/>
     </div>

     <div className="faq p-md-5" data-aos="zoom-down">

     <h4 className='text-center text-white text-capitalize move-up'>frequently asked questions</h4>
        <img src={doubleline} className='doubleline lines' alt="" />

      <FaqHome/>
     </div>

     <div className="getstarted p-5" data-aos="">
      <Getstarted/>
     </div>

     <div className="event p-5" data-aos="zoom-down">

      <h5 className='text-center'>Upcoming Events, News and Blogs</h5>

      <img className='doubleline' src={doubleline} alt="line" />

      {data?.length !== 0 &&
      <>
      <Blogcard  blogdata={blogdatas}/>
      

     <div className="d-flex ">
     <div className='d-flex justify-content-center bg-white viewall my-4 my-md-0  '>
        <Link to="/blog" className='me-3 nav-link'>View all blogs</Link>
       <div className="mt-0"> <FaArrowRight/></div>
      </div>
     
    
     </div>

     </>
}

     </div>
     </Suspense>
      </div>

    
    <CallToAction/>


      {/* <Footer/> */}
    </div>
  )
}

export default Home