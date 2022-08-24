import React, { useState } from 'react'
import logo from '../asset/Icons/logo.png'
import menu from '../asset/Icons/menu.png'
import { NavLink } from "react-router-dom";

const navs = [
  'About', 'Academic', 'Event', 'PMB', 'Contact Us'
]

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };

  window.addEventListener('scroll', changeBackground)
  
  return (
    <header>
      <nav className={navbar ? 'navbar active lg:px-24' : 'navbar '}>
        <div className="flex-1 pl-3 ">
          <img src={logo} alt="logo" className="w-28 sm:w-40" />
        </div>
        <div className="dropdown md:hidden scale-75">
          <label tabIndex="0" className="btn m-1"><img src={menu} alt="" className='w-8' /></label>
          <div tabIndex="0" className="dropdown-content card card-compact w-64 p-2 shadow bg-info text-primary-content right-5 ">
            <div className="card-body">
              <NavLink key='6' to="/" className="tab hover:text-lime-400 text-white active:tab-bordered text-lg"> Home </NavLink>
              {
                navs.map((nav, index) => {
                  return (
                    <NavLink key={index + 1} to={`/${nav}`} className="tab hover:text-blue-400 text-white active:tab-bordered text-lg"> {nav} </NavLink>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='hidden md:contents'>
          <div className="tabs mr-5 md:mr-12 font-sans" >
            <NavLink key='6' to='/' className="tab hover:text-blue-600 text-blue-400 active:tab-bordered "> Home </NavLink>
            {
              navs.map((nav, index) => {
                return (
                  <NavLink key={index + 1} to={`/${nav}`} className="tab  text-blue-400 hover:text-blue-600 active:tab-bordered "> {nav} </NavLink>
                )
              })
            }
          </div>
          <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>
          <div>
            <a className="btn btn-info rounded-full text-white px-10 normal-case hover:bg-blue-600" href='https://idn.ac.id/lms'>Login</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;
