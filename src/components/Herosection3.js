import React from 'react'
import "./Pages/home.css"
import { BiCalendar } from 'react-icons/bi'
import { RxDividerVertical } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom'
import { TbMathGreater } from "react-icons/tb"

const Herosection3 = ({data}) => {

    
  const cardsData = [
    {
      title: "fullstack development",
      info: "Learn to create professional, responsive websites using HTML, CSS, Bootstrap, JavaScript, JQuery, React, Python, Django & SQL.",
      index: 2,
      slug: "fullstackweb",
      img: "full.png",
      link:"fullstackweb"

    },
    {
      title: "mobile app development",
      info: "Learn to create mobile UI designs with native frameworks or cross-platform frameworks, React Native, Flutter",
      index: 4,
      slug: 'mobileappdev',
      img: "mob.png",
      link:"mobileappdev"
    },
    {
      title: "frontend development",
      info: "Learn to create professional, responsive websites using HTML, CSS, Bootstrap, JavaScript, JQuery, React, & SQL.",
      index: 1,
      slug: "frontendweb",
      img: "full.png",
      link:"frontendweb"
    },
    {
      title: "backend development",
      info: "Learn Python, and its framework Django. Or  Node and Express.NET if your interest is to become a Nodejs developer.",
      index: 3,
      slug: "backendweb",
      img: "backend.png",
      link:"backendweb"
    },
    {
      title: "UI/UX design",
      info: "Learn design thinking, wireframes, interactive prototyping. Earn a UX design certification to accelerate your career with cutting-edge skills.",
      index: 0,
      img: "ui.png",
      link:"uiuxdesign",
      slug: "dataanalytics",
    },
    {
      title: "Data science and AI",
      info: "Dive into prescriptive and predictive analytics, machine learning, artificial intelligence, statistical analysis, and programming languages.",
      index: 5,
      slug: 'datascience',
      img: "ds.png",
      link:"datascience"
    },
  ]


  return (
    <div>
        
        <div data-aos="zoom-in-up" className="cards container p-4 cardzz"  >
          <div className="row gap-md-0 gap-3 ">
            {cardsData?.map((data, i) => (
              <div key={i} className="col-md-6 col-lg-4 my-2">
                <div className="card p-3 text-center devoco">
                  <img src={`./../../../images/${data?.img}`} alt={data?.title} className="card-img-top img-fluid" />
                  <h5 className='my-3 text-capitalize '>{data?.title}</h5>
                  <p>{data?.info}</p>
                  <Link to={`/${data?.slug}`} className='fw-bold'>
                  <div className="border w-50 rounded p-2 border-primary d-flex gap-3 align-items-center mx-auto bat ">
                  learn more
                    <TbMathGreater color='#000066' />
                  </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
    </div>
  )
}

export default Herosection3