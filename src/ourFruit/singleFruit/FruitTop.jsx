import React from 'react'
import './singleFruit.css'

import square from '../../assets/pumpkins sq.jpg';

function FruitTop(props) {
  return (
    <div className='fruit-top'>
				<h1>Strawberries</h1>
				<div className='three-pics'>
					<img src={square} alt="square"/>
					<img src={square} alt="square"/>
					<img src={square} alt="square"/>
				</div>

				<div className='fruit-dates-news-container'>
					<div className='fruit-dates-box'>
						<h2>Season Dates</h2>
						<div className='dates-box-inner'>
							<div className='dates-box-inner-1'>
								<p>This Season</p>
								<p className='givem-a-little-space-1'>(estimated)</p>
								<p>Average</p>
							</div>

							{/* this is a complete and utter hack: */}
							<div className='dates-box-inner-2'>
								<p>..............</p>
							</div>
							<div className='dates-box-inner-3'>
								<p className='givem-a-little-space-2'>May 29, 2022 to Jun 21, 2022</p>
								<p>May 25 to June 20</p>
							</div>
						</div>
					</div>
					<div className='fruit-news-box'>
						<h2>Latest News</h2>
					</div>
				</div>

    </div>
  )
}

export default FruitTop