import * as React from 'react'
import Layout from '../components/my-layout'
import Projects from '../components/project-cards'
import ProjectData from '../data/MyProjects.json'
import getObjects from '../api/get-object'


const AboutPage = () => {

  const projects = ProjectData.projects; 

  return (
    <Layout pageTitle="Sketching">

      <p>Some text here </p>
      <Projects projectData={getObjects(projects, "id", "ETEC512-1")}/>

      <p>Some text here </p>

      <Projects projectData={getObjects(projects, "id", "ETEC512-2")}/>
      
    </Layout>
  )
}

export default AboutPage