import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./hotel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Photoo from '../../Images/photo1.jpg';
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
        src: Photoo
    },
    {
      src: Photoo
    },
    {
      src: Photoo
    },
    {
      src: Photoo
    },
    {
      src: Photoo
    },
    {
      src: Photoo
    }
  ];
  const handleOpen = (i)=>{
      setSlideNumber(i);
      setOpen(true);   
  }
  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction==="l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    } else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar />
      <Header type="List"/>
      <div className="hotelContainer">
        {open && <div className="slider">
         <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
         <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")}/>
         <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
         </div>
         <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
         
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton Street 1246</span>
          </div>
          <span className="hotelDistancel">
            Excellent Location, 500m from center
          </span>
          <span className="hotelPrice  Highlight">
            Book a stay over $112 at this property and get something free
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (<div className="hotelImgWrapper">
               <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
            </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of town</h1>
              <p className="hotelDesc">
                Located in the heart of town i will be teaching you how to develop application
                 in java netbeans with sqlite studion, how to solve basic tech problems, how to use 
                 computer applications to do beautiful stuff. I will also try to download all the 
                 tech stuff i have learned over time.
                 God has truly blessed me with a wonderful family and amazing friends. 
               Thanks for your prayers, messages amd wishes; i will keep them all close to my heart.
              </p>
              <p className="hotelDesc">
                Located in the heart of town i will be teaching you how to develop application
                 in java netbeans with sqlite studion, how to solve basic tech problems, how to use 
                 computer applications to do beautiful stuff. I will also try to download all the 
                 tech stuff i have learned over time.
                 God has truly blessed me with a wonderful family and amazing friends. 
               Thanks for your prayers, messages amd wishes; i will keep them all close to my heart.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of town, this property has an excellent location score of 9.0</span>
              <h2><b>$945</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel