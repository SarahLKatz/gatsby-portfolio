import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/blog.css'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h3>From the mind of Sarah...</h3>
        <h1 className="postTitle">{post.frontmatter.title}</h1>
        <h4 className="postData">{post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div
          className="postNav"
        >
          {pageContext.prevPath ? (
            <Link to={pageContext.prevPath}>Previous Post</Link>
          ) : (
            <div />
          )}
          <Link to="/blog">Post List</Link>
          {pageContext.nextPath ? (
            <Link to={pageContext.nextPath}>Next Post</Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
