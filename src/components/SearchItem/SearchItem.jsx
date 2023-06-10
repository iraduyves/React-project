import "./SearchItem.css"
import y from "../../images/logohacker.jpg"
import yy from "../../images/hackerrlogo.jpg"


const SearchItem = () => {
  return (
    <div className="SearchItem" >
        <img src={y} alt=""  className="siImg"/>
        <div className="siDesc">
            <h1 className="sititle">Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire Studio . 1 bathroom .21m2 1 fullbed
            </span>
            <span className="siCancerOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                you can later, so lock on this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>

        </div>
    </div>
  )
}

export default SearchItem