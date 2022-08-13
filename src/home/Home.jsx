import React, { useState } from 'react'
import { Title, Navbar2, News, Footer, NewsletterPop } from '../features';
import {Landing, Story} from './';
import { RiCloseLine } from 'react-icons/ri'
import './home.css'

const Home = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [isBlurryFace, setIsBlurryFace] = useState(true);

  return (
      <div className="home">
  
        <RiCloseLine className={isNavExpanded ? "home-newsletter-pop-x open" : "home-newsletter-pop-x"}
          size={23}  
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            setIsBlurryFace(!isBlurryFace);
          }}
        />

        <NewsletterPop isOpen={isNavExpanded ? "newsletter-pop open" : "newsletter-pop"} />
        <div className={isNavExpanded ? "home-blurry-face" : "home-blurry-nope"}>
          <Title />
          <Navbar2 />
          <News />
          <Landing />
          <Story />
          <Footer />
        </div>
      </div>
  )
}

export default Home
