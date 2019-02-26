import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/blog.css'

const Blog = ({ data }) => {
  return (
    <Layout>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
