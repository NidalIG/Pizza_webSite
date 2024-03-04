import React from "react";
import {MenuList} from '../helpers/MenuList'
import MenuItem from "../components/MenuItem";
import '../styles/menu.css'
export default function Menu(){
    return(
        <div className="menu">
            <h1 className="menuTitle">Our menu</h1>
            <div className="menuList">{MenuList.map((menuItems , key) =>{
                return <MenuItem 
                key={key} 
                image={menuItems.image}
                 name={menuItems.name} 
                 price={menuItems.price}/>
            })}</div>

        </div>
    )
}