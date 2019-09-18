import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      Oops! It looks like you've found a page that doesn't exist. I'm guessing
      this was not what you intended. But here's some good news: {' '}
      <Link to="/">you can click here to return to the homepage!</Link>
    </p>
    <p>
      If you have a few minutes, I'd love if you could tweet at me at{' '}
      <a href="http://www.twitter.com/sarahscode">@sarahscode</a> (or DM me if
      you prefer) to let me know what you were trying to do that led you to this
      page so that I can investigate further and see if I can fix some broken
      links. Thank you!!
    </p>
  </Layout>
)

export default NotFoundPage