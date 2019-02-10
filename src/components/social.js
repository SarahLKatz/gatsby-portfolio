import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import medium from '../images/medium.png'

const Social = () => (
  <div
    style={{
      background: 'lightsteelblue', // keep or change the color? This is the gatsby default 
      marginBottom: '1rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.725rem 0.54375rem',
      }}
    >
      <a href='https://github.com/sarahlkatz'>
        <img src={github} alt='github @sarahlkatz' style={{width: '2vw', height: '2vw', margin: '1vw'}}/>
      </a>
      <a href='https://linkedin.com/in/sarahlkatz'>
        <img src={linkedin} alt='linkedin @sarahlkatz' style={{width: '2vw', height: '2vw', margin: '1vw'}}/>
      </a>
      <a href='https://twitter.com/sarahscode'>
        <img src={twitter} alt='twitter @sarahscode' style={{width: '2vw', height: '2vw', margin: '1vw'}}/>
      </a>
      <a href='https://medium.com/@sarahscode'>
        <img src={medium} alt='medium @sarahscode' style={{width: '2vw', height: '2vw', margin: '1vw'}}/>
      </a>
    </div>
  </div>
)

export default Social
