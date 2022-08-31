import "./featuredProperties.css"
import Photoo from '../../Images/photo1.jpg';

const Featuredproperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
         <img src={Photoo} alt="" className="fpImg" />
         <span className="fpName">Lisandro Pisso</span>
         <span className="fpCity">Abuja</span>
         <span className="fpPrice">Starting at $450</span>
         <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
         </div>
     </div>
     <div className="fpItem">
         <img src={Photoo} alt="" className="fpImg" />
         <span className="fpName">Lisandro Pisso</span>
         <span className="fpCity">Abuja</span>
         <span className="fpPrice">Starting at $450</span>
         <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
         </div>
     </div>
     <div className="fpItem">
         <img src={Photoo} alt="" className="fpImg" />
         <span className="fpName">Lisandro Pisso</span>
         <span className="fpCity">Abuja</span>
         <span className="fpPrice">Starting at $450</span>
         <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
         </div>
     </div>
     <div className="fpItem">
         <img src={Photoo} alt="" className="fpImg" />
         <span className="fpName">Lisandro Pisso</span>
         <span className="fpCity">Abuja</span>
         <span className="fpPrice">Starting at $450</span>
         <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
         </div>
     </div>
    </div>
  )
}

export default Featuredproperties