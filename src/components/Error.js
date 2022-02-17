import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
import error from "../Assets/error2.jpg"

const Error = () => {
  return (
    <>
      <div className='error'>
        <h1>Oops! The Page Not Found 😒🤬😡</h1>
        <img src={error} alt="" />

      </div>
    </>
  )
}

export default Error