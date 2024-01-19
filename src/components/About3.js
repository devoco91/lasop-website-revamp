import React from 'react'
import "./Pages/about.css"
import user20 from "../assets/las23.jpeg"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"

function About3() {
  return (
    <div>
                       <img src={user3} alt="" className='img-fluid img-thumbnail d-block' />
                        <img src={user4} alt="" className='img-fluid img-thumbnail d-block' />
                        <img src={user20} alt="" className='img-fluid img-thumbnail d-block' />
    </div>
  )
}

export default About3