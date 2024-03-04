import React , { useState} from "react";
import logo from '../Images_projet/repas11.jpg' ;
import {Link} from 'react-router-dom' ;
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navbar.css'
export default function Navbar () {
    const [openlinks , setOpenLinks] = useState(false)
    const toogleNavbar =()=>{
        setOpenLinks(!openlinks)
    }
    return (
        <div className="navbar">
            <div className="leftSide" id={openlinks ? "open" : "close"}>
                <img src={logo} />
                <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> 
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>              
                <button onClick={toogleNavbar}>
                <ReorderIcon/>
                </button>


            </div>

        </div>
    )
}