import React,{useEffect} from 'react'
import Navbar from './../navbarfiles/Navbar'
import Footer from './../footerfiles/Footer'
import "./calendar.css"
import { centercodes } from '../../fakedb/courseData'
import { Link } from 'react-router-dom'
function Calendar() {

    useEffect(() => {
        window.scrollTo(0, 10)
      }, [])
    return (
        <>
        <Navbar/>
        
        <div className="calendar">

<div className="calendarhero ">

    <div className="container p-5">
        <div className="row align-items-center">
            <div className='col-md-6 col-12'>
                <h2 className="h2"> Academic Calendar </h2>
                <p className='p'>This calendar is updated every month to keep you well informed and ahead.
                    Last updated: July 8th, 2022.</p>
                <div className='info-btn container-fluid'>
                    <p>Center Codes:</p>
                    <div className="row align-items-center">
                        {centercodes?.map((name) => (
                            name !== "" && <small className='text-center p-1 col-4 mx-1 '> {name}</small>
                        ))}

                    </div>
                </div>
            </div>


        </div>

    </div>


</div>

{/* <div className="container calendar-tabs my-5">
    <button className='active'>Frontend</button>
    <button>Backend</button>
    <button>Fullstack</button>
    <button>UI/UX</button>
    <button>App Dev</button>
    <button>Data & AI</button>

</div> */}

<div className="calendar-table table-responsive-md container cals">
    <table class="table text-center cals">
        <thead>
            <tr>
                <th scope="col">MONTH</th>
                <th scope="col">YEAR</th>
                <th scope="col">MODE</th>
                <th scope="col">Code</th>
                <th scope="col">Start</th>
                <th scope="col">end</th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td scope="row">SEPT.</td>
                <td scope="row">2023</td>
                <td scope="row">WKDAYS</td>
                <td>SEPT OL</td>
                <td>SEPT 04</td>
                <td>MAR 03</td>
                <button className="btn">
                    <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">OCT.</td>
                <td scope="row">2023</td>
                <td scope="row">WKENDS</td>
                <td>OCT OL</td>
                <td>OCT 07</td>
                <td>APR 06</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">JAN.</td>
                <td scope="row">2024</td>
                <td scope="row">WKDAYS</td>
                <td>JAN OL</td>
                <td>JAN 08</td>
                <td>JUN 27</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">FEB.</td>
                <td scope="row">2024</td>
                <td scope="row">WKENDS</td>
                <td>FEB OL</td>
                <td>FEB 10</td>
                <td>JUN 30</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">MAR.</td>
                <td scope="row">2024</td>
                <td scope="row">WKDAYS</td>
                <td>MAR OL</td>
                <td>MAR 04</td>
                <td>AUG 29</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">MAR.</td>
                <td scope="row">2024</td>
                <td scope="row">WKENDS</td>
                <td>MAR OL</td>
                <td>MAR 09</td>
                <td>JULY 28</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">MAY.</td>
                <td scope="row">2024</td>
                <td scope="row">WKDAYS</td>
                <td>MAY OL</td>
                <td>MAY 06</td>
                <td>OCT 31</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">JUL.</td>
                <td scope="row">2024</td>
                <td scope="row">WKDAYS</td>
                <td>JUL OL</td>
                <td>JUL 01</td>
                <td>FEB 27</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">JUL.</td>
                <td scope="row">2024</td>
                <td scope="row">WKENDS</td>
                <td>JUL OL</td>
                <td>JUL 06</td>
                <td>NOV 30</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">AUG.</td>
                <td scope="row">2024</td>
                <td scope="row">WKENDS</td>
                <td>AUG OL</td>
                <td>AUG 03</td>
                <td>DEC 22</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">SEPT.</td>
                <td scope="row">2024</td>
                <td scope="row">WKDAYS</td>
                <td>SEPT OL</td>
                <td>SEPT 02</td>
                <td>FEB 27</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">NOV.</td>
                <td scope="row">2024</td>
                <td scope="row">WKDAYS</td>
                <td>NOV OL</td>
                <td>NOV 04</td>
                <td>APR 29</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">DEC.</td>
                <td scope="row">2024</td>
                <td scope="row">WKENDS</td>
                <td>DEC OL</td>
                <td>DEC 07</td>
                <td>APR 27</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">JAN.</td>
                <td scope="row">2025</td>
                <td scope="row">WKDAYS</td>
                <td>JAN OL</td>
                <td>JAN 06</td>
                <td>JUN 26</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
          
            
           
        </tbody>
    </table>
</div>


</div>

        {/* <Footer/> */}
        </>

    )
}

export default Calendar