import React from 'react'
import "./faqpage.css"
import Faqnavbar from '../navbarfiles/Faqnavbar'
import Faq from '../common/Faq'
import Advert from '../common/Advertsection'
import Getstarted from '../common/Getstarted'
import Footer from '../footerfiles/Footer'

function FaqPage() {
  return (
    <div className="faqpage">
      <div className="background">
        <div className="container">
          <Faqnavbar/>

          <div className="info p-md-5 position-relative position ">
            <h4 className="text-center text-white p-4 move-up">Frequently Asked <br /> <span className='q'>Questions</span></h4>

            <img className='faqimage' src="./../../../images/faq.png" alt="" />

            <Faq />
          </div>

        </div>
      </div>

      <div className="advert p-5">
        <Advert/>
      </div>

      <div className="getstarted p-5">
        <Getstarted/>
      </div>

      {/* <Footer/> */}



    </div>
  )
}

export default FaqPage