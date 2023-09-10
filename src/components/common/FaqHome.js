import React, { useEffect, useState } from "react";
import Faquestion from "react-faq-component";
import doubleline from "./../../assets/double.png"
import "./faq.css"


function FaqHome() {

    const data = {
        rows: [
            {
                title: "I don’t have any background knowledge in programming, can I apply?",
                content: `Yes, you can. You don’t need any background knowledge in IT or coding before you can register. Having one is only an advantage for you. At LASOP, we start from the basics and guide you through all you need to know to be a successful software developer.`,
            },
            {
                title: "What Must I Do To Be Successful In The Program?",
                content:
                    "Be aware that your success is our priority. To be successful in the program, you must get yourself fully involved by not missing lesson periods, actively obeying instructors, mentors and even classmates. You must also practice constantly and execute real life projects.",
            },
            {
                title: "What Materials Do I Need For This Program?",
                content: `For your training, you need a laptop (Mac, Linus or PC) with a minimum of 4GB ram, and a storage capacity of at least 250GB.Every other software will be installed with the help of our experts before the beginning of the course. `,
            },
            
        ],
    };

    const config = {
        animate: true,
        arrowIcon: "V",
        openOnload: 0,
        expandIcon: "+",
        collapseIcon: "-",
    };

    const style = {
        bgColor: "transparent",
        rowTitleColor: "#fff",
        rowContentColor: "#fff",
        arrowColor: "#fff",
        rowContentPaddingTop: "10px",
        rowContentPaddingBottom: "10px",
        rowContentPaddingLeft: "10px",
        rowContentPaddingRight: "10px",
        transitionDuration: "0.9s",
        timingFunc: "ease-in-out"

    }

  return (
    <div className="faqs p-5">


        <div className="info">
        <Faquestion
                styles={style}
                data={data}
               config={config}
            />
        </div>

    </div>
  )
}

export default FaqHome