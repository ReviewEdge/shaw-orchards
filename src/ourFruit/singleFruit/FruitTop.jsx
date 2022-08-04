import React from 'react'
import './singleFruit.css'

import square from '../../assets/pumpkins sq.jpg';
import straw from '../../assets/straw.jpg';

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
						<p className='date-bold'>JUNE 3, 2022:</p>
						<p>Peaches are now available in the market. Pick-your-own
							 peach days will likely occur at the beginning of August. 
							 Signup for the Ripeline to be notified of our limited PYO
							 peach days.
						</p>
					</div>
				</div>

				<div className='view-recipes-box'>
					<a href='#Recipes' target="_blank">
						<h2>> VIEW RECIPES</h2>
					</a>
				</div>
				
				<div className='fruit-info-container-desktop'>
					<div className='fruit-info-paragraph-box'>
						<FruitParagraph 
							heading='How do I pick a good berry?'
							para="Do you know where your local supermarket's berries come from? If 
							the berries are hard or crunchy, oversized, or dry, you can bet 
							that they aren't local. Strawberries, like most fragile fruits, 
							reach their peak of perfection just before they get soft. It is 
							the moment of ripeness when fruit sugar levels spike, and color is
							at its peak. Our fresh strawberries are dark red throughout, so 
							juicy they drip, and so sweet that you won't even want to dip 
							them in sugar. Unless your supermarket buys from a local supplier
							that delivers daily, there will be no comparison between 
							store-bought and local."
						/>
						<FruitParagraph 
							heading='How do I pick a good berry?'
							para="Do you know where your local supermarket's berries come from? If 
							the berries are hard or crunchy, oversized, or dry, you can bet 
							that they aren't local. Strawberries, like most fragile fruits, 
							reach their peak of perfection just before they get soft. It is 
							the moment of ripeness when fruit sugar levels spike, and color is
							at its peak. Our fresh strawberries are dark red throughout, so 
							juicy they drip, and so sweet that you won't even want to dip 
							them in sugar. Unless your supermarket buys from a local supplier
							that delivers daily, there will be no comparison between 
							store-bought and local."
						/>
						<FruitParagraph 
							heading='How do I pick a good berry?'
							para="Do you know where your local supermarket's berries come from? If 
							the berries are hard or crunchy, oversized, or dry, you can bet 
							that they aren't local. Strawberries, like most fragile fruits, 
							reach their peak of perfection just before they get soft. It is 
							the moment of ripeness when fruit sugar levels spike, and color is
							at its peak. Our fresh strawberries are dark red throughout, so 
							juicy they drip, and so sweet that you won't even want to dip 
							them in sugar. Unless your supermarket buys from a local supplier
							that delivers daily, there will be no comparison between 
							store-bought and local."
						/>
					</div>
					<div className='fruit-info-pictures-box'>
						<img src={straw} alt="strawberries"/>
						<img src={straw} alt="strawberries"/>
					</div>
				</div>

				<div className='fruit-info-container-mobile'>
						<FruitParagraph 
							heading='How do I pick a good berry?'
							para="Do you know where your local supermarket's berries come from? If 
							the berries are hard or crunchy, oversized, or dry, you can bet 
							that they aren't local. Strawberries, like most fragile fruits, 
							reach their peak of perfection just before they get soft. It is 
							the moment of ripeness when fruit sugar levels spike, and color is
							at its peak. Our fresh strawberries are dark red throughout, so 
							juicy they drip, and so sweet that you won't even want to dip 
							them in sugar. Unless your supermarket buys from a local supplier
							that delivers daily, there will be no comparison between 
							store-bought and local."
						/>
						<img src={straw} alt="strawberries"/>
						<FruitParagraph 
							heading='How do I pick a good berry?'
							para="Do you know where your local supermarket's berries come from? If 
							the berries are hard or crunchy, oversized, or dry, you can bet 
							that they aren't local. Strawberries, like most fragile fruits, 
							reach their peak of perfection just before they get soft. It is 
							the moment of ripeness when fruit sugar levels spike, and color is
							at its peak. Our fresh strawberries are dark red throughout, so 
							juicy they drip, and so sweet that you won't even want to dip 
							them in sugar. Unless your supermarket buys from a local supplier
							that delivers daily, there will be no comparison between 
							store-bought and local."
						/>
						<img src={straw} alt="strawberries"/>
						<FruitParagraph 
							heading='How do I pick a good berry?'
							para="Do you know where your local supermarket's berries come from? If 
							the berries are hard or crunchy, oversized, or dry, you can bet 
							that they aren't local. Strawberries, like most fragile fruits, 
							reach their peak of perfection just before they get soft. It is 
							the moment of ripeness when fruit sugar levels spike, and color is
							at its peak. Our fresh strawberries are dark red throughout, so 
							juicy they drip, and so sweet that you won't even want to dip 
							them in sugar. Unless your supermarket buys from a local supplier
							that delivers daily, there will be no comparison between 
							store-bought and local."
						/>					
				</div>

    </div>
  )
}

function FruitParagraph(props) {
  return (
		<div className='fruit-paragraph'>
			<h2>{props.heading}</h2>
			<p>{props.para}</p>
		</div>
	)
}

export default FruitTop