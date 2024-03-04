import React from "react";
export default function MenuItem({image , name , price}){
    return(
        <div className="menuItem">
           <div style={{backgroundImage: `url(${image})`}}></div>
           <h3>{name}</h3>
           <p>${price}</p>
        </div>
    )
}