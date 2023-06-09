import React from 'react'
import "./propertyList.css"
import y from "../../images/doctor.jpg"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
             <img src={y} alt="" className="pListImg"/>
             <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
             </div>
         </div>
         <div className="pListItem">
             <img src={y} alt="" className="pListImg"/>
             <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
             </div>
         </div>
         <div className="pListItem">
             <img src={y} alt="" className="pListImg"/>
             <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
             </div>
         </div>
         <div className="pListItem">
             <img src={y} alt="" className="pListImg"/>
             <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
             </div>
         </div>
    </div>
  )
}

export default PropertyList