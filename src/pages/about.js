import * as React from 'react'
import Layout from '../components/my-layout'
import Projects from '../components/project-cards'
import ProjectData from '../data/MyProjects.json'
import SimpleSlider from '../components/simple-slider'


const AboutPage = () => {


  return (
    <Layout pageTitle="About Me">
      <p>About Me Section.</p>
  
      <SimpleSlider></SimpleSlider>
      
      <h1>Some stuff</h1>
      <Projects projectData={ProjectData.projects}/>

      
    </Layout>
  )
}

export default AboutPage