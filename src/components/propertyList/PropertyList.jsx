import React from 'react'
import "./propertyList.css"
import HotelsBugg from '../../Images/hotelsBugg.jpg';

const PropertyList = () => {
  return (
    <div className="pList">
     <div className="pListItem">
        <img src={HotelsBugg} height={200} width={180} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>222 Hotels</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src={HotelsBugg} height={200} width={180} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>resort</h1>
            <h2>222 Hotels</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src={HotelsBugg} height={200} width={180} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villa</h1>
            <h2>222 Hotels</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src={HotelsBugg} height={200} width={180} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>222 Hotels</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src={HotelsBugg} height={200} width={180} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>222 Hotels</h2>
        </div>
     </div>
    </div>
  )
}

export default PropertyList