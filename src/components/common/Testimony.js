import React from 'react'
import "./testimony.css"
import doubleline from "./../../assets/double.png"
import Slider from 'react-slick'

function Testimony() {

    let testimonyData = [
        {id:1, name: 'Christian Amienghen', color: "#FF7F00", body: "As someone who had no background knowledge about web-development or programming of any sorts, I can boldly say that LASOP is the best institute for learning anything you want about programming. They carry all the students along through the journey from beginner to pro and they ensure that they are independent in writing properly functioning codes. "},
        {id:1, name: 'Mary Seghosime', color: "#ddcffb", body: "I am currently taking my tech training at Lasop Berger centre. It has been an amazing journey. The tutor has been very helpful and the environment so condusive. If you are looking for a place to start your tech career, i highly recommend Lasop. "},
        {id:1, name: 'Josh Ose', color: "#a4aafd", body: "Lectures have been great. The tutor is patient and has good communication skills, people-oriented, and ability to pass knowledge."},
        {id:1, name: 'Mary Seghosime', color: "#ddcffb", body: "I am currently taking my tech training at Lasop Berger centre. It has been an amazing journey. The tutor has been very helpful and the environment so condusive. If you are looking for a place to start your tech career, i highly recommend Lasop. "},

        {id:1, name: 'Annabel Ifeoma', color: "#592600", body: "The environment is indeed conducive and my tutor was great taking us through the class especially in the area of Data cleaning which is the major attribute as a  data scientist but the school has to work towards their relationship with the students."},
        {id:1, name: 'Bolaji Solaja', color: "#e5e5e5", body: "LASOP is the place to be. You are taken through the very rudiments of programming and how to practically use it in the modern world "},
        {id:1, name: 'Timilehin Ogunnowo', color: "#ff4500", body: "Honestly, this citadel of learning was a great experience. It impacted the knowledge and skills needed to be a web developer. it has been one of a kind which is going to be effective throughout my lifetime."},
        
    ]

    let settings = {
        fade: true,
        autoplay: true,
        dots:true,
        infinite:true,
        slidesPerRow: 3,
        slidesToScroll:1,
        
        
       responsive: [
        
        {
          breakpoint: 577,
          settings: {
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll:1,

          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesPerRow: 2,
            slidesToShow: 1,
            slidesToScroll:1,

          }
        },
        
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      
       
    }

  return (
    <div className="testimonial p-5">
        <h4 className='text-center test-text'>What Our Students Says</h4>
        <img src={doubleline} className='doubleline say-img' alt="" />

       <div className="container test-box">
        <Slider {...settings} >
        {testimonyData?.map((data, i) =>(
        <div key={i} className="item  rounded rounded-3 p-2">
        <div  style={{"--color": data?.color } } className="card">
           <p  style={{"--color": data?.color } } className="title fw-bold p-2 ">{data?.name}</p>
           <div  className="h6 fw-bold p-2">
           {data?.body}
           </div>

        </div>
    </div>
       ))}
        </Slider>
       </div>
    </div>
  )
}

export default Testimony