import React from 'react'
import Left from './Left'
import Both from'./Both'
import Middel from './Middel'

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
        'border-radius': '15px',
        gap:'3%'
      }}>
        <Left/><Both/><Middel/><Both/>
      </div>
    </div>
  )
}

export default Hero
