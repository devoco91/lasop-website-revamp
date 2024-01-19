import React from 'react'
import "./Pages/home.css"
import { BiCalendar } from 'react-icons/bi'
import { RxDividerVertical } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom'
import { TbMathGreater } from "react-icons/tb"
import doubleline from "../assets/double.png"
import Blogcard from '../components/common/Blogcard'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"


const Herosection5 = ({data}) => {
    let blogdatas = data.slice(0,3)
  return (
    <div>
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
    </div>
  )
}

export default Herosection5