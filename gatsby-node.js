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
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    console.log('all!', posts[0].node)
    posts.forEach(({ node }, idx) => {
      const prevPath = (idx > 0) ? posts[idx-1].node.frontmatter.path : ''
      const nextPath = (idx < posts.length-1) ? posts[idx+1].node.frontmatter.path : ''
      console.log(node.frontmatter.path)
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