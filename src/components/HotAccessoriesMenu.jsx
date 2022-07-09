import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
      {/* <a className='HotAccessoriesLink' href="/music">Music Store</a>
      <a className='HotAccessoriesLink' href="/smartDevices">Smart Devices</a>
      <a className='HotAccessoriesLink' href="/home">Home</a>
      <a className='HotAccessoriesLink' href="/lifestyle">LifeStyle</a>
      <a className='HotAccessoriesLink' href="/mobileAccessories">Mobile Accessories</a> */}
      
        <Link className='HotAccessoriesLink' to='/music'>Music Store</Link>
        <Link className='HotAccessoriesLink' to='/smartDevice'>Smart Device</Link>
        <Link className='HotAccessoriesLink' to='/home'>Home</Link>
        <Link className='HotAccessoriesLink' to='/lifestyle'>Lifestyle</Link>
        <Link className='HotAccessoriesLink' to='/mobileAccessories'>Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu