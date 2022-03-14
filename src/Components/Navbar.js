import React from 'react'
import { NavLink } from "react-router-dom"
function Navbar() {
    return (
        <div className='bg-primary'>
             
{/*======= Header ======= */}
<header id="header" className="fixed-top opacity-75" style={{ "backgroundColor": "#37517e" }}>
                <div className="container d-flex align-items-center">
                    <NavLink to="/"><h1 className="logo me-auto"><a >Alliance Network</a></h1></NavLink>
                     {/* Uncomment below if you prefer to use an image logo */}
                     <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <NavLink to="/"><li><a className="nav-link scrollto active" >Home</a></li></NavLink>
                            <NavLink to="/our-company"><li><a className="nav-link scrollto" >Our Company</a></li></NavLink>


                            <li className="dropdown"><a href="#"><span>Business Model</span> <i className="bi bi-chevron-down" /></a>
                                <ul>
                                    <NavLink to="/our-management"><li><a >Management</a></li></NavLink>
                                    <li className="dropdown"><a href="#"><span>Structure PlatForm</span> <i className="bi bi-chevron-right" /></a>
                                        <ul>
                                            <NavLink to="/our-technology"><li><a >Our Technology</a></li></NavLink>
                                            <NavLink to="/quality"><li><a href="#">Quality Parameters</a></li></NavLink>
                                            <li><a href="#">Sale Chennal Research</a></li>
                                        </ul>
                                    </li>
                                    <NavLink to="/affiliate"><li><a >Affiliation</a></li></NavLink>

                                </ul>
                            </li>
                            <NavLink to="/about"><li><a className="nav-link   scrollto" >About Us</a></li></NavLink>
                            <NavLink to="/contact"><li><a className="nav-link scrollto" >Contact Us</a></li></NavLink>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle " />
                     </nav> 
                     {/* .navbar  */}
                 </div> 
             </header>  
            {/* End Header */}
            
        </div>
    )
}

export default Navbar