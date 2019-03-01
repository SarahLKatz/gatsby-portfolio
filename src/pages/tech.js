import React from 'react'
import Layout from '../components/layout'

import '../styles/tech.css'

const TechStack = () => (
  <Layout>
    <div>
      <h3>I Can Work With...</h3>
      <ul className="tech-list">
        <li className="tech-item">JavaScript</li>
        <li className="tech-item">HTML</li>
        <li className="tech-item">CSS</li>
        <li className="tech-item">React</li>
        <li className="tech-item">Redux</li>
        <li className="tech-item">Next.js</li>
        <li className="tech-item">Node.js</li>
        <li className="tech-item">Express</li>
        <li className="tech-item">PostgreSQL</li>
        <li className="tech-item">Sequelize</li>
        <li className="tech-item">Jasmine</li>
        <li className="tech-item">Mocha</li>
        <li className="tech-item">Chai</li>
        <li className="tech-item">Selenium Webdriver</li>
        <li className="tech-item">Jest</li>
      </ul>
    </div>
    <div>
      <h3>I'm Still Learning...</h3>
      <ul className="tech-list">
        <li className="tech-item">Gatsby</li>
        <li className="tech-item">GraphQL</li>
      </ul>
    </div>
  </Layout>
)

export default TechStack
