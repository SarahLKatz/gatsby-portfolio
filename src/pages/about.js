import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import '../styles/about.css'

const AboutPage = ({ data }) => (
  <Layout>
    <section className="aboutMe">
      <hr />
      <span className="headline">Hi, I'm Sarah.</span>
      <p>
        After graduating in late 2017 from the inaugural Web Development
        Fellowship at Fullstack Academy of Code (a partnership with NYC's Tech
        Talent Pipeline), I spent a year working as a Fullstack UI Developer,
        working primarily on a UI automation testing project (while also jumping
        in on a few other small projects here and there). During this time, I
        gained experience with agile and scrum procedures, as well as experience
        working with a product team and collaborating on large shared
        repositories on GitHub. I am currently working as a full stack engineer
        at a healthtech company, using my coding skills and my passion for
        helping others to constantly improve our product.
      </p>
      <p>
        My current technology stack includes HTML, CSS, Javascript, React,
        Redux, Node.js, Express, PostgreSQL, Gatsby, and some GraphQL knowledge.
        Additionally, I have experience with testing frameworks including Jest
        and Jasmine, as well as UI testing with Selenium Webdriver. Other tools
        with which I am experienced include GitHub, Slack, and JIRA.
      </p>
      <p>
        Prior to studying web development, I worked as a freelance graphic
        designer (primarily print-based) and an assistant office manager. My
        bachelors degree is in biology (Yeshiva University), and I have an
        additional bachelors in health sciences (SUNY Downstate), as well as a
        certificate in computer essentials for graphic design (Fashion Institute
        of Technology).
      </p>
      <p>
        When I'm not coding, you can find me reading Harry Potter (or
        occasionally a different book), running the streets of Manhattan,
        getting my barre3 on, taking in a baseball game, watching sports on TV,
        and visiting Disney theme parks.
      </p>
    </section>
    <a href={data.file.publicURL} className="resumeLink">
      Downloadable Resume
    </a>
  </Layout>
)

export default AboutPage

export const query = graphql`
  {
    file(relativePath: { eq: "Sarah-Katz-Resume.pdf" }) {
      publicURL
    }
  }
`