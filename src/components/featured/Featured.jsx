import React from 'react'
import "./featured.css"
import back from "../../images/doctor.jpg"
import hos from "../../images/hos.png"
import yv from "../../images/logohacker.jpg"
import y from "../../images/hackerrlogo.jpg"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
        <img src={y} alt=""  className="featuredImg"/>

            <div className="featuredTitle">
                <h1>Kigali</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={y} alt=""  className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Kigali</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
         <img src={y} alt=""  className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Kigali</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured