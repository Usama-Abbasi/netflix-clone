import React, { useState,useEffect } from 'react'
import './Nav.css';
import avatar from './Assests/avatar.png'
import logo from './Assests/logo.png'
function Nav() {
    const [show, handleshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleshow(true)
            }else handleshow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src={logo}
            alt="Netflix Logo"/>
            <img className="nav_avatar"
            src={avatar}
            alt="Avatar"
            />
        </div>
    )
}

export default Nav
