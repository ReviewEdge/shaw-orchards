import React from 'react'
import './landing.css'

import Slideshow, {SlideshowItem} from '../../components/slideshow/Slideshow'

import peach from '../../assets/peach1.jpg';
import pumpkin from '../../assets/pumpkins.jpg';
import straw from '../../assets/straw.jpg';


function Landing() {
  return (
    <div className='shaw-orchards__landing'>
      
      <div className='shaw-orchards__landing-flex-container'>  
        <div className='flex-item-left'>

            <div className='landing-slideshow'>
                <Slideshow>
                    <SlideshowItem>
                        <img src={peach} alt="peach"/>
                    </SlideshowItem>
                    <SlideshowItem>
                        <img src={pumpkin} alt="pumpkin"/>
                    </SlideshowItem>
                    <SlideshowItem>
                        <img src={straw} alt="strawberry"/>
                    </SlideshowItem>
                </Slideshow>
            </div>
        </div>

        <div className='flex-item-right'>
            <div className='shaw-orhcards__in-season-box'>
                <h3>IN SEASON NOW!</h3>
                <ul>
                    <li>Peaches<span> - PYO</span></li>
                    <li>Blueberries<span> - PYO</span></li>
                    <li>Melons</li>
                    <li>Produce</li>
                    <li>Cherries</li>
                </ul>
                <button className='shaw-orchards__yellow-button'>SEASON DATES, RECIPES, AND MORE!</button>
            </div>
            <div className='shaw-orhcards__newsletter-box'>
                <h3>FROM OUR NEWSLETTER!</h3>
                <button className='shaw-orchards__yellow-button'>SUBSCRIBE</button>
                <p><span className='shaw-orchards__date'>JULY 7: </span>July is here and peach season is underway! We have several early varieties of peaches in the market now. Sentry is our old standby with good size and great flavor. Early 8 Ball is a recently-planted option that packs a little more color and big flavor into a smaller peach. This year, we also will...</p>
                <button className='shaw-orchards__yellow-button'>CONTINUE READING</button>
            </div>
        </div>
      </div>  
    </div>
  )
}
 
export default Landing
