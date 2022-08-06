import React from 'react'
import { Title, Navbar2, News, Footer } from '../features'
import './blog.css'

import title from '../assets/the fruitful tree title.png';

function Blog() {
  return (
    <div>
      <Title />
      <Navbar2 />
      <News />
      <div className='blog'>
        <img className='blog-title' src={title} alt="the fruitful tree"/>
        <div className='tree-container'>
          <div className='left-blogs'>
            
            <LeafLeft 
              monthAndYear="JANUARY 2022"
              title="After 2020..."
              snippet="
                A previous post covered the “bad” from 2020. This one is more about the “good.”
                You may be surprised that there was any good to last year. But if you visited our farm, I hope you made some happy memories.
                As the virus spread in the spring, we had no idea what to expect from the the 2020 marketing season. But we knew that if people were going to come out to the orchard, they would want to...
                hellloet therea fasldkfa sdf asdf asd fas df asdf asdf as df asd fas df asd fas df
              "
             />

            <LeafLeft 
              monthAndYear="AUGUST 2019"
              title="After 2020..."
              snippet="
                A previous post covered the “bad” from 2020. This one is more about the “good.”
                You may be surprised that there was any good to last year. But if you visited our farm, I hope you made some happy memories.
                As the virus spread in the spring, we had no idea what to expect from the the 2020 marketing season. But we knew that if people were going to come out to the orchard, they would want to...
                hellloet therea fasldkfa sdf asdf asd fas df asdf asdf as df asd fas df asd fas df
              "
             />
            
          </div>

          <div className='trunk'>
          </div>

          <div className='right-blogs'>

            {/* Menu:  */}
            <div className='blog-preview-box-shell'>
              <div className='blog-preview-box-stem-shell'>
                <div className='blog-preview-box-stem'>
                  <p>.......................</p>
                </div>
              </div>

              <div className='blog-menu blog-preview-box'>
                <span>〉WHY DO WE HAVE A BLOG?</span>
                <span>〉OUR (SHORT) STORY</span>
                <span>〉POST ARCHIVES</span>
              </div>
            </div>

            <LeafRight 
              monthAndYear="JANUARY 2021"
              title="After 2020..."
              snippet="
                A previous post covered the “bad” from 2020. This one is more about the “good.”
                You may be surprised that there was any good to last year. But if you visited our farm, I hope you made some happy memories.
                As the virus spread in the spring, we had no idea what to expect from the the 2020 marketing season. But we knew that if people were going to come out to the orchard, they would want to...
                hellloet therea fasldkfa sdf asdf asd fas df asdf asdf as df asd fas df asd fas df
              "
            />

            <LeafRight 
              monthAndYear="JANUARY 2021"
              title="After 2020..."
              snippet="
                A previous post covered the “bad” from 2020. This one is more about the “good.”
                You may be surprised that there was any good to last year. But if you visited our farm, I hope you made some happy memories.
                As the virus spread in the spring, we had no idea what to expect from the the 2020 marketing season. But we knew that if people were going to come out to the orchard, they would want to...
                hellloet therea fasldkfa sdf asdf asd fas df asdf asdf as df asd fas df asd fas df
              "
            />
          </div>
        </div>  {/* <--tree */}
      </div>
      <Footer />
    </div>
  )
}


function LeafLeft(props) {
  return (
    <div className='blog-preview-box-shell'>
    <div className='blog-preview-box'>
      <h2>{props.monthAndYear}</h2>
      <h3>{props.title}</h3>
      <p>{props.snippet}</p>
      <h4>&nbsp;CONTINUE READING 〉</h4>
    </div>

    <div className='blog-preview-box-stem-shell'>
      <div className='blog-preview-box-stem'>
      </div>
    </div>
  </div>
  )
}


function LeafRight(props) {
  return (
    <div className='blog-preview-box-shell'>
      <div className='blog-preview-box-stem-shell'>
        <div className='blog-preview-box-stem'>
          <p>.......................</p>
        </div>
      </div>

      <div className='blog-preview-box'>
        <h2>{props.monthAndYear}</h2>
        <h3>{props.title}</h3>
        <p>{props.snippet}</p>
        <h4>&nbsp;CONTINUE READING 〉</h4>
      </div>
    </div>
  )
}


export default Blog