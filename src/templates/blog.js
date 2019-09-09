import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import rss from '../images/rss.svg'

import '../styles/blog.css'

const Blog = ({data, pageContext}) => {
  const { numPages, currentPage } = pageContext
  return (
    <Layout>
      <div className="rssFeed">
        <h2>From the mind of Sarah...</h2>
        <a href="rss.xml">
          <span>RSS Feed:&nbsp;</span>
          <img src={rss} alt="blog rss subscription" className="socialImage" />
        </a>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <Link to={node.frontmatter.path}>
            <h3 className="postTitle">{node.frontmatter.title}</h3>
          </Link>
          <div>
            <span className="postData">
              {node.frontmatter.date} — {node.timeToRead} minute read
            </span>
            <p>{node.excerpt}</p>
          </div>
        </article>
      ))}
      {numPages === currentPage && <span>
        Older blog posts can be found on&nbsp;
        <a
          href="https://medium.com/@sarahscode"
          style={{ textDecoration: 'none' }}
        >
          Medium
        </a>
      </span>}
      <nav className="postNav">
        {currentPage > 1 ? (
          <Link to={`/blog/${currentPage-1}`}>Previous Page</Link>
        ) : (
          <div />
        )}
        {currentPage < numPages ? (
          <Link to={`/blog/${currentPage+1}`}>Next Page</Link>
        ) : (
          <div />
        )}
      </nav>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
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
