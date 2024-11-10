import React from 'react'
import Logo from "../assets/Logo.png"
import { GiSpaceship } from "react-icons/gi";
import { TbPlanet } from "react-icons/tb";
import { useState, useEffect } from "react";


const Navbar = () => {


  const [theme, setTheme] = useState (localStorage.getItem("theme")? localStorage.getItem("theme"): "light");

 useEffect(()=> {
    const localTheme = localStorage.setItem("theme", theme)
    document.querySelector("html").setAttribute("data-theme", localTheme)
   },[theme])

 const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
       <nav
             className=" w-full z-50 bg-third backdrop-blur-sm py-4 sm:py-0 font-dot "
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-10" />
              <span>SECKIN SPACE</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#/">Home</a>
                </li>
                <li>
                  <a href="/Technology">Technology</a>
                </li>
                <li>
                  <a href="/Galaxy">Galaxy</a>
                </li>
                <li>
                <a href="/About">About</a>
                </li>
              </ul>
            </div>
            <div className='flex items-center'>
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
 {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate   w-12 h-12">
            <input type="checkbox" className="theme-controller" value="light"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? true: false  }
            />
            {/* light theme sun image */}
            <GiSpaceship   className="w-8 h-8 swap-on" />
        <TbPlanet className="w-8 h-8 swap-off"/>
            {/* dark theme moon image */}
                  </label>
        </button>
             
            </div>
          </div>
        </div>
      </nav>


       
</>
    
  )
}

export default Navbar
