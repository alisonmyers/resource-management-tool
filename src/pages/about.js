import * as React from 'react'
import Layout from '../components/my-layout'
import ProjectDetailModal from '../components/project-detail-modal'
import ProjectCards from '../components/project-cards'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>About Me Section.</p>

      <ProjectCards></ProjectCards>

      <ProjectDetailModal></ProjectDetailModal>
    
    </Layout>
  )
}

export default AboutPage