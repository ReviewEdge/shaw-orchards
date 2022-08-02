import React from 'react'
import FruitBox from '../fruitBox/FruitBox'
import './fruits.css'

function Fruits() {
  return (
    <div className='fruits'>
      <h1>OUR FRUIT</h1>

      <div className='fruits-container'>
        <FruitBox name='Peaches' inSeasonText="IN SEASON!" seasonDate='UNTIL START: AUG 4' />
        <FruitBox name='Strawberries' inSeasonText="IN SEASON!" seasonDate='UNTIL START: AUG 4' />
        <FruitBox name='Melons' inSeasonText="IN SEASON!" seasonDate='UNTIL START: AUG 4' />
        <FruitBox name='Strawberries' inSeasonText="IN SEASON!" seasonDate='UNTIL START: AUG 4' />
        <FruitBox name='Nectarines' inSeasonText="IN SEASON!" seasonDate='UNTIL START: AUG 4' />
        <FruitBox name='Peaches' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Strawberries' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Apples' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Nectarines' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Melons' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Strawberries' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Nectarines' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Peaches' seasonDate='ESTIMATED START: AUG 4' />
        <FruitBox name='Peaches' seasonDate='ESTIMATED START: AUG 4' />
      </div>
    </div>
  )
}

export default Fruits
