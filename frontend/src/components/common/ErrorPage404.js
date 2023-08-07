import React from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/Error/404icon.png' 

function ErrorPage404() {
  const navigate=useNavigate()
  return (
    <div className='error-page'>
      <div>
        <img src={icon}/>
      </div>
      <div className='error-content'>
        <h2>Are you lost?</h2>
        <p>Looks like the page you were looking for is not found</p>
        <button className='error-button' onClick={()=>navigate('/')}>Go Home</button>
      </div>
    </div>
  )
}

export default ErrorPage404