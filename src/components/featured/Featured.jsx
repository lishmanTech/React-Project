import React from 'react'
import './featured.css'
import HotelsDub from '../../Images/hotelsDub.jpg';

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={HotelsDub} height={300} width={320} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dubling</h1>
                <h2>234 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={HotelsDub} height={300} width={320} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dubling</h1>
                <h2>234 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={HotelsDub} height={300} width={320} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dubling</h1>
                <h2>234 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured