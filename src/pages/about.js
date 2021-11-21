import * as React from 'react'
import Layout from '../components/my-layout'
import Projects from '../components/project-cards'
import ProjectData from '../data/MyProjects.json'

const AboutPage = () => {


  return (
    <Layout pageTitle="About Me">
      <p>About Me Section.</p>

      <Projects projectData={ProjectData.projects}/>
    
    </Layout>
  )
}

export default AboutPage