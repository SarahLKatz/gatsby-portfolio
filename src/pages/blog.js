import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import rss from '../images/rss.svg'

import '../styles/blog.css'

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="rssFeed">
        <h3>From the mind of Sarah...</h3>
        <Link to="rss.xml">
          <span>RSS Feed:&nbsp;</span>
          <img src={rss} alt="blog rss subscription" className="socialImage" />
        </Link>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.path}>
            <h3 className="postTitle">{node.frontmatter.title}</h3>
          </Link>
          <div>
            <span className="postData">
              {node.frontmatter.date} — {node.timeToRead} minute read
            </span>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
      <h5>
        Older blog posts can be found on&nbsp;
        <a
          href="https://medium.com/@sarahscode"
          style={{ textDecoration: 'none' }}
        >
          Medium
        </a>
      </h5>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`

export default Blog