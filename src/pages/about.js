import * as React from 'react'
import Layout from '../components/my-layout'
import ProjectDetailModal from '../components/project-detail-modal.js'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>About Me Section.</p>

      <ProjectDetailModal></ProjectDetailModal>
    
    </Layout>
  )
}

export default AboutPage