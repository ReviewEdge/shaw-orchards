import React from 'react'
import { Title, Navbar2, News, Footer } from '../features'
import './history.css'

import farm from '../assets/old farm.jpg'
import clay from '../assets/clay shaw.jpg'
import barron from '../assets/barron shaw.gif'

function History() {
  return (
    <div >
      <Title />
      <Navbar2 />
      <News />
        <div className='history'>
          <h1>History</h1>
          <div className='history-picture-box'>
            <img src={farm} alt='old farm' />
            <p>The Shaw Farm,  c. 1890</p>
          </div>
          <div className='history-info-container'>
            <div>
              <h2>The Shaw Family</h2>
              <p>
                The Shaw family has deep roots reaching back seven generations. The family farm began in 1841 when Jacob Yost, a shoemaker purchased the land. His son, Charles Yost, built the family's farmhouse in 1860. It is still home to the family, 10 feet north of the Mason Dixon Line. Charles' grandson, Russell Shaw, planted the first commercial fruit trees in 1909.
              </p>
              <p>
                Russell's son, Clay, expanded the operation after he returned from World War II, planting Red Delicious and other popular apple varieties. His son, Glenn, returned to the farm in the 70's after earning advanced degrees in food science and horticulture. Glenn's wife, Mary Sue, became a familiar face at the farm market, and was the driving force behind our move into pick-your-own. In 2013, the seventh generation moved back to the farm as Barron and his wife, Jana, took over the operation.
              </p>
            </div>
            <div>
              <img src={clay} alt='Clay Shaw' />
              <p className='history-caption'>Clay Shaw</p>
            </div>
            <div>
              <h2>Shaw's Today</h2>
              <p>
                Shaw Orchards has become more diverse in recent years, offering the latest and most exciting varieties of apples and peaches. We have also added several other fruits, like raspberries and blackberries. In addition to high quality fruit, we also offer a full line of custom-made jams, jellies, salad dressings, and dessert mixes. One visit to our roadside market and you will be sure to appreciate our commitment to quality. Once the original orchard packing house, the market now welcomes customers to its doors, offering them quality produce and friendly service.
              </p>
              <p>
                Shaw Orchards - celebrating a heritage of home-grown country goodness!
              </p>
            </div>
            <div>
              <img src={barron} alt='Barron Shaw' />
              <p className='history-caption'>Barron Shaw</p>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default History