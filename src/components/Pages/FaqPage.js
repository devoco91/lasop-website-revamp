import React, { lazy, Suspense, useEffect} from 'react'
import "./faqpage.css"
import Faqnavbar from '../navbarfiles/Faqnavbar'
import Footer from '../footerfiles/Footer'
const Faq1= lazy(()=> import("../Faq1"))
const Faq= lazy(()=> import("../common/Faq"))
const Advert= lazy(()=> import("../common/Advertsection"))
const Getstarted= lazy(()=> import("../common/Getstarted"))

function FaqPage() {


  useEffect(() => {
    window.scrollTo(0, 10)
  }, [])
  return (
    <div className="faqpage">
      

      <Suspense fallback={<div>Loading...</div>}>
      <div className="background">
      <Faqnavbar/>
     
        <div className="container">
          

          <div className="info p-md-5 position-relative position ">
            

            <Faq1 />
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

      </Suspense>
    </div>
  )
}

export default FaqPage