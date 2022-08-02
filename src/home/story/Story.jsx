import React from 'react'
import './story.css'

import staff from '../../assets/shaw orchards staff wider.jpg';
import orchard from '../../assets/orchard low res.jpg';

function Story() {
    return (
        <div className='story'>
            <h1>OUR STORY</h1>

            <div className='split-container'>  
                <div className='split-item-left'>
                    <p>
                        For 113 years our family farm has been producing fresh fruits and vegetables. Located on the historic Mason-Dixon line, our farm market offers some of the best quality fruit you'll find anywhere in the country, as well as local produce, jams, jellies, flowers, and canned goods.
                    </p>
                    <p>
                        The orchard is open for pick-your-own strawberries, raspberries, pumpkins, cherries, blueberries, and apples. Our website is updated weekly and is the best way to stay informed of the season.
                    </p>
                    <p>
                        As always, we hope you find your visit to Shaw Orchards to be an enjoyable one.  We are committed to bringing you the finest quality, home-grown produce season after season.  See you soon!
                    </p>
                    <p className='signature'>
                        - Barron &amp; Jana Shaw
                    </p>
                </div>

                <div className='split-item-right'>
                    <img src={staff} alt="peach"/>
                    <img src={orchard} alt="orchard"/>
                </div>
            </div> 





        </div>
    )
}

export default Story