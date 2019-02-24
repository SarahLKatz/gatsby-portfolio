import React from 'react'
import Layout from '../components/layout'

const TechStack = () => (
  <Layout>
    <div>
      <h3>I Can Work With...</h3> 
      <ul style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        <li style={{listStyle: "none", width: "23%"}}>JavaScript</li>
        <li style={{listStyle: "none", width: "23%"}}>HTML</li>
        <li style={{listStyle: "none", width: "23%"}}>CSS</li>
        <li style={{listStyle: "none", width: "23%"}}>React</li>
        <li style={{listStyle: "none", width: "23%"}}>Redux</li>
        <li style={{listStyle: "none", width: "23%"}}>Next.js</li>
        <li style={{listStyle: "none", width: "23%"}}>Node.js</li>
        <li style={{listStyle: "none", width: "23%"}}>Express</li>
        <li style={{listStyle: "none", width: "23%"}}>PostgreSQL</li>
        <li style={{listStyle: "none", width: "23%"}}>Sequelize</li>
        <li style={{listStyle: "none", width: "23%"}}>Jasmine</li>
        <li style={{listStyle: "none", width: "23%"}}>Mocha</li>
        <li style={{listStyle: "none", width: "23%"}}>Chai</li>
        <li style={{listStyle: "none", width: "23%"}}>Selenium Webdriver</li>
        <li style={{listStyle: "none", width: "23%"}}>Jest</li>
      </ul>
    </div>
    <div>
      <h3>I'm Still Learning...</h3>
      <ul style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        <li style={{listStyle: "none", width: "23%"}}>Gatsby</li>
        <li style={{listStyle: "none", width: "23%"}}>GraphQL</li>
      </ul>
    </div>
  </Layout>
)

export default TechStack