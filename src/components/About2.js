import React from 'react'
import "./Pages/about.css"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"

function About2() {
  return (
    <div>
         <img src={user3} alt="" className='img-fluid img-thumbnail d-block temi' />
                            <img src={user4} alt="" className='img-fluid img-thumbnail d-block' />
                            <img src={user2} alt="" className='img-fluid img-thumbnail d-block' />

    </div>
  )
}

export default About2