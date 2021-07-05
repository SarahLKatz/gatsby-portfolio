const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blogs` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  return graphql(`
    {
      allMarkdownRemark(
      sort: { fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: 1000
    ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              draft
              date
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
    createRedirect({
      fromPath: `/blog`,
      toPath: `/`,
      isPermanent: true,
      redirectInBrowser: true
    })
    createRedirect({
      fromPath: `/blog/1`,
      toPath: `/`,
      isPermanent: true,
      redirectInBrowser: true
    })
    posts.forEach(({ node }, idx) => {
      createRedirect({
        fromPath: `/b/${node.frontmatter.date}`,
        toPath: `${node.frontmatter.path}`,
        isPermanent: true,
        redirectInBrowser: true
      })
      const prevPath = (idx > 0) ? posts[idx-1].node.frontmatter.path : ''
      const nextPath = (idx < posts.length-1) ? posts[idx+1].node.frontmatter.path : ''
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          prevPath,
          nextPath
        },
      })
    })
  })
}
