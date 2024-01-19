import React from 'react'
import "./Pages/home.css"
import { BiCalendar } from 'react-icons/bi'
import { RxDividerVertical } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom'
import { TbMathGreater } from "react-icons/tb"
import outline from "../assets/outline.png"

function Herosection4() {
  return (
    <div>
        <div data-aos="zoom-in-down" className="outline">
          <h6 className="text-center h2">Course Outline</h6>
          <img src={outline} className="d-block m-auto img-fluid" alt="outline" />

        </div>
    </div>
  )
}

export default Herosection4