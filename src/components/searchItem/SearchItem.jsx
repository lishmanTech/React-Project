import "./searchItem.css"
import Photoo from '../../Images/photo1.jpg';

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src={Photoo} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartment</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport Taxi</span>
          <span className="siSubtitle">
            Studio Apartment wit Air conditioning 
          </span>
          <span className="siFeatures">Entire Studio * 1 bathroom * 21mSquare 1 full bed</span>
          <span className="siCancelOp">Free Cancellation</span>
          <span className="siCancelOpSubtitle">you can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
           <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
           </div>
           <div className="siDetailTexts">
              <span className="siPrice">$123</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See Availability</button>
           </div>
        </div>
    </div>
  )
}

export default SearchItem