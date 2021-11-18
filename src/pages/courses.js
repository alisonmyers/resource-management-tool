import * as React from 'react'
import Layout from '../components/my-layout'
import CourseTimeLine from '../components/courses'

const AboutPage = () => {
  return (
    <Layout pageTitle="Course History">
      <div>
        <CourseTimeLine></CourseTimeLine>
      </div>
    </Layout>
  )
}

export default AboutPage