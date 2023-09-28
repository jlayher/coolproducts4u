import React from 'react'
import BannerImg from '../Banner/Cool_Products_4U.png';
import './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <img className='banner-img' src={BannerImg} />
    </div>
  )
}

export default Banner
