import React from 'react'
import Left from './Left'

const Hero = () => {
  return (
    <div style={{ margin: 'auto 0', display:'flex' , justifyContent:'center',}}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border:'2px solid black',
        height: '100vh',
       width: '191vh',
        'margin-top': '15px',
        'border-radius': '15px'
      }}>
        <Left /><Left /><Left />
      </div>
    </div>
  )
}

export default Hero
