import React from 'react'

const SumMain = () => {
  return (
    <div className='SumMain ' style={{
        width : '100%',
        height: '100vh',
    }}>
        <div className='portfolio'>
        <h1 className='protName'><span className='pname'>P</span>ORTFOLIOS</h1>
        <h3 style={{
            fontWeight: '700'
        }}>Lorem, ipsum dolor.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam magnam consequatur, cum saepe illo ex illum molestias repudiandae optio amet commodi libero temporibus nisi, eveniet labore officia debitis corrupti eius suscipit. Id consectetur repellendus natus voluptatum nemo alias sapiente aliquam soluta autem incidunt, optio, et, debitis quasi harum consequuntur adipisci?</p>
        </div>
        <div className='headphonebackGround'>
            <img src="/headphone.avif" alt="" />
        </div>
    </div>
  )
}

export default SumMain
