import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

// import Layout from '../components/layout'
import Blog from '../templates/blog.js'
import '../styles/indexPage.css'

// const IndexPage = ({
//   data: { allMarkdownRemark, allProjectsJson },
  
// }) => {
//   const blog = allMarkdownRemark.edges[0].node
//   const project = allProjectsJson.edges[0].node
//   return (
//     <Layout>
//       {/* <section className="container">
//         <article className="blurb">
//           <hr />
//           <div className="about">
//             <div className="lazyImage">
//               <Img fluid={file.childImageSharp.fluid} alt="Picture of Sarah" />
//             </div>
//             <div>
//               <h2>Hi, I'm Sarah!</h2>
//               <p>
//                 After graduating from a coding bootcamp in late 2017 as a full
//                 stack engineer, I spent a year working on automated UI testing
//                 in an agile scrum environment. I am love writing code to create
//                 beautiful and user-friendly experiences, and I am excited to be
//                 using this passion in my work as a full stack engineer at a
//                 healthtech company.
//               </p>
//               <p>
//                 Prior to working as a software engineer, I worked in office
//                 management and graphic design, and I have additional education
//                 in biology and health sciences.
//               </p>
//               <Link to="/about">Learn More About Me</Link>
//             </div>
//           </div>
//         </article>

//         <article className="blurb">
//           <hr />
//           <h2>My Latest Project:</h2>
//           <h3>{project.name}</h3>
//           <div className="blurbProject">
//             <div className="lazyImage">
//               <Img
//                 fluid={projImg.node.fluid}
//                 alt={`${project.name} home screen`}
//               />
//             </div>
//             <div>
//               <p>{project.description}</p>
//               <a href={project.live}>Live Link</a>
//               <a href={project.github}>Code Repository</a>
//             </div>
//           </div>
//           <Link to="/projects">View More Projects</Link>
//         </article>

//         <article className="blurb">
//           <hr />
//           <h2>My Latest Blog Post:</h2>
//           <h3 className="blurbTitle">{blog.frontmatter.title}</h3>
//           <div className="inline">
//             <p>
//               {blog.excerpt}
//             </p>
//             <Link to={blog.frontmatter.path}>Finish Reading</Link>
//           </div>
//           <Link to="/blog">Read More Blog Posts</Link>
//         </article>
//       </section> */}
//     </Layout>
//   )
// }


const PageQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}, limit: 5, sort: {fields: frontmatter___date, order: DESC}) {
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
    `}
    render={data => (
      <Blog
        data={data}
        pageContext={{
          limit: 5,
          skip: 0,
          numPages: 2,
          currentPage: 1,
        }}
      />
    )}
  />
)

export default PageQuery;