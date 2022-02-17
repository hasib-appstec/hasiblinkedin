import React from 'react'
import "./FeedOption.css"
const FeedOption = ({Icon, title, color}) => {
  return (
    <div className='feed-option'>
      <Icon style={{color: color}} />
      <h5 >{title}</h5>
    </div>
  )
}

export default FeedOption