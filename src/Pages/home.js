import React , {Component} from "react";
import { Link } from "react-router-dom";
import NavbarImage from '../Images_projet/image2.jpg'
import '../styles/home.css'
export default function Home () {
    return (
        <div className="home" style={{backgroundImage: `url(${NavbarImage})`}}>
           <div className="headerContainer" >
            <h1>Pedro 's Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
            <button>ORDER NOW</button>
            </Link>

           </div>
        </div>
    )
}