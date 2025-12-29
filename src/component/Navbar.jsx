import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {

  let [logoutbtn,setlogoutbtn]=useState(false)

  let nav = useNavigate()

  useEffect(()=>{ 
     
      if(localStorage.getItem('name')){
         setlogoutbtn(true)
      }
      else{
        setlogoutbtn(false)
      }

  },[])

   const handleLogout = () =>{
    localStorage.clear()
    nav("/signup")
  }

  return (
    <>
    <nav className="navbar">
      <div className="logo">MovieStar</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/signup" className="logout-btn">SignUp</Link>
        <Link to="/login" className="logout-btn">Login</Link>

       { logoutbtn && <button onClick={handleLogout} className="logout-btn">Logout</button> }    
      </div>
    </nav>
    </>
  );
};

export default Navbar;
