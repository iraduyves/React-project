import React from 'react'
import "./featured.css"
const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="../../components/featured/hos.png" alt="" />
            <div className="featuredTitle">
                <h1>Kigali</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="./back.jpg" alt="" />
            <div className="featuredTitle">
                <h1>Kigali</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="hos.png" alt="" />
            <div className="featuredTitle">
                <h1>Kigali</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured