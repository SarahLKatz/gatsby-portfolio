import React from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/layout'
import '../styles/blog.css'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const disqusShortname = 'sarahlkatz'
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  }
  return (
    <Layout>
      <div className="blogPost">
        <hr />
        <article>
          <h1 className="postTitle">{post.frontmatter.title}</h1>
          <div className="postData">Posted: {post.frontmatter.date}</div>
          <div
            className="postContent"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="postNav">
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
        </article>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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

export default BlogPost