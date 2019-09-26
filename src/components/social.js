import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faLinkedin,
  faDev,
  faTwitter,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'

import '../styles/layout.css'

const Social = () => (
  <div>
    <div className="socialContent">
      <a
        href="https://github.com/sarahlkatz"
        aria-label="Visit @sarahlkatz on Github"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="socialImage"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://linkedin.com/in/sarahlkatz"
        aria-label="Visit sarahlkatz on LinkedIn"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="socialImage"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://twitter.com/sarahscode"
        aria-label="Visit @sarahscode on Twitter"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="socialImage"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://dev.to/sarahscode"
        aria-label="Visit @sarahscode on dev.to"
      >
        <FontAwesomeIcon
          icon={faDev}
          className="socialImage"
          aria-hidden="true"
        />
      </a>
      <a href="rss.xml" aria-label="Visit the rss feed for Sarah's blog">
        <FontAwesomeIcon
          icon={faRss}
          className="socialImage"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://medium.com/@sarahscode"
        aria-label="Visit @sarahscode on Medium"
      >
        <FontAwesomeIcon
          icon={faMedium}
          className="socialImage"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
)

export default Social