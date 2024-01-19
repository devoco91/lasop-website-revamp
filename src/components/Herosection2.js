import React from 'react'
import "./Pages/home.css"
import { BiCalendar } from 'react-icons/bi'
import { RxDividerVertical } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom'
import { TbMathGreater } from "react-icons/tb"

function Herosection2() {
  return (
    <div>
        
        <div data-aos="zoom-in-up" className="next-cohort w-75 m-auto p-3 my-5 rounded border border-primary read ">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-12 d-flex justify-content-between align-items-center ">
              <div className=''>
                <h6 className='small'><BiCalendar /> Next cohort starts:</h6>
                <h4>Feb 10</h4>
                <h6 className='small'>9:00am - 2:00pm WAT</h6>
              </div>
              <button className="btn-sm btn btn-primary">
                <Link to="/signup" className='nav-link'>Enroll Now</Link>
              </button>
            </div>

            <div className="col-md-2 col-12 text-md-center">
              <RxDividerVertical size={40} />
            </div>

            <div className="col-md-5 col-12 flex-column flex-md-row d-flex align-items-md-center justify-content-around">
              <h6 className='small text-capitalize'>Find Another cohort <br /> that fit your schedule</h6>

              <Link to="/calendar" className="mb-2 nav-link border border-primary text-center p-md-2 p-1 small text-primary rounded">
              see all cohort
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Herosection2