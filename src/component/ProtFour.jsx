import React from 'react'
import SideBar from './SideBar'

const ProtFour = () => {
  return (
    <div>
      <div className='Protthree' style={{height : '100vh', width: '100%'}}>
    <SideBar />

    
    <div className='hcomponent1'>
      <img src="car2.jpg" alt="" />
    </div>
    

    
    <h1  className='lrotName1'><span className='pname'>P</span>ORTFOLIOS</h1>
    <div className='fcon'>
        <img src="/car1.avif" alt="" />
        <img src="/car2.jpg" alt="" />

    </div>
    <div className='scon'>
        <img style={{background : 'orange'}} src="/headphone.avif" alt="" />
        <img src="/km.jpg" alt="" />

    </div>
  </div>
  
    </div>
  )
}

export default ProtFour
