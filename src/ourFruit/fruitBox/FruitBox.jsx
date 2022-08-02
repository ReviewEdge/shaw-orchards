import React from 'react'
import './fruitBox.css'

function FruitBox(props) {
  return (
    <div className='fruitBox'>

      <a href={props.href}>
        <div className='fruit-text-box'>
          <h3>{props.inSeasonText}</h3>
          <h2>{props.name}</h2>
          <p>{props.seasonDate}</p>
        </div>
      </a>
    </div>
  )
}

export default FruitBox
