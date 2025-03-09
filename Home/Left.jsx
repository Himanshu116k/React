import React from 'react'
import './Left.css'

const left = () => {
  return (
    <>
    <style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" /></style>
    <div style={{'background-color': '#fffefe61',
    height: '37vh',
    width: '4.5%',
    'border-radius': '30px',
    'margin-left': '15px',}}>
     <ul style={{    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
     gap: '35px'}}>
     <li style={{'margin-top':'10px'}}><i class="fa-solid fa-plus"></i></li>
     <li><i class="fa-regular fa-bell"></i></li>
     <li><i class="fa-solid fa-award"></i></li>
     <li><i class="fa-solid fa-globe"></i></li>
     </ul>
      
    </div>
    </>
  )
}

export default left
