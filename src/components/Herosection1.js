import React from 'react'
import bannerImg from "../assets/Image.svg"
import "./Pages/home.css"

function Herosection1() {
  return (
    <div>
        <div className="banner p-3 " data-aos="zoom-in-up">
          <div className="container p-md-5 p-1">
            <div className="row align-items-center">
              <div className='col-md-6 col-12 px-4'>
                <h2 className="h2" data-aos="fade-in"> Empower yourself with a skill that will make you fulfilled</h2>
                <p className='p'>Transform your passion for technology into a rewarding career and take your coding skills to the next level with any of our practical, industry-focused training programs.</p>
                <div className='info-btn container-fluid'>
                  <div className="row align-items-center gap-1">


                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12 my-3 my-md-0">
                <img className='' src={bannerImg} alt="banner" />
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Herosection1