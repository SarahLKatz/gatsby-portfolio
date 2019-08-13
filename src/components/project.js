import React from 'react'

import '../styles/projects.css'

const Project = ({ projectData }) => { // figure out title line, layout desired
  const { name, date, at, description, github, live, demo, tech } = projectData
  return (
    <section className="projectContainer">
      <div className="projectTitle">
        <span>{name}</span> ~ <span>{date}</span>
      </div>
      {at && (
        <div className="projectAt">
          <span>Created while at</span> {at}
        </div>
      )}
      <p className="projectDescription">{description}</p>
      <p className="projectTech">
        <span className="bold">Technologies Used:</span> {tech}
      </p>
      <div className="projectLinks">
        {github && (
          <a href={github}>
            Repository
          </a>
        )}
        {live && (
          <a href={live}>
            Live Link
          </a>
        )}
        {demo && (
          <a href={demo}>
            Video Presentation
          </a>
        )}
      </div>
    </section>
  )
}

export default Project