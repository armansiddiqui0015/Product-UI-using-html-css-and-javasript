import React from 'react'
import SideBar from './SideBar'

const ProtThree = () => {
  return (
    <div className='Protthree' style={{height : '100vh', width: '100%'}}>
    <SideBar />

    
    <div className='hcomponent'>
      <img src="car2.jpg" alt="" />
    </div>
    <div className="imgonecontainer">
        <img  src="/car1.avif" alt="" />
        <img src="/car3.jpg" alt="" />
        <img style={{background : 'orange'}} src="/headphone.avif" alt="" />

    </div>

    <div className="imgonecontainer1">
        <img  src="/car2.jpg" alt="" />
        <img style={{background : 'orange'}}  src="/sole.jpeg" alt="" />
        <img src="/km.jpg" alt="" />

    </div>
    <h1  className='lrotName'><span className='pname'>P</span>ORTFOLIOS</h1>

    
  
  </div>
  )
}

export default ProtThree
