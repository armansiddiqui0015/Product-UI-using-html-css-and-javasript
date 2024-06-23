import React from 'react'
import SideBar from './SideBar'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";

const ProtfolioTwo = () => {
    console.log('hello')
  return (
    <div className='ProtFoliotwo' style={{height : '100vh', width: '100%'}}>
      <SideBar />

      
      <div className='fcomponent'>
        <div className='foneimg1'>
            <div className='foneimg'> <img src="/car1.avif" alt="" /></div>
            <div className='foneimg'> <img src="/car2.jpg" alt="" /></div>

        </div>
        <div className='soneimg2'>
        <div className='soneimg'>
            <img src="/car3.jpg" alt="" />
        </div>
            
        </div>
      </div>
      <div className='scomponent'>
      <h1 className='protName'><span className='pname'>P</span>ORTFOLIOS</h1>
      <div>
        <div style={{
            display: 'flex',
            marginTop: '120px'
        }}>
        <FaAlignCenter style={{fontSize: '50px',color: 'orange'}}  />
        <h3 style={{
            marginLeft: '20px'
        }}>Arman <span style={{
            color: 'orange'
        }}>Siddiqui</span></h3>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et id est ipsa, minima quae vitae vel ex repellat optio.</p>
     <div style={{
            display: 'flex',
            marginTop: '150px'
        }}>
     <FaAngleDoubleRight style={{fontSize: '50px', color: ' aqua'}} />
     <h3 style={{
            marginLeft: '20px'
        }}><span style={{
            color: 'orange'
        }}>Memon </span> yasin</h3>

     </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et id est ipsa, minima quae vitae vel ex repellat optio.</p>

    
        
      </div>
      

     </div>
     <div className='ght' style={{
        width: '210px',
        height: '100vh',
        backgroundColor : 'aqua',
        float: 'left',
        marginLeft: '20px'

     }}>
    
      </div>
    </div>
  )
}

export default ProtfolioTwo
