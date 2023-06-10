import React from "react"
import "./FeaturedPropeties.css"
import yvn from "../../images/yvonne.jpg"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
         <img src={yvn} alt="" className="fpImg" />
         <span className="fpName">Apartment Stare Miasto</span>
         <span className="fpCity">Madrid</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
           <button>8.9</button>
           <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem">
         <img src={yvn} alt="" className="fpImg" />
         <span className="fpName">Apartment Stare Miasto</span>
         <span className="fpCity">Madrid</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
           <button>8.9</button>
           <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem">
         <img src={yvn} alt="" className="fpImg" />
         <span className="fpName">Apartment Stare Miasto</span>
         <span className="fpCity">Madrid</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
           <button>8.9</button>
           <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem">
         <img src={yvn} alt="" className="fpImg" />
         <span className="fpName">Apartment Stare Miasto</span>
         <span className="fpCity">Madrid</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
           <button>8.9</button>
           <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem">
         <img src={yvn} alt="" className="fpImg" />
         <span className="fpName">Apartment Stare Miasto</span>
         <span className="fpCity">Madrid</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
           <button>8.9</button>
           <span>Excellent</span>
         </div>
      </div>
      
      
    </div>
    
    
  )
}

export default FeaturedProperties