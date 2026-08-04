import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import development from '../assets/development.png'

const Header = () => {

  const[togglemanu,setTogglemenu]=useState(false);
  return (
    <header className="flex items-center justify-between px-10 py-5 text-white bg-primary">

      <h1 className="text-3xl font-bold">
        Vidhya M
      </h1>
       <nav className="hidden md:block desktopnav "  >
        <div   className="flex  gap-8  " >
        <NavLink to="/" className={({isActive})=>isActive?"active":""}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?"active":""}>About</NavLink>
        <NavLink to="/skills" className={({isActive})=>isActive?"active":""}>skills</NavLink>
        <NavLink to="/projects" className={({isActive})=>isActive?"active":""}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive?"active":""}>Contact</NavLink>
        </div>
      </nav>

      { togglemanu &&
        <nav className=" block md:hidden "  >
        <div   className="flex flex-col gap-8  mobile-nav " >
            <NavLink to="/" className={({isActive})=>isActive?"active":""}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?"active":""}>About</NavLink>
        <NavLink to="/skills" className={({isActive})=>isActive?"active":""}>skills</NavLink>
        <NavLink to="/projects" className={({isActive})=>isActive?"active":""}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive?"active":""}>Contact</NavLink>
        </div>
      </nav>
      }
      <button  onClick={()=>setTogglemenu(!togglemanu)} className='text-white block md:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>

    </header>
  );
};

export default Header;