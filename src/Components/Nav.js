import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div style={{ "backgroundColor": "#37517e" }}>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ "backgroundColor": "#37517e" }}>
        <div className="container">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <NavLink to="/"><a className="navbar-brand text-white" href="#">Alliance Network</a></NavLink>
          <button className="navbar-toggler  bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon  " />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/"><li><a className="nav-link  active text-white" >Home</a></li></NavLink>
              <NavLink to="/our-company"><li><a className="nav-link text-white " >Our Company</a></li></NavLink>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business Model
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                  <NavLink to="/our-management"><li><a >Management</a></li></NavLink>
                  <li className="dropdown"><a href="#"><span>Structure PlatForm</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <NavLink to="/our-technology"><li><a >Our Technology</a></li></NavLink>
                      <NavLink to="/quality"><li><a href="#">Quality Parameters</a></li></NavLink>
                      
                    </ul>
                  </li>
                  <NavLink to="/affiliate"><li><a >Affiliation</a></li></NavLink>
                </ul>
              </li>

              <NavLink to="/about"><li><a className="nav-link  text-white" >About Us</a></li></NavLink>
              <NavLink to="/contact"><li><a className="nav-link text-white " >Contact Us</a></li></NavLink>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav